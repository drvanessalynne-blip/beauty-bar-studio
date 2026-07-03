# CLAUDE.md — Beauty Bar Studio Engineering Handbook

This document is the governing standard for all AI-assisted engineering work on the Beauty Bar Studio website. It applies to every session, every file, and every change — large or small. When in doubt, defer to this document over convenience or speed.

---

## Project Mission

Build a production-quality, luxury website for Beauty Bar Studio — a premium beauty salon, day spa, and mini Pilates studio in Dallas, TX — that feels like it was designed by a top-tier creative agency, not assembled from a template. The site must earn trust at a glance, convert visitors into bookings, and hold up under real client scrutiny (fast, accessible, polished on every device).

---

## Primary Objectives

- Communicate a luxury, premium brand position within the first viewport.
- Make booking an appointment the easiest, most obvious action on every page.
- Present services, pricing tiers, and brand story with clarity and elegance.
- Achieve excellent technical performance, accessibility, and SEO out of the box.
- Build a codebase that a future engineer (human or AI) can extend without guesswork.

---

## Design Philosophy

- **Quiet luxury, not loud decoration.** Whitespace, restraint, and precision communicate premium quality more effectively than ornamentation.
- **Editorial, not template-driven.** Layouts should feel considered — asymmetry, intentional pacing, and varied section rhythm over repeating "icon + heading + text" blocks.
- **Motion as polish, not spectacle.** Animation should feel like the interface breathing, never like it's performing.
- **Brand palette is a discipline, not a suggestion.** Rose Gold, Champagne, Charcoal, Ivory, and White are the entire vocabulary — every new color must be justified or rejected.
- **Every screen is a flagship screen.** Mobile is not a degraded experience of desktop; it is a first-class layout in its own right.

---

## Development Principles

- **Excellence over speed.** Do not ship the first working version if a materially better version is one iteration away.
- **Maintainability over shortcuts.** No copy-pasted components, no inline style hacks, no "just this once" exceptions.
- **Modular architecture.** Every component has one responsibility and a clear boundary. Composition over configuration.
- **Production-quality code, always.** There is no "throwaway" or "just prototyping" code in this repository — everything committed is expected to ship.
- **Thoughtful explanation before implementation.** For any non-trivial change, briefly state the approach and trade-offs before writing code, especially when multiple valid approaches exist.
- **No speculative engineering.** Do not build abstractions, config layers, or flexibility for requirements that do not yet exist.

---

## Required Workflow Before Making Changes

Before writing or modifying code in any session:

1. **Read governing docs.** Confirm the current state of `CLAUDE.md`, `PROJECT_RULES.md`, `DESIGN_SYSTEM.md`, and any active `TASK_TEMPLATE.md` brief.
2. **Confirm scope.** Identify exactly which files/components/pages the task touches. Do not drift into unrelated files.
3. **Check for existing patterns.** Search the codebase for an existing component, hook, or utility that already solves the problem before creating a new one.
4. **State the plan.** For anything beyond a trivial fix, summarize the intended approach before implementing.
5. **Confirm design alignment.** Cross-check colors, spacing, and typography choices against `DESIGN_SYSTEM.md` before writing markup.
6. **Do not begin visual/content build-out until explicitly instructed.** Scaffolding, configuration, and structural work may proceed ahead of that instruction; page design and content should not.

---

## Coding Standards

- TypeScript strict mode is non-negotiable — no `any`, no unchecked type assertions without justification.
- Every exported function, component, and hook has an explicit, meaningful name — no `data`, `temp`, `handleStuff`.
- Prefer named exports for components; one component per file, file name matches component name.
- No default exports except where required by tooling convention (e.g., `App.tsx`, page-level route components if the router requires it).
- Keep files short and focused. If a component exceeds ~150–200 lines, it likely needs to be decomposed.
- No commented-out code committed to the repository. Delete it — git history is the archive.
- Comments explain *why*, never *what*. If a comment restates the code, remove it.

---

## React & TypeScript Best Practices

- Functional components only. No class components.
- Props are typed with explicit `interface` or `type` declarations — never inferred implicitly from usage.
- Destructure props in the function signature for readability.
- Co-locate component-specific types with the component; share cross-cutting types via `src/types/`.
- Use custom hooks (`src/hooks/`) to extract non-trivial logic out of components — components should describe UI, hooks should describe behavior.
- Avoid prop drilling beyond two levels; prefer composition (children/slots) or context where appropriate.
- No unnecessary `useEffect`. Derive state during render where possible; only reach for effects for real synchronization with external systems.
- Memoize only when there is a demonstrated performance need — do not reflexively wrap everything in `useMemo`/`useCallback`.
- All interactive elements are real semantic elements (`button`, `a`, `input`) — never a `div` with an `onClick`.

---

## Styling Rules

- Tailwind CSS is the styling system. No CSS-in-JS, no separate stylesheets per component, no inline `style={{}}` except for truly dynamic, computed values (e.g., a progress bar width).
- Brand tokens (`rose-gold`, `champagne`, `charcoal`, `ivory`, `white`) are defined once in the Tailwind theme and referenced by name — never hardcoded hex values in component markup.
- Follow the spacing, radius, and shadow scale defined in `DESIGN_SYSTEM.md` — do not invent one-off values.
- Class lists should read logically (layout → spacing → typography → color → state) — keep them scannable, not sorted alphabetically by accident.
- Extract a class combination into a component (not a CSS abstraction) once it's reused three or more times.
- Avoid `!important` and Tailwind's `!` modifier entirely — if you need to force a style, the underlying structure is wrong.

---

## Animation Standards

- Framer Motion is the animation library — no ad hoc CSS keyframes for interactive UI unless performance demands it.
- Motion should be **subtle**: short durations (150–400ms for micro-interactions, up to 600ms for entrance transitions), gentle easing (`easeOut` / custom cubic-bezier over linear or bouncy defaults).
- Respect `prefers-reduced-motion` for every animation — provide a reduced or instant fallback.
- Animate opacity/transform only where possible; avoid animating layout-triggering properties (width, height, top/left) for performance.
- Use animation to reinforce hierarchy (staggered reveals, scroll-triggered entrances) — never as decoration disconnected from content meaning.
- No animation should block or delay a user's ability to read content or take action (e.g., no obscuring the booking CTA during an entrance transition).

---

## Responsive Design Requirements

- Design and build mobile-first; scale up with Tailwind's responsive prefixes.
- Support breakpoints at minimum: mobile (< 640px), tablet (640–1024px), desktop (1024px+), and wide desktop (1536px+).
- Touch targets are a minimum of 44×44px on all interactive elements.
- No horizontal scroll at any breakpoint, ever.
- Typography scales fluidly — avoid fixed pixel font sizes that overflow small viewports.
- Test every new section at mobile, tablet, and desktop widths before considering it complete.

---

## Accessibility (WCAG 2.2 AA)

- All color combinations meet WCAG 2.2 AA contrast ratios (4.5:1 for body text, 3:1 for large text/UI components) — verify Rose Gold and Champagne combinations specifically, as they are lower-contrast brand colors.
- Full keyboard navigability: every interactive element is reachable and operable via keyboard, with a visible focus state at all times.
- Semantic HTML first — headings in logical order (single `h1` per page, no skipped levels), landmarks (`nav`, `main`, `footer`, `header`) used correctly.
- All images have meaningful `alt` text; decorative images use `alt=""`.
- Form fields have associated, visible labels — placeholder text is never a substitute for a label.
- ARIA is used only to fill genuine gaps in native semantics — never as a first resort.
- Motion-sensitive users are respected via `prefers-reduced-motion`.
- Every accessibility requirement here is a hard requirement, not an aspiration — treat AA failures as bugs, not polish items.

---

## Performance Goals (Lighthouse 95+)

- Target Lighthouse scores of 95+ across Performance, Accessibility, Best Practices, and SEO on both mobile and desktop.
- Images are served in modern formats (WebP/AVIF), properly sized, and lazy-loaded below the fold.
- Fonts are loaded with `font-display: swap` and subset where practical; limit to at most two font families.
- No unused dependencies — every package in `package.json` earns its place.
- Code-split routes so users only download what a given page needs.
- Avoid layout shift: reserve space for images, fonts, and async content (target CLS < 0.1).
- Keep the JavaScript bundle lean — Framer Motion and other libraries are used deliberately, not imported wholesale into every component.

---

## SEO and AEO Standards

- Every page has a unique, descriptive `<title>` and meta description written for humans first, keywords second.
- Use structured data (JSON-LD) for `LocalBusiness`/`BeautySalon` schema, services, and business hours so search engines and AI answer engines can accurately represent the business.
- Semantic heading hierarchy doubles as the content outline both search crawlers and AI answer engines (AEO) parse — write headings as if they'll be quoted directly in an AI-generated answer.
- Content should directly and clearly answer the questions a prospective client would ask ("Where is Beauty Bar Studio located?", "What services do you offer?", "What are your hours?") in plain, extractable language near the top of relevant sections.
- Every page has a canonical URL, appropriate Open Graph and Twitter Card meta tags, and a sensible, human-readable URL structure.
- Provide a sitemap and `robots.txt` once routing is finalized.

---

## Local SEO Guidance

- Business Name, Address, and Phone (NAP) must be consistent, exact, and present in the site footer and structured data on every page: **Beauty Bar Studio, 1200 Mountain Glow, Dallas, TX 75024, (222) 576-8329**.
- Embed accurate `LocalBusiness` schema including hours (Daily, 9:00 AM–6:00 PM), address, phone, and service list.
- Include a dedicated, crawlable contact/location section — not just a linked map image.
- Use Dallas- and neighborhood-relevant language naturally in copy where authentic (service area, landmarks) — never keyword-stuffed.
- Prepare the structure to support Google Business Profile alignment and future review/rating schema once the business is live.

---

## Component Reuse Philosophy

- Before creating a new component, search `src/components/ui/` and `src/components/sections/` for something that already does the job or is close enough to extend.
- `ui/` holds generic, brand-styled primitives (buttons, inputs, cards, badges) with no business logic or copy baked in.
- `layout/` holds structural chrome (header, footer, navigation, page containers).
- `sections/` holds page-specific composed blocks (hero, service grid, testimonials) built from `ui/` primitives.
- A component belongs in `ui/` if it could plausibly be reused on an unrelated page; it belongs in `sections/` if it is tied to specific business content.
- Prefer composition (passing children, slots) over adding boolean prop flags that branch a component's rendering internally.
- Three or more instances of near-identical markup is the signal to extract a component — not a rule to apply preemptively.

---

## Folder Organization

```
src/
  assets/         Images, fonts, static media
  components/
    ui/           Generic, reusable, brand-styled primitives
    layout/       Header, footer, nav, page shell
    sections/     Page-specific composed content blocks
  pages/          Route-level components
  layouts/        Shared page layout wrappers
  hooks/          Reusable stateful logic
  lib/            Utilities, helpers, formatters
  types/          Shared TypeScript types/interfaces
  config/         Business info, theme tokens, site-wide constants
```

- New top-level folders under `src/` require a clear justification — do not fragment structure without reason.
- Route components in `pages/` should stay thin — compose `sections/` components rather than containing large blocks of markup directly.

---

## Error Prevention Checklist

Before considering any change complete, verify:

- [ ] `npm run build` completes with zero errors
- [ ] `npm run lint` passes with zero errors and no new warnings
- [ ] No TypeScript `any`, no `@ts-ignore` without an explanatory comment and justification
- [ ] No console errors or warnings in the browser at runtime
- [ ] No broken links, missing images, or dead routes
- [ ] No layout shift or overflow at mobile, tablet, and desktop widths
- [ ] All new interactive elements are keyboard-accessible with visible focus states

---

## Git Commit Conventions

- Use Conventional Commits: `feat:`, `fix:`, `refactor:`, `style:`, `docs:`, `chore:`, `perf:`, `test:`.
- Write commit messages in the imperative mood, focused on *why*, not just *what* ("add sticky booking CTA for mobile conversion" over "update Header.tsx").
- Keep commits scoped to a single logical change — do not bundle unrelated fixes into one commit.
- Never commit directly generated build output (`dist/`), environment secrets, or `node_modules`.
- Only commit when explicitly instructed; do not commit speculative or partially-finished work.

---

## UX Standards

- The path to booking an appointment should never require more than two clicks from any page.
- Navigation is predictable and minimal — clients should never wonder where they are or how to get back.
- Every section has a clear purpose; if a section doesn't move the visitor closer to understanding the brand or booking, cut it.
- Loading and empty states are designed, not default — no raw "undefined" or blank flashes.
- Error states (e.g., failed form submission) are handled gracefully with clear, human language.
- Consistency over novelty: once a pattern is established (card style, button hierarchy, spacing rhythm), reuse it rather than reinventing it per section.

---

## Conversion Optimization Principles

- The primary call-to-action ("Book Now") is visually dominant, uses the brand accent color deliberately, and is present in the hero, sticky nav/header, and footer at minimum.
- Reduce friction: the booking flow (or handoff to Square Appointments) should require the fewest possible steps.
- Build trust signals into the layout: services detail, hours/location clarity, and (once available) testimonials, credentials, and real imagery.
- Use social proof and specificity ("Premium Day Spa," "Bridal Packages") over generic claims.
- Above-the-fold content on every page should answer: *what is this business, what makes it premium, and how do I book.*
- Mobile conversion is the priority path — a majority of local service searches and bookings happen on mobile.

---

## Future Expansion Guidance

- Architecture should comfortably support: an online booking integration (Square Appointments), a blog/journal for SEO content, staff/team profiles, a testimonials/reviews system, and multi-location expansion if the business grows.
- Keep business data (`src/config/business.ts`) as the single source of truth so future locations or service changes don't require hunting through markup.
- Favor patterns that scale (data-driven rendering of services, team members, testimonials from arrays/config) over hardcoded one-off markup per item.
- Do not build these future features preemptively — build the current scope in a way that doesn't block them.

---

## Communication Style

- Be direct and concise; lead with the decision or answer, then the reasoning.
- Explain trade-offs when a non-obvious choice is made, especially around design or architecture.
- Flag assumptions explicitly rather than silently guessing on ambiguous requirements.
- When a request conflicts with this document, say so and propose the aligned alternative rather than silently deviating from either.

---

## Quality Checklist Before Completing Any Task

- [ ] Code follows all standards in this document
- [ ] Design matches `DESIGN_SYSTEM.md` (colors, type, spacing, motion)
- [ ] Fully responsive and tested at mobile, tablet, and desktop widths
- [ ] Meets WCAG 2.2 AA accessibility requirements
- [ ] No performance regressions; images/assets optimized
- [ ] SEO fundamentals in place for any new page (title, meta, headings, schema where applicable)
- [ ] No unused code, unused dependencies, or dead files introduced
- [ ] Build and lint pass cleanly
- [ ] Change is scoped to what was requested — no unrequested refactors or additions
