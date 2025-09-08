# Filotis Health Center — Website Prototype

Production-ready Next.js (App Router) + TypeScript + Tailwind prototype for a small local business. Includes shadcn-style UI, Local SEO, JSON-LD, and bilingual-ready content.

## Stack
- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- shadcn-style UI (locally vendored: button, card, input, sheet, accordion)
- lucide-react icons
- Google Maps embed

## Structure
- `data/business.json`: Single source of truth for branding, services, contact, SEO.
- `app/`: Pages and route handlers (`/`, `/about`, `/services`, `/gallery`, `/contact`, optional `/booking`).
- `components/site/*`: Hero, ServicesGrid, About, Testimonials, FAQ, ContactPanel, MapEmbed, Footer.
- `components/ui/*`: Minimal shadcn-like primitives.
- `app/sitemap.ts`, `app/robots.ts`: Local SEO basics.

## Getting Started
1. Install dependencies
   - npm: `npm install`
   - pnpm: `pnpm install`
   - yarn: `yarn`
2. Run dev server: `npm run dev`
3. Open: http://localhost:3000

## Configure Content
- Edit `data/business.json` only. All pages/components read from it.
- Replace placeholder images inside `public/placeholder/` with real photos (keep same filenames or adjust imports).
- Update `app/layout.tsx` `metadataBase` and `app/sitemap.ts` base URL with your domain.

## Local SEO
- Titles and meta generated from `data/business.json`.
- OpenGraph + Twitter cards in `app/layout.tsx`.
- `app/sitemap.ts` and `app/robots.ts` preconfigured.
- JSON-LD LocalBusiness + Services is injected on the homepage.

## Accessibility & Performance
- Mobile-first layout, Tailwind utilities.
- Alt attributes for all images.
- Lean, dependency-light components.

## Connect Contact Form
- Current form uses `mailto:` action.
- Replace with your API (e.g., Next.js Route Handler + email service) for production.

## Optional Booking
- See `/booking` page. Link to Treatwell is included; replace with your booking provider or embed.

## Dokploy Deploy (Quickstart)
1. Build image locally or let Dokploy build from repo.
2. Environment:
   - `NODE_ENV=production`
3. Build & run commands:
   - Build: `npm ci && npm run build`
   - Start: `npm run start`
4. HTTP settings: expose port `3000`.
5. Set `NEXT_PUBLIC_*` envs if you add analytics or external APIs.

## Notes
- Fonts: Inter via `next/font/google`.
- If you need more UI components, you can add shadcn/ui or extend the local primitives.
- Bilingual: currently defaults to Greek; simple utility provided for translation; expand to full i18n if needed.
