# Sonthep — Portfolio

A personal portfolio website for presenting web development projects, technical experience, and selected work.

**Focus:** E-commerce · Websites · Business automation  
**ภาษาไทย:** เว็บไซต์รวมผลงานของ Sonthep โดยเน้นเว็บไซต์ E-commerce และเครื่องมือช่วยจัดการงานธุรกิจ

[Explore the source](src/) · [Project data](src/data/projects.ts) · [Contributing](CONTRIBUTING.md)

## Selected repositories

| Project | Focus | What to explore |
| --- | --- | --- |
| [Shopify Automation Tools](https://github.com/Sonthep/shopify-automation-tools) | E-commerce operations | Bulk product workflows, Shopify API integration, and Google Apps Script |
| [Shopify Horizon Customization](https://github.com/Sonthep/shopify-theme-horizon) | Shopify development | Liquid storefront structure and a custom brand directory |
| [Sevenfive E-commerce](https://github.com/Sonthep/v0-ecommerce-redesign-sevenfive) | Storefront development | Next.js storefront pages and localized navigation |
| [User & Order Management](https://github.com/Sonthep/nextjs-prisma-user-management) | Full-stack development | API routes, a service layer, and relational data modeling |
| [Cafe POS](https://github.com/Sonthep/Simple-Cafe-POS) | Learning project | Python order entry, input validation, and receipt calculations |

These links provide source-level examples. Each repository documents its own setup and limitations.

## Website capabilities

- Project listing and individual project pages.
- Responsive layout and light/dark themes.
- Motion and interactive visuals with Framer Motion and Three.js-related libraries.
- Contact integration through EmailJS.
- PostHog analytics integration.
- A server-side resume chat endpoint using the Anthropic SDK.

Service integrations require their respective environment settings. Their presence in the source does not imply a configured live deployment.

## Stack

Next.js 15 · React 19 · TypeScript · Tailwind CSS 4 · Framer Motion

Dependency versions and runnable scripts are defined in [package.json](package.json).

## Run locally

```bash
git clone https://github.com/Sonthep/Portfolio-V3.git
cd Portfolio-V3
npm ci
cp env-example .env
npm run dev
```

Review `env-example` and configure the services you want to use. Open http://localhost:3000.

| Variable group | Purpose |
| --- | --- |
| `NEXT_PUBLIC_EMAILJS_*` | Browser contact form integration |
| `NEXT_PUBLIC_POSTHOG_*` | Analytics client and host |
| `ANTHROPIC_API_KEY` | Server-side resume chat |
| `UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN` | Optional shared chat rate limiting |

Keep server credentials in local environment files or the hosting provider's environment settings.

## Project guide

| Location | Responsibility |
| --- | --- |
| [src/app/](src/app/) | Pages, layouts, and route handlers |
| [src/components/](src/components/) | Reusable interface components |
| [src/data/projects.ts](src/data/projects.ts) | Project entries |
| [src/data/experience.ts](src/data/experience.ts) | Experience entries |
| [src/data/certifications.ts](src/data/certifications.ts) | Certification entries |
| [src/data/tech-stack.ts](src/data/tech-stack.ts) | Technology entries |
| [public/](public/) | Static assets |
| [next.config.js](next.config.js) | Next.js configuration |

## Build and checks

```bash
npx eslint .
npx tsc --noEmit
npm run build
npm start
```

The current `npm run lint` script invokes `next lint`; use `npx eslint .` to invoke ESLint directly. The repository does not define an `npm test` script. These are commands to run, not a claim that validation has passed.

## Maintaining the portfolio

For each project entry, provide a concrete problem, your contribution, the implemented scope, and a source or working demo link. Use screenshots from the actual application and describe measured results only when supporting evidence is available.

Update the data files above when adding work. Follow [CONTRIBUTING.md](CONTRIBUTING.md) for changes to this website.

## Contact

Visit [Sonthep on GitHub](https://github.com/Sonthep) for repositories and project discussions.
