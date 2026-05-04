# Kuda Peptides

Premium peptide research compound ecommerce site — Next.js 15 App Router + TypeScript + Tailwind.

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Tech

- Next.js 15 (App Router) + React 19
- TypeScript strict mode
- Tailwind CSS 3
- Google Fonts: Fraunces (display) + Geist (sans) + JetBrains Mono
- No external image deps — vial mockups are pure CSS
- No Stripe/cart yet — Request Availability buttons all link to `/contact`

## Routes

```
/                          Homepage
/products                  Catalog with search + category filters
/products/[slug]           Product detail (×13)
/quality                   Quality standards
/coa                       COA documentation
/about                     Brand story
/faq                       FAQ accordion
/contact                   Inquiry form
/shipping-policy
/refund-policy
/privacy-policy
/terms
/disclaimer
```

## Data

All catalog data lives in `lib/products.ts`. Edit there to add/remove/reprice compounds. Add to `PRODUCT_CATEGORIES` if introducing new categories. Mark `status: "Request Only"` for compounds that should show "Request Availability" instead of "View Product."

## Compliance posture

The site is positioned strictly for laboratory research use only. Hardcoded compliance language appears in:
- `components/site-header.tsx` (top compliance strip)
- `components/site-footer.tsx` (disclaimer block)
- `components/compliance-banner.tsx` (full-width banner)
- `components/product-warning.tsx` (per-product detail page)
- `app/disclaimer/page.tsx` (full disclaimer)
- `app/contact/page.tsx` (contact form disclaimer)

No medical, dosage, reconstitution, administration, or human/animal use language anywhere.

## Customizing the vial mockup

`components/product-hero-image.tsx` builds the vial in pure CSS at three sizes: `card`, `detail`, `hero`. Each product specifies an `accentTone` (`violet`, `deep`, `graphite`, `ink`) which controls the label background gradient and footer band color.
