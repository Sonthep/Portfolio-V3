import Anthropic from "@anthropic-ai/sdk";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { buildSystemPrompt } from "@/lib/chat-context";

let client: Anthropic | null = null;
function getClient(): Anthropic {
  if (!client) client = new Anthropic();
  return client;
}

const SYSTEM_PROMPT = buildSystemPrompt();

const MAX_MESSAGE_LENGTH = 2000;
const MAX_MESSAGES = 20;
const RATE_LIMIT_WINDOW = "60 s";
const RATE_LIMIT_MAX_REQUESTS = 10;

// Durable, cross-instance rate limiting when Upstash Redis is configured.
// Falls back to an in-memory limiter (per-instance only) for local dev / previews without it.
const redisLimiter =
  process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN
    ? new Ratelimit({
        redis: new Redis({
          url: process.env.UPSTASH_REDIS_REST_URL,
          token: process.env.UPSTASH_REDIS_REST_TOKEN,
        }),
        limiter: Ratelimit.slidingWindow(RATE_LIMIT_MAX_REQUESTS, RATE_LIMIT_WINDOW),
        prefix: "chat-ratelimit",
        analytics: false,
      })
    : null;

const memoryRequestLog = new Map<string, number[]>();

function isRateLimitedInMemory(ip: string): boolean {
  const now = Date.now();
  const windowMs = 60_000;
  const recent = (memoryRequestLog.get(ip) ?? []).filter((t) => now - t < windowMs);
  recent.push(now);
  memoryRequestLog.set(ip, recent);
  return recent.length > RATE_LIMIT_MAX_REQUESTS;
}

async function isRateLimited(ip: string): Promise<boolean> {
  if (redisLimiter) {
    const { success } = await redisLimiter.limit(ip);
    return !success;
  }
  return isRateLimitedInMemory(ip);
}

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

function isValidMessages(value: unknown): value is ChatMessage[] {
  if (!Array.isArray(value) || value.length === 0 || value.length > MAX_MESSAGES) return false;
  return value.every(
    (m) =>
      m &&
      (m.role === "user" || m.role === "assistant") &&
      typeof m.content === "string" &&
      m.content.length > 0 &&
      m.content.length <= MAX_MESSAGE_LENGTH
  );
}

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (await isRateLimited(ip)) {
    return new Response("Too many requests. Please try again in a minute.", { status: 429 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return new Response("Invalid JSON.", { status: 400 });
  }

  const messages = (body as { messages?: unknown })?.messages;
  if (!isValidMessages(messages)) {
    return new Response("Invalid request.", { status: 400 });
  }

  if (!process.env.ANTHROPIC_API_KEY) {
    return new Response("Chat is not configured.", { status: 503 });
  }

  const stream = getClient().messages.stream({
    model: "claude-haiku-4-5",
    max_tokens: 1024,
    system: SYSTEM_PROMPT,
    messages,
  });

  const encoder = new TextEncoder();
  return new Response(
    new ReadableStream({
      async start(controller) {
        stream.on("text", (delta) => controller.enqueue(encoder.encode(delta)));
        stream.on("end", () => controller.close());
        stream.on("error", (err) => controller.error(err));
      },
    }),
    { headers: { "Content-Type": "text/plain; charset=utf-8" } }
  );
}
