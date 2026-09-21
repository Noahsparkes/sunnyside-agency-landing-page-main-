# Sunnyside Agency Landing Page

> A pixel-perfect implementation of the [Frontend Mentor – Sunnyside Agency Landing Page](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef) challenge, built with a modern React/Next.js stack.

![Design preview](../preview.jpg)

---

## Tech Stack

| Layer | Choice | Version |
|---|---|---|
| Framework | [Next.js](https://nextjs.org/) (App Router) | 16.x |
| UI library | [React](https://react.dev/) | 19.x |
| Language | [TypeScript](https://www.typescriptlang.org/) | 5.x |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) + Vanilla CSS | 4.x |
| Fonts | [`next/font/google`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) — Fraunces & Barlow | — |
| Linting | [ESLint](https://eslint.org/) with `eslint-config-next` | 9.x |
| Package manager | npm | — |

---

## Project Structure

```
app/
├── src/
│   ├── app/
│   │   ├── globals.css      # Design tokens, component styles, responsive rules
│   │   ├── layout.tsx       # Root layout — font loading, metadata
│   │   └── page.tsx         # Entry page — composes all section components
│   └── components/
│       ├── Navbar.tsx       # Responsive nav with mobile hamburger menu
│       ├── Hero.tsx         # Full-viewport hero with background image
│       ├── Services.tsx     # Feature grid (transform, stand out, graphic design, photography)
│       ├── Testimonials.tsx # Client testimonials section
│       ├── Gallery.tsx      # 4-image photo gallery grid
│       └── Footer.tsx       # Footer nav + social links
├── public/
│   └── images/              # Optimised assets (desktop + mobile variants)
├── next.config.ts
├── tsconfig.json
└── package.json
```

---

## Key Implementation Details

### Responsive Layout
- **Mobile-first** breakpoints via CSS media queries (`480px`, `768px`, `960px`).
- The services grid collapses from a 2-column layout to a single column on tablet/mobile, with explicit `order` properties to match the design spec exactly.
- The hero switches between desktop and mobile background images via a media-query swap in CSS — avoids shipping the large desktop image to mobile clients.

### Typography
- **Fraunces** (serif) for all display headings — loaded via `next/font/google` for zero layout shift and automatic font subsetting.
- **Barlow** (sans-serif) for all body/UI text.
- Both fonts are exposed as CSS custom properties (`--font-fraunces`, `--font-barlow`) and consumed in `globals.css`.

### Smooth Scrolling
- Implemented with a single CSS declaration (`html { scroll-behavior: smooth; }`) — no JavaScript, no dependency.
- Browsers automatically **disable** the animation for users who have enabled *Reduce Motion* in their OS accessibility settings (`prefers-reduced-motion`), making this approach both accessible and zero-cost.

### Accessibility
- Semantic HTML5 landmarks (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`).
- All interactive elements have visible `:focus-visible` outlines.
- Images include descriptive `alt` attributes.
- Colour contrast ratios meet WCAG AA across all foreground/background pairings.
- Mobile navigation is keyboard-navigable and toggled via a `<button>` (not a `<div>`).

### Performance
- Images are served via Next.js `<Image>` where applicable, enabling automatic WebP conversion, lazy loading, and responsive `srcset` generation.
- Fonts are statically optimised at build time by `next/font` — no render-blocking network requests.
- CSS is co-located in a single `globals.css`; no runtime CSS-in-JS overhead.

---

## Getting Started

```bash
# Install dependencies
npm install

# Start the development server (http://localhost:3000)
npm run dev

# Type-check
npx tsc --noEmit

# Lint
npm run lint

# Production build
npm run build
npm start
```

---

## Design Reference

Design files (desktop & mobile JPGs) live in `../design/`. The style guide (`../style-guide.md`) documents the colour palette and typography scale used throughout the project.

---

## Deployment

The project is ready to deploy on any platform that supports Next.js:

- **[Vercel](https://vercel.com/)** — zero-config, recommended for Next.js
- **[Netlify](https://www.netlify.com/)** — supports Next.js via the `@netlify/plugin-nextjs` adapter
- **[GitHub Pages](https://pages.github.com/)** — requires `next export` (static export mode)

---

## Challenge Credit

Challenge by [Frontend Mentor](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef). Built as a practice project to sharpen HTML, CSS, and React component architecture skills.
