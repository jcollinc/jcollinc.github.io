# Jon-Collin Chinje · Portfolio

Modern, content-driven portfolio for Jon-Collin Chinje built with [Next.js 14](https://nextjs.org/), [TypeScript](https://www.typescriptlang.org/), and [Tailwind CSS](https://tailwindcss.com/).

## Highlights

- Narrative-first hero and about sections with reusable section primitives.
- Timeline views for experience and education, tailored project cards, and curated writing highlights.
- Adaptive theming with light/dark mode, optimized images, and responsive layouts.
- Fully static build ready for deployment to any platform that serves Next.js output (Vercel, Netlify, GitHub Pages via static export, etc.).

## Getting started

```bash
npm install
npm run dev
```

Visit http://localhost:3000 to explore the development preview.

## Project structure

- `app/` – Next.js App Router pages, global layout, and styling.
- `components/` – Reusable UI building blocks (hero, cards, timeline, navigation, etc.).
- `content/` – Structured data powering each section (hero copy, projects, writing, contact info).
- `public/` – Static assets such as project imagery and resume PDF.
- `tailwind.config.ts` / `postcss.config.mjs` – Styling configuration.

## Scripts

- `npm run dev` – Start a local development server.
- `npm run lint` – Run ESLint with Next.js defaults.
- `npm run build` – Produce an optimized production build.
- `npm run start` – Serve the production build locally.

## Deployment

The site is static-rendered by default. Deployments work out of the box on platforms like Vercel, Netlify, or GitHub Pages (using `next export`).

## Content edits

Update the data in `content/site.ts` to refresh hero copy, project details, experience timeline entries, skills, and contact information. Asset files live in `public/` and are referenced directly.

---

Crafted with 🗽 in Queens, NY.

