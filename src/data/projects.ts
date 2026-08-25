// Each project owns its own visual identity (theme + actual assets) so a
// project card looks like a window into that project, not a re-skinned
// template. The portfolio-level system (grid, spacing, nav, section
// rhythm) stays fixed; everything declared here is project-specific.

export type ProjectTheme = {
  /** Card background — the project's own dominant surface color. */
  background: string;
  /** A secondary surface tone within the card (e.g. placeholder panels). */
  surface: string;
  /** Primary text color against `background`. */
  text: string;
  /** Muted/secondary text color against `background`. */
  textMuted: string;
  /** The project's own accent color — tags, borders, small details. */
  accent: string;
  /** CSS font-family stack for the project title, distinct per project. */
  fontDisplay: string;
};

/** One named visual slot — a real screenshot once provided, an honest
 * labeled placeholder until then. Never a fabricated image. */
export type ProjectImageSlot = {
  key: string;
  label: string;
  src: string;
  alt: string;
};

export type ProjectVideoAsset = {
  src: string;
  poster?: string;
  label: string;
  /** CSS aspect-ratio (e.g. "16/9", "8/5") matching the source recording's
   * actual dimensions, so object-cover doesn't crop into the frame.
   * Defaults to "16/9" if omitted. */
  aspectRatio?: string;
};

/** How much editorial space a project gets in the Selected Work grid. */
export type ProjectSize = "featured" | "large" | "medium";

export type Project = {
  slug: string;
  title: string;
  /** Short, factual category — what the thing actually is, not a generic label. */
  category: string;
  description: string;
  role: string;
  tool: string;
  tags: string[];
  size: ProjectSize;
  theme: ProjectTheme;
  logo?: { src: string; alt: string };
  /** The large primary visual — usually the homepage/landing screen. */
  hero?: ProjectImageSlot;
  /** Smaller supporting screens shown alongside the hero. */
  gallery?: ProjectImageSlot[];
  /** A walkthrough recording of the actual design being browsed. */
  video?: ProjectVideoAsset;
};

export const PROJECTS: Project[] = [
  {
    slug: "coin-and-cloth",
    title: "Coin & Cloth",
    // Coin & Cloth is a discovery website for a physical retail space —
    // "a curated retail destination in Cairo," in the site's own words —
    // not a store to buy from online. It exists to make people want to
    // visit in person.
    category: "Curated Retail & Arcade",
    description:
      "A discovery website for Coin & Cloth — five spaces under one roof in Cairo: a fashion floor, an artist floor, an arcade, a community hub, and a platform for local brands. Built to get people excited to visit in person, not to sell to them online.",
    role: "UI/UX Design",
    tool: "Figma",
    tags: ["Fashion Floor", "Arcade", "Local Brands", "Community Hub"],
    size: "featured",
    // Exact brand hexes, straight from Coin & Cloth's own DESIGN.md (sampled
    // directly from the logo): burgundy #50182A, cream #F6E5DC, gold
    // #F9BA19. This is the project's real dark-mode assignment — page
    // background becomes the logo's burgundy field, text becomes its cream.
    // fontDisplay is the real face too: Fraunces, run with its WONK axis
    // engaged (see the title's fontVariationSettings in ProjectCard) to
    // match the logo's own hand-drawn, slightly irregular lettering.
    theme: {
      background: "#50182A",
      surface: "#6F2436",
      text: "#F6E5DC",
      textMuted: "#D9BBAE",
      accent: "#F9BA19",
      fontDisplay: "var(--font-fraunces), Georgia, serif",
    },
    logo: {
      src: "/images/projects/coin-cloth/logo.svg",
      alt: "Coin & Cloth logo",
    },
    // Hero/gallery screenshots were tried and dropped by request — the
    // video walkthrough alone carries the card now. The types/fields
    // still exist on Project so they (or a future project) can use them
    // again without any component changes.
    video: {
      src: "/videos/coin-cloth-demo.mp4",
      poster: "/videos/coin-cloth-poster.jpg",
      label: "Website walkthrough",
      // Real recording is 2880x1800 (converted to 1280x800) — 8:5, not the
      // 16:9 a generic video container would assume.
      aspectRatio: "8/5",
    },
  },
];
