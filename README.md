# Alexandroff Portfolio

A personal portfolio and freelance service website for web development services focused on small service businesses, business websites, booking/contact flows, web apps, SEO basics, and deployment support.

## Tech Stack

- Next.js 16 App Router
- React 19
- TypeScript
- CSS Modules
- modern-normalize
- ESLint

## Features

- Freelance-focused landing page
- Hero section with service positioning
- About section focused on process and trust
- Projects horizontal slider
- Project cards with business summaries and badges
- Project detail pages with project summary blocks
- Services section
- Packages / starting prices section
- FAQ section
- Contact page with mailto-based form logic
- Shared site layout with Header, Footer, and BackToTop
- SEO metadata
- Dynamic sitemap
- Robots file
- llms.txt
- JSON-LD structured data for WebSite, Person, and ProfessionalService

## Routes

- `/` - home page
- `/contact` - contact page
- `/projects/[slug]` - project detail pages
- `/robots.txt` - robots file
- `/sitemap.xml` - sitemap

Project pages:

- `/projects/cleaning`
- `/projects/rental`
- `/projects/rentalcar`
- `/projects/travel`

## Project Structure

```txt
src
├─ app
│  ├─ (site)
│  │  ├─ contact
│  │  ├─ projects
│  │  │  └─ [slug]
│  │  ├─ layout.tsx
│  │  └─ page.tsx
│  ├─ robots.ts
│  ├─ sitemap.ts
│  ├─ layout.tsx
│  ├─ loading.tsx
│  └─ not-found.tsx
├─ components
│  ├─ layout
│  ├─ project
│  ├─ sections
│  ├─ seo
│  └─ ui
├─ config
├─ data
├─ styles
├─ types
└─ utils
```

- `src/app` - App Router routes, layouts, metadata, sitemap and robots.
- `src/components/sections` - home page sections.
- `src/components/project` - project detail blocks.
- `src/components/seo` - JSON-LD structured data.
- `src/components/ui` - reusable UI primitives.
- `src/config` - site-wide configuration.
- `src/data` - content/data sources.
- `src/types` - TypeScript domain types.
- `src/styles` - global CSS tokens and normalize import.

## Data and Configuration

- `src/config/site.ts` - site name, URL, email, social links, location and main stack.
- `src/data/home.ts` - content for Hero, About, Projects, Services and Packages.
- `src/data/projects.ts` - project cards and project detail content.
- `src/data/faq.ts` - FAQ content.

## SEO

The project includes:

- root metadata via Next.js Metadata API
- page-level metadata for `/contact`
- dynamic metadata for `/projects/[slug]`
- `generateStaticParams` for project detail pages
- `robots.ts`
- `sitemap.ts`
- `public/llms.txt`
- JSON-LD structured data:
  - `WebSite`
  - `Person`
  - `ProfessionalService`

The site URL is configured through `NEXT_PUBLIC_SITE_URL` with fallback in `src/config/site.ts`.

## Environment Variables

Create `.env.local` if needed:

```env
NEXT_PUBLIC_SITE_URL=https://www.alexandroff.pl
```

For local development:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Development Notes

- The project is currently frontend-only and content-driven.
- There are no API routes or backend services in this repository.
- Project content is managed through TypeScript data files.
- Styling is handled with CSS Modules and global CSS tokens.
- Contact form logic currently uses a mailto-based flow.
