# Surrey Garden & Landscaping

A marketing and lead-generation website for **Surrey Garden & Landscaping**, a fictional local landscaping business based in Surrey, UK. The site showcases services, project portfolios, FAQs, and enquiry flows so homeowners can learn about the business and request a quote or get in touch.

> **Note:** Business details, copy, and images in `src/content/site.ts` are illustrative portfolio content, not a live trading business.

## What’s in the app

| Area | Routes | Purpose |
| --- | --- | --- |
| Home | `/` | Hero, about, services overview, featured projects, testimonials, service areas |
| Services | `/services`, `/services/$slug` | Service listing and detail pages (patios, fencing, decking, etc.) |
| Projects | `/projects`, `/projects/$slug` | Portfolio gallery and individual case studies |
| Quote | `/quote` | Free quote request form |
| Contact | `/contact` | Contact details and enquiry form |
| FAQs | `/faqs` | Common questions |

Shared chrome (header, footer, layout) lives under `src/components/site/`. UI primitives use [shadcn/ui](https://ui.shadcn.com/) in `src/components/ui/`.

## Tech stack

- **Framework:** [TanStack Start](https://tanstack.com/start) (React 19, file-based routing via [TanStack Router](https://tanstack.com/router))
- **Build / dev:** [Vite](https://vite.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) v4
- **Forms:** React Hook Form + Zod
- **Tooling:** TypeScript, ESLint, Prettier, Vitest

The project was scaffolded with [Lovable](https://lovable.dev) and can be edited there; the codebase is fully yours to run and change locally.

## Prerequisites

- **Node.js** 20+ (LTS recommended). [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) is a convenient way to install it.
- **npm** (comes with Node), or **[Bun](https://bun.sh)** if you prefer the repo’s `bun.lock`.

## Getting started

### 1. Clone the repository

```sh
git clone git@github.com:Lulyatt/Surrey-Garden-And-Landscaping.git
cd Surrey-Garden-And-Landscaping
```

HTTPS:

```sh
git clone https://github.com/Lulyatt/Surrey-Garden-And-Landscaping.git
cd Surrey-Garden-And-Landscaping
```

### 2. Install dependencies

With npm:

```sh
npm install
```

With Bun:

```sh
bun install
```

### 3. Run the dev server

```sh
npm run dev
# or: bun run dev
```

The dev server usually starts at **http://localhost:8080/** (port and host may be adjusted by the Lovable/TanStack Vite config). Open that URL in your browser.

### 4. Other scripts

| Command | Description |
| --- | --- |
| `npm run build` | Production build |
| `npm run build:dev` | Development-mode build |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | ESLint |
| `npm run format` | Prettier write |
| `npm run test` | Vitest (single run) |
| `npm run test:watch` | Vitest watch mode |

## Project layout (essentials)

```text
src/
  routes/          # Pages (TanStack file-based routes)
  content/site.ts  # Business copy, services, projects, testimonials
  components/site/ # Site-specific components
  components/ui/   # Shared UI components
public/            # Static assets
```

To change wording, services, or portfolio items for local development, edit `src/content/site.ts` and the assets under `src/assets/`.

## Deploying

Run `npm run build` and deploy the build output using whatever host supports your TanStack Start / Nitro target. The Vite config is managed by `@lovable.dev/vite-tanstack-config`; avoid duplicate Vite plugins documented in `vite.config.ts` and `AGENTS.md`.

## Lovable sync

To keep using the Lovable editor for this repo:

[Open the project in Lovable](https://lovable.dev/projects/901e1062-3919-4429-acba-5341e2206bd1)

Changes pushed to the connected branch on GitHub sync back into Lovable. See `AGENTS.md` for constraints around history, generated files, and secrets when working with Lovable.

## License

Private project (`package.json` sets `"private": true`).