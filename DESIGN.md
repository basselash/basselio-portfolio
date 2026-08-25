---
version: alpha
name: Sunbaked Bento
description: Personal portfolio for Bassel Ashraf Ali Azab — UI/UX designer and front-end developer. A modular bento-grid layout for a design-literate audience (recruiters, studios, hiring managers) skimming a portfolio in under a minute.

colors:
  primary: "#9C3417"
  secondary: "#6B655B"
  tertiary: "#5B5EC4"
  neutral: "#F2EEE7"
  surface: "#FDFCFB"
  on-surface: "#1B1712"
  subtle: "#F6D9C9"
  border: "#E4DED2"
  error: "#B23B26"

typography:
  display:
    fontFamily: Space Grotesk
    fontSize: 56px
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 22px
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Work Sans
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.6
  body-md:
    fontFamily: Work Sans
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: Work Sans
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
  label-caps:
    fontFamily: Work Sans
    fontSize: 11px
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: 0.1em
  data-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0.02em

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
    backgroundColor: "#7A2812"
    textColor: "{colors.surface}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
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
    backgroundColor: "{colors.subtle}"
    textColor: "{colors.primary}"
    typography: "{typography.data-sm}"
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
---

# Sunbaked Bento

## Overview

This is a portfolio read once, fast, by someone deciding whether to keep looking — a recruiter or hiring designer scanning on a laptop for twenty seconds before they either scroll or leave. It has to communicate "this person can design *and* build" in that window, which is why it borrows the **bento grid**: a modular field of unevenly-sized cards (intro, skills, the one flagship project, contact) that lets the eye sample the whole page without reading top-to-bottom first.

The page alternates **light and dark registers** section by section: light for the hero and the work sample (fast, scannable, credential-forward), dark for "What I Do" and the fuller "About" (slower, asks for a moment of actual reading). The alternation is the pacing device — it tells a skimming reader when to speed up and when the page wants them to slow down, without needing a scroll-triggered animation to do it. Dark sections reuse existing tokens rather than introducing a separate dark palette: `on-surface` becomes the section background and `surface` becomes the text, the same pairing `tooltip` already uses at component scale, just applied to a whole section.

The direction is **Bento Studio**, adapted from a genre of designer-portfolio template (light, card-based, one confident accent) rather than invented from nothing — but the palette is not borrowed. It's re-anchored to something specific to the person it represents: Cairo sandstone and a Nile dusk, standing in for someone building his design career from Nile University. That's the difference between reusing a layout idea and reusing a look.

What this direction gives up, deliberately: **restraint**. A bento grid with a loud terracotta accent is not a quiet, minimal system — it is closer to a confident, slightly maximalist one. That's the trade being made in exchange for a page that reads instantly as "portfolio," not "resume."

## Colors

The palette is sampled from two things: fired terracotta (the primary) and the Nile at dusk (the one cool accent). Nothing here is a framework default — every neutral carries a warm tint, and there is no pure white or pure black anywhere in the system. Primary and tertiary both sit deeper in their ramps than the initial pass used, specifically so text set in them clears WCAG AA (4.5:1) against every background they appear on — a portfolio that fails contrast checks undercuts the "I design accessible UI" pitch it's implicitly making.

- **Primary (#9C3417) — "Fired terracotta":** kiln-fired clay rather than raw sandstone — darker and more saturated than a literal desert sample, because it has to double as text and button color at AA contrast. Carries every interactive element — links, primary buttons, the active nav state, chip text. It is the only color allowed to signal "click me."
- **Secondary (#6B655B) — "Limestone dust":** a warm neutral grey for anything that should recede — nav labels, captions, metadata. Never used for anything interactive.
- **Tertiary (#5B5EC4) — "Nile dusk":** the single cool color in the system, reserved for exactly one surface: the featured-project card background. It is what makes that one card read as *the* thing to look at on a page otherwise built from warm tones. If a second element starts using it, the signal is gone — treat that as a bug, not a style choice.
- **Neutral (#F2EEE7) — "Desert paper":** the page background. A half-step warmer and darker than Surface, so cards visibly sit *on* the page rather than blend into it.
- **Surface (#FDFCFB) — "Bone white":** card and elevated-surface fill. Never pure `#FFFFFF` — it carries the same warm bias as every other neutral in the system.
- **On-surface (#1B1712) — "Ink basalt":** body text and headings. A warm near-black, not a true black, so long stretches of body copy don't read as harshly as pure `#000`.
- **Subtle (#F6D9C9) — "Terracotta wash":** a pale tint off the primary ramp, used only as the fill behind skill/tech tags.
- **Border (#E4DED2):** hairline dividers between sections and under the nav.
- **Error (#B23B26):** pulled from the same ramp as primary, one step darker and more saturated — a form error looks like it belongs to this palette, not like a bootstrap red dropped in from elsewhere.

## Typography

Two families plus a monospace for texture, not three competing voices.

**Space Grotesk** carries the display type — the name, section headers, the "Crafting interfaces that…" hero line. It's a geometric grotesk with just enough personality in its lowercase (the squared, slightly mechanical `g` and `a`) to read as confident rather than corporate, without tipping into novelty. Fallback stack: `"Space Grotesk", "Sora", ui-sans-serif, sans-serif`. Open-source (OFL), served via Google Fonts.

**Work Sans** carries body copy, nav labels, and captions. It's a humanist grotesk — rounder, warmer terminals than Space Grotesk — chosen specifically so the two faces don't collapse into "one geometric sans at two sizes." Its job is to disappear behind the content. Fallback stack: `"Work Sans", ui-sans-serif, sans-serif`. Open-source (OFL), served via Google Fonts.

**JetBrains Mono** appears in exactly one place: the tech-stack chips on the project card ("React", "Figma", "TypeScript"). A monospace label on an otherwise all-sans page is a small, deliberate signal that this designer also writes code — it should not spread beyond that one component.

The scale runs 11px → 56px, hand-broken at the top (56px display, not a mechanically-generated next step) so the hero line has real weight against the grid below it. Tracking tightens at display size (−0.03em) and opens up on uppercase labels (+0.1em). Only two weights are used across both sans faces — 400 and 600 — plus one 500 for headline-sm; no third weight is introduced anywhere else.

## Layout

A **12-column bento grid**, 24px gutters, 64px outer margin on desktop, collapsing to a single stacked column below 768px. Cards span uneven widths and heights (1×1 identity card, 2×1 bio card, 2×2 featured project, 1×2 contact rail) rather than a uniform grid of equal tiles — a bento layout where every card is the same size defeats the point of the genre.

Spacing runs on an **8px base**, with a 4px half-step reserved for chip padding only. Body copy (the bio paragraph) is capped at roughly **65 characters** per line even though it sits in a wide card — width and readable measure are treated as separate constraints.

The page is intentionally **asymmetric**: the hero card is left-weighted, the featured-project card is oversized relative to everything around it, and nothing on the page is centered except short standalone labels.

Full page order: **Hero** (bento grid) → **Selected Work** (one case-study block, light) → **What I Do** (dark, four practice-area cards in a 2×2 grid) → **About** (dark, a longer-form bio) → **CTA** (light, one line + one action) → **Footer** (light, three columns). Each dark section opens with an `eyebrow` label ("WHAT I DO", "ABOUT") in the outlined-pill style, signaling a section break without a heavy divider.

## Elevation & Depth

Depth comes primarily from the **tonal step between Neutral (page) and Surface (cards)** — a half-step in lightness, both warm, so a card reads as "a different paper stock" rather than "an object floating above the page." A 1px `border` hairline reinforces card edges where the tonal contrast alone is too subtle (e.g. two adjacent cards of similar size).

Shadow is used sparingly and only on **hover/interactive states** — a soft, warm-tinted shadow (never neutral black), offset downward as if lit from above, appearing only when a card or button is actively engaged. At rest, nothing in the system casts a shadow.

## Shapes

Radius is hierarchical, tied to a card's size and importance: bento cards use **24px** (large, confident, matches their scale), buttons and inputs use **12px**, and tag chips use **full pill (9999px)** — the pill shape is reserved exclusively for chips so it reads as its own category of element, not a smaller version of a card. Nothing in the system uses a radius between 12px and 24px; that gap is deliberate.

## Components

**Buttons.** Primary is a solid `primary` fill with `surface` text, `label-caps` type, uppercase and tracked. Hover darkens to `#7A2812` — no scale, no shadow lift on the button itself. Secondary is `surface` fill with `primary` text and a 1px `border` rule (specified here, not as a token) — used for anything that isn't the page's single main call-to-action (e.g. "View Resume" next to "View Project").

**Bento cards.** `surface` fill, 24px radius, 32px padding. One card per discrete idea — identity, bio, one skill cluster, one project. Never stack unrelated content inside a single card to save space; add a card instead.

**Featured project card (`card-featured`).** The only place `tertiary` appears. Implemented in code as a gradient from `{colors.tertiary}` toward a lighter tint of itself (not a second hue) — the token carries the base color; the gradient softening is a CSS-level detail, not a second token. Reserved for the Coin & Cloth case study, and for exactly one project at a time even if more are added later — a bento grid with two "loud" cards has no focal point.

**Tag chips.** `subtle` fill, `primary` text, full pill, `data-sm` (monospace) type. Used only for skills/tools ("Figma", "React", "Python") — never as a generic label elsewhere on the page.

**Nav.** A `nav-badge` pill (name + role) sits top-left; plain-text nav links sit top-right in `label-caps`, `secondary` at rest and `primary` when active — no underline animation beyond a color change, kept quiet since the page's loudness budget is already spent on the bento cards.

**Eyebrow labels (`eyebrow`).** A small outlined pill introducing a section ("SELECTED WORK", "WHAT I DO", "ABOUT"). In a light section it renders as the `eyebrow` token pair (`surface` fill, `on-surface` text) with a `border` rule; inside a `section-dark`, the same component is re-skinned as transparent with a `surface`-colored 1px border and `surface` text — a border-only pill reads correctly against either background without needing a second token pair, since it never relies on its own fill for contrast.

**Dark sections (`section-dark`) and dark cards (`card-dark`).** Both reuse the `on-surface`/`surface` pairing already established by `tooltip`, just at section scale. Cards inside a dark section are distinguished from the section background by a 1px `surface`-at-10%-opacity border only — there is no separate "dark card fill," because introducing one would mean the system needs a second near-black value, and it doesn't.

**Selected Work.** One case-study block per project, light section: a text card (title, one-line role, short description, year) beside a larger preview panel. The preview is built from the palette's own tones (surface panels, primary/tertiary accents) rather than a literal screenshot when no real product shot exists yet — an honest placeholder in-system beats a borrowed stock image.

**What I Do.** Exactly four `card-dark` tiles in a 2×2 grid, each a number (`01`–`04`), a short title, and one sentence. Four is the limit — a fifth practice area belongs in the About copy, not a fifth card, or the grid stops reading as a deliberate set.

## Do's and Don'ts

- **Do** keep `tertiary` (#5B5EC4) on the featured-project card only. It exists to give the page one focal point; a second use anywhere flattens that hierarchy.
- **Don't** resize every bento card to the same dimensions. Uniform tiles turn this into a generic grid layout and the direction stops being a bento grid at all.
- **Do** use `data-sm` (JetBrains Mono) only for tech-stack chips. It's a texture accent, not a body typeface — if it starts appearing in headings or paragraphs, remove it.
- **Don't** add a drop shadow to a card at rest. Depth comes from the Neutral→Surface tonal step and hairline borders; shadow is reserved for hover only.
- **Do** keep body copy inside its 65-character measure even inside a wide card — add internal padding or a max-width, don't let a paragraph run edge-to-edge.
- **Don't** introduce a third typeface. Space Grotesk (display), Work Sans (body/labels), JetBrains Mono (data only) is the complete set.
- **Do** use warm-tinted neutrals everywhere, including in any exported images or screenshots used on the page. A pure `#FFFFFF` background pasted into a bento card will look visibly wrong next to `{colors.surface}`.
- **Don't** center the hero or bio text. The layout is asymmetric and flush-left by default; centering anything undoes the bento grid's sense of intentional placement.
- **Do** alternate light and dark strictly section-by-section (light, light, dark, dark, light, light). Two dark sections in a row with a light one skipped between them breaks the pacing rhythm the alternation exists to create.
- **Don't** invent a second dark background value. `card-dark` and `section-dark` share the exact same `on-surface` fill; separation comes from a `surface`-at-10% border, never from a lighter or bluer "elevated dark" tone.
