# I Meccanici Rimini — Website

Rebuilt website for **I Meccanici Rimini SNC**, a bicycle repair shop and Brompton dealer in Rimini's historic centre.

## Tech Stack

- **Framework:** Astro v5 (static site generation)
- **Styling:** Tailwind CSS v3
- **Hosting:** Vercel (static output)
- **Languages:** Italian (default) + English

## Project Structure

```
src/
├── i18n/                  # Translation files (it.json, en.json)
├── lib/i18n.ts            # i18n utility (useTranslations, getLocaleFromUrl, etc.)
├── styles/global.css      # Global CSS (Tailwind base + custom components)
├── layouts/
│   └── BaseLayout.astro   # HTML5 boilerplate, meta tags, Navbar + Footer
├── components/
│   ├── Navbar.astro       # Fixed nav, transparent→solid on scroll, mobile drawer
│   ├── Hero.astro         # Full-viewport hero with responsive background
│   ├── About.astro        # "Gianluca & Verter" story section
│   ├── Services.astro     # 3 feature cards (location, repair, products)
│   ├── Products.astro     # 5 product sections (Brompton, Primabici, etc.)
│   ├── Gallery.astro      # Instagram-style image grid
│   ├── Videos.astro       # YouTube embeds with lite facade
│   ├── Reviews.astro      # Customer testimonials with star ratings
│   ├── Contact.astro      # Google Maps + address/hours/social
│   ├── ContactForm.astro  # Quote request form with validation
│   ├── Brands.astro       # Brand logo carousel
│   ├── Footer.astro       # Site footer
│   └── LanguageSwitcher.astro
└── pages/
    ├── index.astro                    # Italian homepage
    ├── blog/index.astro               # Italian blog listing
    ├── blog/[slug].astro              # Italian blog posts
    ├── privacy.astro                  # Italian privacy policy
    ├── accessibility.astro            # Italian accessibility statement
    └── en/                            # English equivalents of all pages
        ├── index.astro
        ├── blog/index.astro
        ├── blog/[slug].astro
        ├── privacy.astro
        └── accessibility.astro
```

Static assets (images, favicons, legacy CSS/JS) are in `public/`.

## Commands

| Command             | Action                                      |
| :------------------ | :------------------------------------------ |
| `npm install`       | Install dependencies                        |
| `npm run dev`       | Start dev server at `localhost:4321`        |
| `npm run build`     | Build production site to `./dist/`          |
| `npm run preview`   | Preview the production build locally        |

## i18n

All user-facing text is in `src/i18n/it.json` and `src/i18n/en.json`. To edit any label, heading, or paragraph, edit those files. Components reference translations via the `useTranslations(locale)` helper from `src/lib/i18n.ts`.

## Images

All images from the original site are preserved in `public/img/`:

- `imr/` — logos and signature
- `welcome/` — hero backgrounds (desktop + mobile)
- `products/` — product photos (Brompton, Primabici, Bicicapace, Ortlieb, Abus)
- `brands/` — brand logos

## Deployment

The site is configured for Vercel static deployment via `@astrojs/vercel/static`. Connect the repository to Vercel and it will auto-deploy on push.

### Before going live

1. Replace the Formspree placeholder in `src/components/ContactForm.astro` (line 133) with a real form endpoint
2. Point `www.imeccanicirimini.it` DNS to Vercel
3. Verify the sitemap at `/sitemap-index.xml` and submit to Google Search Console
