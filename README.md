# Beauty Bar Studio

A production-quality, luxury website for **Beauty Bar Studio** — a premium beauty salon, day spa, and mini Pilates studio in Dallas, TX. Built to feel like it was designed by a top-tier creative agency: fast, accessible, responsive, and SEO-optimized from the ground up.

---

## Project Goals

- Present a luxury, editorial brand experience that earns trust at a glance.
- Make booking an appointment the easiest, most obvious action on every page.
- Communicate services, pricing tiers, and brand story with clarity and elegance.
- Achieve excellent Lighthouse scores across performance, accessibility, and SEO.
- Maintain a clean, modular codebase that scales with future features.

---

## Technology Stack

- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Framer Motion](https://motion.dev/)
- [React Router](https://reactrouter.com/)
- [Lucide React](https://lucide.dev/)

---

## Project Structure

```
beauty-bar-studio/
├── public/                 Static assets served as-is
├── src/
│   ├── assets/             Images, fonts, static media
│   ├── components/
│   │   ├── ui/             Generic, reusable, brand-styled primitives
│   │   ├── layout/         Header, footer, nav, page shell
│   │   └── sections/       Page-specific composed content blocks
│   ├── pages/               Route-level components
│   ├── layouts/             Shared page layout wrappers
│   ├── hooks/               Reusable stateful logic
│   ├── lib/                 Utilities, helpers, formatters
│   ├── types/               Shared TypeScript types/interfaces
│   ├── config/              Business info, theme tokens, site-wide constants
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── CLAUDE.md
├── PROJECT_RULES.md
├── DESIGN_SYSTEM.md
├── TASK_TEMPLATE.md
├── index.html
├── vite.config.ts
├── tsconfig.json
└── package.json
```

---

## Getting Started

### Install

```bash
npm install
```

### Run Locally

```bash
npm run dev
```

The app runs at `http://localhost:5173` by default.

### Build for Production

```bash
npm run build
```

### Preview a Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

---

## Folder Overview

| Folder | Purpose |
|---|---|
| `components/ui` | Generic primitives with no business logic or copy (buttons, cards, inputs) |
| `components/layout` | Structural chrome — header, footer, navigation, page shell |
| `components/sections` | Business-specific composed blocks (hero, services, testimonials) |
| `pages` | Route-level components composed from sections |
| `layouts` | Shared page layout wrappers |
| `hooks` | Reusable stateful logic extracted from components |
| `lib` | Utilities, helpers, formatters |
| `types` | Shared TypeScript types and interfaces |
| `config` | Business info, theme tokens, and site-wide constants |

---

## Business Information

**Beauty Bar Studio**
1200 Mountain Glow
Dallas, TX 75024

**Phone:** (222) 576-8329
**Hours:** Daily, 9:00 AM – 6:00 PM
**Booking Platform:** Square Appointments (placeholder until live account)

**Brand Position:** Luxury Beauty Salon · Premium Day Spa · Mini Pilates Studio
**Target Client:** Women ages 25–45 seeking premium beauty and wellness services

**Services:**
- Premium Day Spa
- Hair Salon
- Brow Microblading
- Nail Bar
- Waxing
- Mini Pilates Studio
- Bridal Packages

---

## Brand Colors

| Role | Name | Hex |
|---|---|---|
| Primary | Rose Gold | `#B76E79` |
| Secondary | Champagne | `#F7E7CE` |
| Neutral | Charcoal Black | `#232323` |
| Supporting | Warm Ivory | `#FFF8F2` |
| Supporting | White | `#FFFFFF` |

---

## Design Philosophy

Beauty Bar Studio should feel like walking into an award-winning luxury spa rather than browsing a website. The design language draws inspiration from Four Seasons, Aesop, Apple, Soho House, and luxury boutique hotels — calm, spacious, elegant, and intentional, with whitespace treated as a design element in its own right. Luxury is achieved through restraint: every pixel should feel intentional, and every interaction should build trust.

---

## Governing Documents

Every design and development decision on this project is governed by:

- [CLAUDE.md](CLAUDE.md) — AI engineering handbook: standards, workflow, and quality bar
- [PROJECT_RULES.md](PROJECT_RULES.md) — the project's constitution
- [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md) — the complete visual design language
- [TASK_TEMPLATE.md](TASK_TEMPLATE.md) — the standard operating procedure for every task

---

## Developer Notes

`CLAUDE.md`, `PROJECT_RULES.md`, `DESIGN_SYSTEM.md`, and `TASK_TEMPLATE.md` govern **every future change** to this project. Before implementing any feature, fix, or design decision, these four documents must be consulted and followed. They define the engineering standards, brand rules, visual system, and workflow that keep this codebase consistent, maintainable, and aligned with a luxury brand experience — no exceptions.
