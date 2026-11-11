# HMR Diensten — Website

Bedrijfswebsite van **HMR Diensten**, professioneel schoonmaakbedrijf uit Eindhoven, actief door heel Noord-Brabant ([hmrdiensten.nl](https://hmrdiensten.nl)).

> Vaste kwaliteit. Duidelijke afspraken. Zorgeloos schoon.

## Architectuur

| Onderdeel | Techniek | Hosting |
|---|---|---|
| Frontend (deze map) | Next.js 14, statische export (`output: "export"`), Tailwind CSS, TypeScript | Cloudflare Pages |
| Backend ([fly-api/](fly-api/)) | Express, MongoDB (reviews), Nodemailer (offerte-mails) | Fly.io (regio `ams`) |

## Lokaal ontwikkelen

```bash
# Frontend
npm install
npm run dev          # http://localhost:3000

# Backend (aparte terminal)
cd fly-api
npm install
npm run dev          # http://localhost:3001
```

Zet voor lokaal gebruik `NEXT_PUBLIC_API_URL=http://localhost:3001` (zie [src/lib/api.ts](src/lib/api.ts)).

## Build & deploy

```bash
npm run build        # statische export naar out/
```

- **Frontend**: Cloudflare Pages bouwt via `npm run build`, output-map `out/` (zie [cloudflare.json](cloudflare.json)).
- **Backend**: `cd fly-api && fly deploy` (vereist `MONGODB_URI` en mail-secrets als Fly-secrets).

## Structuur

- [src/app/](src/app/) — App Router: homepage, dienstpagina's (`/diensten/[slug]`), sitemap, robots
- [src/lib/services.ts](src/lib/services.ts) — alle 13 diensten (schoonmaak & verhuizing), bron voor catalogus én detailpagina's
- [src/components/](src/components/) — Hero, ServiceCatalog, WhyUs, Testimonials, Contact (offerteformulier met foto-upload), Faq, OfferCta, Reveal (scroll-animaties)
- [fly-api/index.js](fly-api/index.js) — API: `/api/offerte` (mail + foto), `/api/reviews` (MongoDB), rate limiting, CORS

## Contact

- info@hmrdiensten.nl · 06-35698144 · KvK 42052439
