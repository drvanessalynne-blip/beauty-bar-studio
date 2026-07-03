# DESIGN_SYSTEM.md — Beauty Bar Studio Visual Design Language

This file defines the complete visual design language for Beauty Bar Studio. It is the single source of truth for every visual decision made on this project.

---

## Design Philosophy

Beauty Bar Studio should feel like walking into an award-winning luxury spa.

The design language should be inspired by:

- Four Seasons Spa
- Aesop
- Apple
- Soho House
- Dior Beauty
- Chanel Beauty
- Hermès
- Drybar
- Luxury boutique hotels

**The design should be:**

Elegant · Modern · Editorial · Minimal · Warm · Timeless · Premium · Luxurious

**Never:**

Cheap · Busy · Generic · Over-designed · Trendy

---

## Color System

| Role | Name | Hex |
|---|---|---|
| Primary | Rose Gold | `#B76E79` |
| Secondary | Champagne | `#F7E7CE` |
| Neutral | Charcoal Black | `#232323` |
| Supporting | Warm Ivory | `#FFF8F2` |
| Supporting | White | `#FFFFFF` |

**Color usage ratio**

| Proportion | Colors |
|---|---|
| 70% | Warm Ivory / White |
| 20% | Charcoal |
| 10% | Rose Gold |

Rose Gold should always feel like a luxury accent — never the dominant color.

---

## Typography

| Role | Font | Fallback |
|---|---|---|
| Heading | Playfair Display | Cormorant Garamond |
| Body | Inter | Manrope |

**Font Scale**

| Token | Size |
|---|---|
| Hero | 64px |
| H1 | 48px |
| H2 | 36px |
| H3 | 28px |
| Body Large | 20px |
| Body | 18px |
| Small | 16px |
| Caption | 14px |

**Line Heights**

| Context | Line Height |
|---|---|
| Headings | 1.15 |
| Body | 1.7 |
| Buttons | 1.3 |

---

## Spacing System

Use an 8-point spacing grid exclusively:

`4 · 8 · 16 · 24 · 32 · 48 · 64 · 80 · 96 · 128`

Never invent random spacing values.

---

## Border Radius

| Element | Radius |
|---|---|
| Small | 8px |
| Medium | 16px |
| Large | 24px |
| Hero Cards | 32px |
| Buttons | 999px (pill) |

---

## Shadows

Use only soft luxury shadows — Small, Medium, Large.

Never use harsh or heavy shadows.

---

## Button Design

**Primary Button**
- Rose Gold background, White text
- Rounded pill shape
- Soft shadow
- Hover: lift slightly, darken subtly, 150ms transition

**Secondary Button**
- White background, Rose Gold border, Rose Gold text
- Hover: Champagne fill

**Ghost Button**
- Transparent background, Charcoal text
- Underline on hover

---

## Card Design

- White background
- Rounded corners
- Large padding
- Soft shadow
- Hover elevation
- Elegant spacing

Cards should never feel cramped.

---

## Forms

- Large input fields
- Rounded corners
- 18px font
- Visible labels
- Accessible focus states
- Subtle borders
- Soft shadows

---

## Icons

Preferred library: **Lucide React**

- Outline icons only
- No cartoon icons
- No filled icon sets

---

## Image Style

**Photography should be:**

Luxury · Bright · Natural · Warm · Editorial · Minimal — real people, beautiful interiors, luxury beauty products.

**Avoid:**

Outdated stock images · Heavy filters · Artificial poses · Neon colors

---

## Image Ratios

| Use Case | Ratio |
|---|---|
| Hero | 16:9 |
| Portrait | 4:5 |
| Gallery | 4:5 |
| Cards | 3:2 |
| Square | 1:1 |

---

## Animation System

**Durations**

| Token | Duration |
|---|---|
| Fast | 150ms |
| Standard | 250ms |
| Slow | 350ms |
| Maximum | 500ms |

**Allowed:** Fade · Scale · Opacity · Slide · Parallax · Blur · Glass morphism · Hover elevation

**Never use:** Bounce · Shake · Spin · Flash · Rubber-band effects

Animations should feel effortless and almost invisible.

---

## Layout System

| Property | Value |
|---|---|
| Max width | 1280px |
| Desktop grid | 12 columns |
| Tablet grid | 8 columns |
| Mobile grid | 4 columns |

Large whitespace throughout.

---

## Navigation

- Sticky header
- Glass effect with soft blur
- Thin bottom border
- Smooth transitions
- Book Now button always visible

---

## Hero Section

- Large editorial typography
- Luxury imagery
- Strong CTA
- Minimal distractions
- Generous negative space

---

## Gallery

- Pinterest-inspired masonry layout
- Rounded corners
- Hover zoom
- Fade overlay
- Luxury spacing

---

## Testimonials

- Luxury cards
- Soft shadows
- Elegant typography
- Subtle carousel animation

---

## FAQ

- Accordion layout
- Accessible
- Large click targets
- Smooth transitions

---

## Footer

- Charcoal background
- White typography
- Rose Gold accents
- Simple and elegant

---

## Accessibility

- Meet WCAG 2.2 AA
- Semantic HTML
- ARIA labels
- Keyboard support
- Accessible colors
- Logical heading structure

---

## Performance

Maintain Lighthouse scores above:

| Category | Target |
|---|---|
| Performance | 95+ |
| Accessibility | 100 |
| SEO | 100 |
| Best Practices | 100 |

---

## Reusable Components

Design every UI element so it can become part of a reusable component library, including:

Button · Card · Container · Section · Hero · Navigation · Footer · Gallery · Accordion · Service Card · CTA · Testimonials · Forms

---

## Quality Checklist

Before shipping any feature, ask:

- [ ] Does spacing match the design system?
- [ ] Does typography match the design system?
- [ ] Does this feel luxurious?
- [ ] Is it responsive?
- [ ] Is it accessible?
- [ ] Does it match the Beauty Bar Studio brand?
- [ ] Is it visually consistent?
- [ ] Is it elegant?

If the answer is no, improve it before completing the task.

---

## Final Design Principle

Luxury is achieved through restraint.

Every pixel should feel intentional. Every interaction should build trust. Every page should feel handcrafted.

The completed website should feel like one of the finest salon websites in the United States.
