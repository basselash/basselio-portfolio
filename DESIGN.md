---
version: alpha
name: Sleek Portfolio
description: Personal portfolio for Bassel Ashraf Ali Azab — UI/UX designer and front-end developer. Colors and type are matched directly to a reference designer-portfolio template rather than reinterpreted.

colors:
  primary: "#363636"
  secondary: "#5C5C5C"
  tertiary: "#FD7250"
  neutral: "#F4F4F4"
  surface: "#FFFFFF"
  on-surface: "#000000"
  subtle: "#EDEDED"
  border: "#E0E0E0"
  error: "#C23B2E"

typography:
  display:
    fontFamily: Wix Madefor Display
    fontSize: 56px
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Wix Madefor Display
    fontSize: 32px
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Wix Madefor Display
    fontSize: 22px
    fontWeight: 700
    lineHeight: 1.25
  body-lg:
    fontFamily: Wix Madefor Text
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.6
  body-md:
    fontFamily: Wix Madefor Text
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: Wix Madefor Text
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
  label-caps:
    fontFamily: Wix Madefor Text
    fontSize: 11px
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: 0.1em

rounded:
  none: 0px
  sm: 8px
  md: 12px
  lg: 24px
  full: 9999px

spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 32px
  xl: 64px
  gutter: 24px
  margin: 64px

components:
  page:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
  nav-badge:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-caps}"
    rounded: "{rounded.full}"
    padding: "{spacing.sm}"
  nav-link:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.secondary}"
    typography: "{typography.label-caps}"
  nav-link-active:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.primary}"
    typography: "{typography.label-caps}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.surface}"
    typography: "{typography.label-caps}"
    rounded: "{rounded.md}"
    padding: "{spacing.md}"
  button-primary-hover:
    backgroundColor: "#1F1F1F"
    textColor: "{colors.surface}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-caps}"
    rounded: "{rounded.md}"
    padding: "{spacing.md}"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  card-featured:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  tag-chip:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.full}"
    padding: "{spacing.xs}"
  divider:
    backgroundColor: "{colors.border}"
    height: 1px
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm}"
  input-error:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.error}"
    typography: "{typography.body-sm}"
  tooltip:
    backgroundColor: "{colors.on-surface}"
    textColor: "{colors.surface}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm}"
  eyebrow:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-caps}"
    rounded: "{rounded.full}"
    padding: "{spacing.sm}"
  section-dark:
    backgroundColor: "{colors.on-surface}"
    textColor: "{colors.surface}"
    typography: "{typography.body-md}"
  card-dark:
    backgroundColor: "{colors.on-surface}"
    textColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  subtle-panel:
    backgroundColor: "{colors.subtle}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm}"
---

# Sleek Portfolio

## Overview

This system is deliberately **not** authored from scratch — it's a direct match to a reference designer-portfolio template the client picked out and asked to replicate exactly: same colors, same fonts, same visual logic. That's a different job from the usual DESIGN.md brief. Normally a palette gets re-anchored to something specific to the person it represents; here the correct move is fidelity to the source, verified against its actual computed styles (not eyeballed from a screenshot), because the client's ask was literal.

The register is **stark, high-contrast, editorial-adjacent**: near-white page, pure-white cards, black type, and a bento grid of unevenly-sized tiles, alternating with pure-black full-bleed sections for the slower "What I Do" and "About" reads. What this direction gives up: warmth. There are no tinted neutrals here — the source uses true white, true black, and a flat mid-grey, and this system matches that rather than softening it.

## Colors

Every value here was read directly from the reference site's computed CSS (`getComputedStyle`), not estimated from screenshots. Two findings changed the system from an earlier draft: the primary interactive color is a **dark charcoal**, not the coral accent — buttons and links use `#363636`/`#000000`, and coral appears exactly once, as a single accent card's background. Getting that backwards (making coral the "clickable" color) would have been a plausible-looking but factually wrong read of the source.

- **Primary (#363636):** the measured fill of the source's primary buttons and links on light backgrounds. Carries every interactive element outside the dark sections.
- **Secondary (#5C5C5C):** the measured color of muted/caption text. Used for anything that should recede.
- **Tertiary (#FD7250):** the coral accent, measured from the one card in the source that uses it as a background. Reserved for exactly one surface at a time — it does not appear as a text color, a border, or anywhere else.
- **Neutral (#F4F4F4):** the measured page background — a flat light grey, not warm-tinted.
- **Surface (#FFFFFF):** the measured card background — true white, matching the source exactly.
- **On-surface (#000000):** the measured body/heading text color, and also the dark-section background. True black, not a softened near-black.
- **Subtle (#EDEDED):** a light grey a half-step off Neutral, used for secondary panel fills (e.g. placeholder preview blocks) where a second flat tone is needed.
- **Border (#E0E0E0):** hairlines and outline-chip strokes.
- **Error (#C23B2E):** not present in the source (a portfolio has no form states to sample); derived from the coral family so a validation error still reads as belonging to this palette rather than an imported stock red, and darkened until it clears AA on white.

**Known accessibility gap, kept intentionally for source fidelity:** white text on `tertiary` (`#FD7250`) measures **2.73:1**, below WCAG AA (4.5:1) for text of any size. The source template ships this exact combination. It's used here only on the one accent card, at display scale, matching the source — not extended anywhere else. If this system is ever asked to meet AA strictly, this is the one color pairing that needs a client decision (darken the coral, or switch that card's text to `on-surface`).

## Typography

Two families, matching the source exactly rather than reinterpreted: **Wix Madefor Display** for headings and **Wix Madefor Text** for everything else. Both are real, freely licensed (SIL OFL) and available directly through Google Fonts — this is a case where the "authored, not default" instinct doesn't apply, because matching the specific pair the source uses *is* the brief.

**Wix Madefor Display**, bold (700), carries the hero line, section headings, and card titles. Fallback stack: `"Wix Madefor Display", ui-sans-serif, sans-serif`.

**Wix Madefor Text** carries body copy, labels, nav, and buttons at two weights — 400 for reading text, 500 for uppercase `label-caps`. Fallback stack: `"Wix Madefor Text", ui-sans-serif, sans-serif`.

No monospace typeface is used anywhere. The source has none, so an earlier draft's JetBrains Mono accent for tech-stack chips has been removed — those chips now use `body-sm` like everything else.

The scale runs 11px → 56px. Tracking tightens slightly at display size (−0.02em) and opens up on uppercase labels (+0.1em). Only two weights are used total — 400 and 500 for Text, 700 for Display — kept deliberately far apart so the jump reads as a real hierarchy signal.

## Layout

A **12-column bento grid**, 24px gutters, 64px outer margin on desktop, collapsing to a single stacked column below 768px. Cards span uneven widths and heights rather than a uniform grid of equal tiles.

Full page order: **Hero** (bento grid) → **Selected Work** (one case-study block, light) → **What I Do** (dark, four practice-area cards in a 2×2 grid) → **About** (dark, longer-form bio) → **CTA** (light, one line + one action) → **Footer** (light, three columns). Dark sections reuse `on-surface`/`surface` as background/text rather than introducing a separate dark palette.

Spacing runs on an **8px base**. Body copy is capped at roughly 65 characters per line even inside a wide card.

The page is intentionally **asymmetric** — cards are left-weighted and unevenly sized, and nothing is centered except short standalone labels and the CTA line.

## Elevation & Depth

Depth comes from the **tonal step between Neutral (page) and Surface (cards)** plus a 1px `border` hairline where that tonal contrast alone is too subtle. Shadow is used sparingly and only on hover/interactive states — flat black at low opacity is acceptable here (unlike a warm-toned system, this palette has no hue to tint a shadow with). At rest, nothing casts a shadow.

## Shapes

Radius is hierarchical: bento cards use 24px, buttons and inputs use 12px, and tag chips use full pill (9999px) with an outline rather than a fill. Nothing uses a radius between 12px and 24px.

## Components

**Buttons.** Primary is a solid `primary` (#363636) fill with `surface` (white) text, uppercase `label-caps`. Hover darkens to `#1F1F1F`. Secondary is `surface` fill with `on-surface` text and a 1px `border` rule — used for anything that isn't the page's single main call-to-action. Inside a `section-dark`, the equivalent button is outline-only: transparent fill, `surface`-colored border and text, matching the source's "Learn More" treatment.

**Bento cards.** `surface` fill, 24px radius, 32px padding, 1px `border`. One card per discrete idea.

**Tag chips (`tag-chip`).** Outline pills, not filled — `surface` background, `on-surface` text, a 1px `border` stroke, full radius. This matches the source's "Interaction Design"-style expertise chips exactly, which are unfilled outlines rather than colored pills.

**Accent card (`card-featured`).** The only place the portfolio's own `tertiary` appears — currently the hero's "Currently" status card. Flat fill, no gradient — the source uses a solid coral rectangle, not a gradient. Reserved for exactly one card at a time; if that card ever changes, the color moves with it rather than gaining a second instance.

**Résumé card (`CvDownloadCard`).** A `card-dark` variant that stands alone in a light section rather than living inside `section-dark` — same `on-surface`/`surface` pairing, same reasoning (reuse the one dark fill, don't invent a second). It checks for the résumé file at load (`fetch(…, {method:"HEAD"})`) and shows a working download link if present, or an honest "Coming soon" label if not — the same fallback discipline as `ProjectImage`/`ProjectVideo`, applied to a static asset rather than a rendered one.

**Project cards are the one deliberate exception to this token system.** Selected Work renders each project through its own `theme` (background/surface/text/textMuted/accent/fontDisplay, defined per-project in `src/data/projects.ts`) rather than the portfolio's `primary`/`neutral`/`surface` tokens — a case-study card is supposed to look like the project it represents, not like a reskinned version of the portfolio chrome. Everything *around* the card — the section grid, the `Eyebrow` label, spacing, the hover-lift interaction — stays on the portfolio's own system. Only the inside of the card (its colors, its title typeface) belongs to the project.

**Project video (`ProjectVideo`).** Muted, looped, `playsInline`, paused via `IntersectionObserver` when scrolled out of view. Falls back to a themed placeholder panel (using the project's own `surface`/`accent`) rather than a broken `<video>` or an invented screenshot when no real recording exists yet at the declared path.

**Project card composition.** A project isn't one image — it's a `hero` (the large primary screen), an optional `gallery` of smaller supporting screens shown as a 3-up strip with a hover-revealed label, and an optional `video` walkthrough, stacked as one continuous themed presentation with no gaps or borders between them. Every one of those (`ProjectImage`, `ProjectVideo`) degrades to an honest labeled placeholder — never a broken asset, never an invented one — so the architecture is fully usable before any real asset exists. A project declares a `size` (`featured`/`large`/`medium`) that controls its column span in the 12-column Selected Work grid, so future projects can sit side-by-side at different scales rather than every project defaulting to full width.

**Eyebrow labels (`eyebrow`).** A small outlined pill introducing a section. In a light section: `surface` fill, `on-surface` text, `border` stroke. Inside `section-dark`: transparent fill, `surface` text and border.

**Dark sections (`section-dark`) and dark cards (`card-dark`).** Both use the `on-surface`/`surface` pairing — pure black background, white text — whether at full section scale or as a single card sitting in an otherwise light grid (the résumé card). Cards inside a dark section are separated from the section background by a 1px `surface`-at-10%-opacity border only; there is no second dark fill value anywhere in the system.

## Do's and Don'ts

- **Do** keep `tertiary` (#FD7250) on exactly one card at a time. It is a rare accent in the source, not a secondary brand color.
- **Don't** use `tertiary` as a button, link, or any small-text color — the source never does, and its contrast against white text is already at the edge of acceptable even at card scale.
- **Do** use pure `#FFFFFF` and pure `#000000` in this system, unlike a typical warm-neutral system. That's a direct, verified match to the source, not an oversight.
- **Don't** reintroduce a monospace typeface. The source has none; earlier drafts of this system did and that was a deviation, now corrected.
- **Do** render `tag-chip` as an outline, never a filled pill. A filled chip is a plausible-looking but incorrect read of the source's actual (unfilled) chip style.
- **Don't** add a shadow to a card at rest. Depth comes from the Neutral→Surface tonal step and hairline borders only.
- **Do** keep body copy inside its 65-character measure even inside a wide card.
- **Don't** center the hero or bio text. The layout is asymmetric and flush-left by default.
- **Do** alternate light and dark strictly section-by-section. Two dark sections in a row breaks the pacing rhythm.
- **Don't** invent a second dark background value. `card-dark` and `section-dark` share the exact same `on-surface` fill; separation comes from a `surface`-at-10% border only.
- **Do** give each project its own `theme` in `src/data/projects.ts` — colors and a title typeface distinct to that project's actual visual identity. A project card that just reuses `primary`/`surface` is a reskinned template, not a case-study preview.
- **Don't** let a project's own theme leak outside its card. The section label, grid, spacing, and hover behavior stay on the portfolio's system regardless of how loud or quiet an individual project's palette is.
