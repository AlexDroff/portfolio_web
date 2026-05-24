# Loading Studio Portfolio

Loading Studio Portfolio is a freelance/service website for **Loading Studio**.
It presents web development services, showcases completed case studies, and helps small service businesses quickly understand the offer and start a project conversation.

The site is built as a content-driven portfolio where public-facing copy, project data, and localized SEO content are managed in TypeScript locale/data files.

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- CSS Modules
- Motion (`motion/react`)
- `modern-normalize`
- ESLint

## Features

- Freelance-focused landing page for Loading Studio
- Localized content and localized routes (Polish, English, Ukrainian)
- Home sections: Hero, About, Projects, Services, Packages, FAQ, Contact CTA
- Interactive project slider with project cards
- Project detail/case-study pages with hero/meta, summary, problem/solution/result, contributions, image galleries, and CTA
- Contact page with client-side validation and `mailto:` submission flow
- Shared layout components (Header, Footer, BackToTop)
- Language switcher in header and detail/contact pages
- Responsive UI and section/hash scrolling behavior
- Motion-based reveal/transitions with reduced-motion support
- SEO setup using Next.js Metadata API
- Dynamic `sitemap.xml`
- Dynamic `robots.txt`
- JSON-LD structured data (`WebSite`, `Person`, `ProfessionalService`)
- `public/llms.txt`

## Routes

### Core Routes

- `/` (Polish default home)
- `/contact`
- `/projects/[slug]`
- `/robots.txt`
- `/sitemap.xml`

### Localized Routes

- `/en`
- `/uk`
- `/en/contact`
- `/uk/contact`
- `/en/projects/[slug]`
- `/uk/projects/[slug]`

Note: Polish is the default locale and is served without a `/pl` prefix.

### Current Project Slugs

- `cleaning`
- `rental`
- `rentalcar`
- `booksy`
- `travel`
- `notehub`
- `ecotote`

## Project Case Studies

| Title | Slug | Summary | Type | Main Stack* |
| --- | --- | --- | --- | --- |
| Cleaning company website | `cleaning` | Website for a cleaning company with service pricing, package selection, and quick WhatsApp contact. | Service business website | React, TypeScript, CSS Modules |
| Holiday cottages website | `rental` | Website for holiday cottages with accommodation offers, gallery, and reservation inquiry path. | Rental business website | Next.js, React, TypeScript, CSS Modules |
| Car rental catalog | `rentalcar` | Car rental catalog with filtering, favorites, and reservation inquiries. | Catalog web app | React, TypeScript, REST API, CSS Modules |
| Book catalog with cart | `booksy` | Bookstore app with catalog, filtering, product details, cart, and simple purchase flow. | E-commerce catalog prototype | HTML, CSS, JavaScript, Vite, API |
| Travel stories platform | `travel` | Travel platform with login, profiles, and publishing personal travel stories. | Fullstack web platform | React, Node.js, MongoDB, REST API |
| Notes app with authentication | `notehub` | Notes app with login, profile, filtering, search, and note creation flow. | Notes application with authentication | Next.js, TypeScript, CSS, Auth, Middleware |
| Website with eco bag catalog | `ecotote` | Single-page website for an eco tote brand with catalog, gallery, testimonials, and contact form. | Product website with catalog | HTML, CSS, JavaScript, Handlebars |

\* `Main Stack` describes the showcased portfolio projects/case studies, not only this repository's runtime dependencies.

## Project Structure

```txt
portfolio_web/
|- public/
|  |- icons/
|  |- projects/
|  |- projects cards/
|  |- llms.txt
|  |- logo.svg
|  `- my_photo.webp
|- src/
|  |- app/
|  |  |- (site)/
|  |  |  |- layout.tsx
|  |  |  `- page.tsx
|  |  |- [locale]/
|  |  |  |- (site)/
|  |  |  |  |- layout.tsx
|  |  |  |  `- page.tsx
|  |  |  |- contact/page.tsx
|  |  |  `- projects/[slug]/page.tsx
|  |  |- contact/
|  |  |  |- ContactPageClient.tsx
|  |  |  `- page.tsx
|  |  |- projects/[slug]/page.tsx
|  |  |- layout.tsx
|  |  |- loading.tsx
|  |  |- not-found.tsx
|  |  |- robots.ts
|  |  `- sitemap.ts
|  |- components/
|  |  |- animation/
|  |  |- layout/
|  |  |- pages/
|  |  |- project/
|  |  |- sections/
|  |  |- seo/
|  |  `- ui/
|  |- config/
|  |  `- site.ts
|  |- data/
|  |  |- locales/
|  |  |- faq.ts
|  |  |- home.ts
|  |  `- projects.ts
|  |- styles/
|  |  `- globals.css
|  |- types/
|  `- utils/
`- package.json
```

Key folders:

- `src/app` - Next.js App Router pages, layouts, metadata routes, loading and not-found UI.
- `src/components/sections` - home page sections (hero/about/projects/services/packages/faq/contact CTA).
- `src/components/project` - project detail page blocks for case studies.
- `src/components/seo` - JSON-LD component.
- `src/components/ui` - reusable UI primitives and helpers.
- `src/data/locales` - primary content source by locale (home, projects, FAQ, contact, UI labels, SEO copy).
- `src/config` - site-wide business config (`siteConfig`).
- `src/styles` - global styles + tokens + normalize import.

## Data and Configuration

Main content/config sources:

- `src/config/site.ts` - brand/site settings (name, owner, links, email, base URL, main stack).
- `src/data/locales/index.ts` - locale config/helpers (`defaultLocale`, locale lists, path helpers).
- `src/data/locales/en.ts`
- `src/data/locales/pl.ts`
- `src/data/locales/uk.ts`
- `src/data/locales/types.ts` - localized content type contracts.
- `src/types/*` - project/home/FAQ TypeScript domain types.

`src/data/home.ts`, `src/data/faq.ts`, and `src/data/projects.ts` currently expose content from the locale source (`siteContent`) for compatibility/reuse.

## Localization

Localization is implemented.

- Supported locales: `pl`, `en`, `uk`
- Default locale: `pl`
- Route pattern: default locale without prefix (`/`, `/contact`, `/projects/[slug]`), prefixed locales for English and Ukrainian (`/en/...`, `/uk/...`)
- Locale-aware links are generated via helpers in `src/data/locales/index.ts`.
- Home/contact/project pages use localized copy and localized metadata from `src/data/locales/*`.

## SEO

Implemented SEO setup:

- Next.js Metadata API in app routes/layouts
- Root metadata in `src/app/layout.tsx` (`metadataBase`, title template, Open Graph, Twitter, robots)
- Page metadata:
  - home metadata in `src/app/(site)/page.tsx` and `src/app/[locale]/(site)/page.tsx`
  - contact metadata in `src/app/contact/page.tsx` and `src/app/[locale]/contact/page.tsx`
  - dynamic project metadata in `src/app/projects/[slug]/page.tsx` and `src/app/[locale]/projects/[slug]/page.tsx`
- Canonical and language alternates (`pl`, `en`, `uk`, `x-default`) for key pages
- `src/app/sitemap.ts` generates static + localized + project URLs
- `src/app/robots.ts` exposes crawl rules and sitemap location
- JSON-LD via `src/components/seo/ProfessionalServiceJsonLd.tsx`
- `public/llms.txt` present

## Environment Variables

Used by `src/config/site.ts`:

```env
NEXT_PUBLIC_SITE_URL=https://www.loadingstudio.pl
```

Local development example:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Example file: `.env.example`.

## Scripts

From `package.json`:

- `npm run dev` - start Next.js development server.
- `npm run build` - create production build.
- `npm run start` - run production server from the build output.
- `npm run lint` - run ESLint checks.

## Development Notes

- Frontend-focused, content-driven portfolio website.
- No backend service or API routes are implemented in this repository.
- Public-facing content and localized SEO copy are managed in TypeScript locale data.
- Styling uses CSS Modules plus global design tokens in `src/styles/globals.css`.
- Contact flow is currently mailto-based (client-side validation + email client handoff).
