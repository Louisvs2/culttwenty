# CultTwenty — Premium Creative Agency Website

Produktionsreife Next.js-Website für **CultTwenty GbR** (Inhaber: Louis Reinecke).

## Setup

```bash
npm install
npm run dev
```

Die Seite läuft danach unter `http://localhost:3000`.

```bash
npm run build   # Production Build
npm run start   # Production Server
npm run lint    # ESLint
npm run format  # Prettier
```

## Assets ersetzen

- **Showreel-Video:** `public/videos/showreel.mp4` (Spezifikation siehe `public/videos/README.txt`)
- **Bilder:** Alle Bilder laufen aktuell über `picsum.photos`-Platzhalter (`lib/data/*.ts`, `config/site.ts`). Einfach die `src`-URLs durch finale Asset-Pfade (z. B. `/images/...`) ersetzen.
- **Favicon / App-Icon:** `public/favicon.svg`, `public/apple-icon.svg`
- **Trusted-By-Logos:** `lib/data/team.ts` → `trustedLogos` (aktuell typografische Platzhalter, keine echten Markenlogos)

## Architektur

```
app/                  Next.js App Router – Seiten, Layouts, Metadata-Routen
components/
  ui/                 Wiederverwendbare UI-Primitiven (Button, Cursor, Reveal, ...)
  layout/             Navbar, Footer
  sections/           Seitenspezifische Sections (Hero, Services, WorkGrid, ...)
  providers/          Client-Provider (Lenis, globales UI-Chrome)
  seo/                JSON-LD Komponenten
hooks/                useLenis, useMagnetic, useScrollProgress, ...
lib/
  data/               Statische Inhalte (Services, Work, Team, Testimonials)
  validations/        Zod-Schemas
  actions/            Server Actions (Contact Form)
config/               Site- und Navigationskonfiguration
types/                Globale TypeScript-Typen
styles/               Globales Stylesheet mit Design Tokens
```

## Tech Stack

Next.js 14 (App Router) · React 18 · TypeScript (strict) · Tailwind CSS · GSAP + ScrollTrigger ·
Framer Motion · Lenis · Zod · lucide-react

## Hinweise zur Contact-Form

`lib/actions/contact.ts` validiert serverseitig mit Zod und loggt die Anfrage aktuell in die Konsole.
Für den produktiven Einsatz hier einen E-Mail-Versand (z. B. Resend, Postmark) oder eine
CRM-Anbindung ergänzen und an `redaktion@culttwenty.de` zustellen.

## SEO

Metadata API (dynamische Titel/OG/Twitter pro Seite), `app/robots.ts`, `app/sitemap.ts`,
`app/manifest.ts` und JSON-LD (`components/seo/OrganizationJsonLd.tsx`) sind vollständig
konfiguriert über `config/site.ts`.
