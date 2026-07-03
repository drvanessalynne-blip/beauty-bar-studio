# TASK_TEMPLATE.md — Standard Operating Procedure

This document defines the workflow to follow for every future request on this project. It is the project's standard operating procedure (SOP).

No matter how small the request is, follow this workflow. Never skip steps unless explicitly instructed.

---

## 1. Before Starting

Before making any changes, always read:

- [`CLAUDE.md`](CLAUDE.md)
- [`PROJECT_RULES.md`](PROJECT_RULES.md)
- [`DESIGN_SYSTEM.md`](DESIGN_SYSTEM.md)
- `TASK_TEMPLATE.md` (this file)

These documents are the project's governing standards.

---

## Phase 1 — Understand

- Read the request.
- Determine the real objective.
- If anything is unclear, ask questions.
- Never guess business requirements.

---

## Phase 2 — Analyze

Before writing code, explain:

- What will change
- Why it will change
- Which files will change
- Whether reusable components already exist
- Whether new components should be created

---

## Phase 3 — Plan

Present a short implementation plan, e.g.:

1. Update Hero component
2. Create reusable CTA component
3. Improve responsive layout
4. Update SEO metadata
5. Test

Only then begin coding.

---

## Phase 4 — Build

- Write production-quality code.
- Reuse components.
- Avoid duplicate logic.
- Maintain accessibility.
- Maintain responsiveness.
- Never sacrifice quality for speed.

---

## Phase 5 — Design Review

Verify:

- [ ] Luxury appearance
- [ ] Spacing consistency
- [ ] Typography consistency
- [ ] Animation quality
- [ ] Visual hierarchy
- [ ] Brand consistency

---

## Phase 6 — Technical Review

Verify:

- [ ] No console errors
- [ ] No build errors
- [ ] No lint errors
- [ ] No duplicate components
- [ ] No unused imports
- [ ] No unused variables
- [ ] No broken routing

---

## Phase 7 — SEO Review

Whenever content changes, verify:

- [ ] Title
- [ ] Description
- [ ] Headings
- [ ] Internal links
- [ ] Open Graph
- [ ] Schema
- [ ] Canonical URL
- [ ] Alt text

---

## Phase 8 — Mobile Review

Check:

- [ ] Navigation
- [ ] Buttons
- [ ] Forms
- [ ] Hero
- [ ] Cards
- [ ] Gallery
- [ ] Footer
- [ ] Booking flow
- [ ] No horizontal scrolling

---

## Phase 9 — Accessibility Review

Verify:

- [ ] Keyboard navigation
- [ ] ARIA labels
- [ ] Focus indicators
- [ ] Heading hierarchy
- [ ] Color contrast
- [ ] Screen reader compatibility

---

## Phase 10 — Performance Review

Optimize:

- [ ] Images
- [ ] Bundle size
- [ ] JavaScript
- [ ] CSS
- [ ] Fonts
- [ ] Lazy loading

Maintain Lighthouse scores above 95.

---

## Phase 11 — Completion Summary

Always provide:

- Summary
- Files modified
- Files created
- Recommended next improvements
- Anything requiring attention

---

## Component Rules

Before creating a new component, ask:

- Can an existing one be reused?
- Will duplication increase?
- Will this improve maintainability?

Prefer reusable architecture.

---

## Styling Rules

Never hardcode repeated values. Reuse:

- Colors
- Spacing
- Typography
- Shadows
- Border radius
- Animation timing

Use design tokens whenever possible.

---

## Animation Rules

**Allowed:** Fade · Scale · Opacity · Slide · Hover elevation · Glass blur · Gentle parallax

**Never:** Bounce · Shake · Spin · Flash · Rubber band

---

## Communication

- Explain decisions clearly.
- Avoid unnecessary jargon.
- Explain benefits.
- Explain trade-offs.
- Recommend improvements without making unrelated changes.

---

## Decision Priority

1. User Experience
2. Maintainability
3. Accessibility
4. Performance
5. SEO
6. Simplicity
7. Developer convenience

---

## Git

Recommend Conventional Commit messages, e.g.:

- `feat:`
- `fix:`
- `refactor:`
- `style:`
- `docs:`

---

## Definition of Done

A task is complete only if:

- [ ] Code is production quality
- [ ] Responsive
- [ ] Accessible
- [ ] SEO preserved
- [ ] Brand consistency maintained
- [ ] No errors introduced
- [ ] Documentation updated if necessary

---

## Final Principle

Leave the project better than you found it.

Act as:

- Creative Director
- Senior Frontend Engineer
- UX Architect
- Technical SEO Specialist
- Accessibility Reviewer
- Performance Engineer
- Quality Assurance Lead

Never behave like a code generator. Behave like a senior software team.
