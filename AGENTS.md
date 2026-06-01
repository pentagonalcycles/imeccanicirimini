# AGENTS.md

## Project

I Meccanici Rimini website — a bilingual (IT/EN) static site built with Astro v5, Tailwind CSS v3, deployed to Vercel.

## Build & Dev Commands

- `npm install` — install dependencies
- `npm run dev` — start dev server at localhost:4321
- `npm run build` — build production site to ./dist/
- `npm run preview` — preview production build locally

There is no linter, typecheck, or test command configured. Validate changes by running `npm run build` and confirming it completes without errors.

## Architecture

- **Framework:** Astro v5 with static output
- **Styling:** Tailwind CSS v3 via `@astrojs/tailwind` integration. Global CSS at `src/styles/global.css`. Tailwind config at `tailwind.config.mjs`.
- **i18n:** Manual approach. Translation JSON files at `src/i18n/it.json` and `src/i18n/en.json`. Helper at `src/lib/i18n.ts`. Default locale is Italian (no URL prefix), English uses `/en/` prefix.
- **Routing:** File-based via `src/pages/`. Italian pages at root, English pages under `src/pages/en/`.
- **Layout:** Single `BaseLayout.astro` wraps all pages. Includes Navbar and Footer.
- **Images:** All stored in `public/img/` (not optimized at build time, served as-is).

## Key Conventions

- All user-facing text must come from i18n JSON files, not hardcoded in components.
- Components accept a `locale: Locale` prop ('it' | 'en').
- Section IDs on the homepage are referenced by navbar anchors: `#about`, `#services`, `#products`, `#gallery`, `#reviews`, `#contact`.
- External links (brands, Brompton bike-builder, Bicicapace) open in new tabs with `rel="noopener noreferrer"`.
- Images below the fold use `loading="lazy"`.
- YouTube videos use a facade pattern (thumbnail + play button, iframe loaded on click).
- Contact form posts to Formspree (currently a PLACEHOLDER endpoint).

## Gotchas

- The `@astrojs/vercel` adapter is imported as `@astrojs/vercel/static` for SSG mode.
- Blog pages at `src/pages/blog/` use `../../layouts/` for imports; pages at `src/pages/en/blog/` use `../../../layouts/`.
- The hero background image switches from desktop to mobile via a `<style>` block with `@media (max-width: 767px)` scoped to the component.
- Google Fonts (Open Sans + Merriweather) are loaded via `<link>` in the layout, not self-hosted.
