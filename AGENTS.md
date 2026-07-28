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

- **Next.js 16.2** (App Router, `"use client"` throughout)
- **React 19.2** — not React 18; new hooks: `use()`, `useOptimistic`, `useActionState`, `useEffectEvent`
- **Tailwind CSS v4** — uses `@tailwindcss/postcss` plugin, NOT v3's `tailwindcss` PostCSS plugin
- **Framer Motion 12** — import from `"framer-motion"` (NOT `"motion/react"`)
- **TypeScript** with `@/*` path alias mapping to project root

## Architecture

- All page components are in `app/page.tsx` (single-file, ~590 lines)
- `app/layout.tsx` — root layout with Plus Jakarta Sans font
- `app/globals.css` — custom CSS utilities (`.img-placeholder`, `.badge-monochrome`, `.hero-placeholder`)
- Dark theme: black background, white text

## Next.js 16 Breaking Changes

- **Async Request APIs**: `cookies()`, `headers()`, `draftMode()`, `params`, `searchParams` are now async — must `await` them
- **`next/legacy/image` deprecated**: use `next/image` instead
- **`revalidateTag`**: now requires a second argument (cacheLife profile), e.g. `revalidateTag('posts', 'max')`
- Local upgrade guide: `node_modules/next/dist/docs/01-app/02-guides/upgrading/version-16.mdx`

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
  --font-sans: "Plus Jakarta Sans", sans-serif;
  --color-background: #000000;
}
```

## Framer Motion Patterns

- Import from `"framer-motion"` — the `"motion/react"` import is deprecated
- `useInView(ref, { once: true, margin: "-10%" })` — scroll-triggered animations
- `useScroll()` / `useTransform(value, inputRange, outputRange)` — scroll-linked effects
- `motion.div` with `initial`, `animate`, `transition`, `whileHover`, `whileTap`

## Gotchas

- No test suite exists — do not assume test commands
- No typecheck script — `npm run lint` is the only static analysis
- The `.bak` file (`page.tsx.bak`) uses `import from "motion/react"` — do NOT copy this; use `"framer-motion"` instead
- Tailwind v4 uses `@theme inline` blocks in CSS, not `tailwind.config.js`
