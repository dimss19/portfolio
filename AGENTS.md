<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Commands

- `npm run dev` — start dev server (localhost:3000)
- `npm run build` — production build
- `npm run lint` — ESLint only (no typecheck script)
- `npx @next/codemod@canary upgrade latest` — run upgrade codemod when updating Next.js

## Requirements

- **Node.js 20.9+** required (Node 18 no longer supported)
- **TypeScript 5.1+** required

## Stack

- **Next.js 16.2** (App Router)
- **React 19.2** — not React 18
- **Tailwind CSS v4** — uses `@tailwindcss/postcss` plugin, NOT v3's `tailwindcss` PostCSS plugin
- **Geist + JetBrains Mono** fonts via `next/font/google`
- **TypeScript** with `@/*` path alias mapping to project root

## Architecture

- `app/page.tsx` — composes all section components
- `app/layout.tsx` — root layout with Geist + JetBrains Mono fonts
- `app/globals.css` — `@theme inline` tokens + glassmorphism utilities
- `components/` — 11 section components (FloatingNav, Hero, Skills, Projects, WorkExperience, Education, Organization, Certifications, Testimonials, ContactCTA, BackToTop)
- `data/portfolio.ts` — all typed content data
- Dark theme: `#131313` background, `#e2e2e2` text
- CSS transitions only — NO Framer Motion
- `WorkExperience.tsx` and `BackToTop.tsx` use `"use client"`

## Tailwind CSS v4 Differences

- **No `tailwind.config.js`** — all config is in CSS using `@theme` directive
- **Import syntax**: `@import "tailwindcss"` replaces `@tailwind base/components/utilities`
- **PostCSS plugin**: `@tailwindcss/postcss` (NOT the old `tailwindcss` plugin)
- **Design tokens**: define in `@theme { --color-*, --font-*, --breakpoint-* }`
- **CSS variable refs**: use `@theme inline { --color-x: var(--other-var); }`

```css
/* Correct v4 pattern */
@import "tailwindcss";
@theme inline {
  --font-sans: "Geist", sans-serif;
  --color-background: #131313;
}
```

## Gotchas

- No test suite exists — do not assume test commands
- No typecheck script — `npm run lint` is the only static analysis
- Tailwind v4 uses `@theme inline` blocks in CSS, not `tailwind.config.js`
- All SVG attributes must use JSX camelCase (`viewBox`, `strokeLinecap`, `strokeLinejoin`, `strokeWidth`, `fillRule`, `clipRule`)
