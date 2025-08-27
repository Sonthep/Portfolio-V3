const ks = [
  "BOOK_LANG",
  "foo",
  "HOST",
  "NEXT_PUBLIC_EMAILJS_PUBLIC_KEY",
  "NEXT_PUBLIC_EMAILJS_SERVICE_ID",
  "NEXT_PUBLIC_EMAILJS_TEMPLATE_ID",
  "NEXT_PUBLIC_POSTHOG_HOST",
  "NEXT_PUBLIC_POSTHOG_KEY",
  "NODE_DISABLE_COLORS",
  "NODE_ENV",
  "NODE_UNIQUE_ID",
  "PATH",
];
const o = {};
for (const k of ks) o[k] = process.env[k] ?? null;
console.log(o);