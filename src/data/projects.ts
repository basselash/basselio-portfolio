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
    // Real palette and headline typeface, read directly from the actual
    // Coin & Cloth design (github.com/basselash/basselio-portfolio →
    // shared via a Claude Design artifact): a deep wine/maroon ground,
    // warm cream type, and an amber accent on CTAs. Fredoka matches the
    // rounded display face used for headlines in the real design.
    theme: {
      background: "#2B0E17",
      surface: "#3A1420",
      text: "#F5ECE1",
      textMuted: "#C7A69B",
      accent: "#EFA83C",
      fontDisplay: "var(--font-fredoka), sans-serif",
    },
    // Every path below is a placeholder location, not a real asset — see
    // public/images/projects/coin-cloth/README.md for exactly what to drop
    // in and where. Nothing here is a fabricated screenshot.
    logo: {
      src: "/images/projects/coin-cloth/logo.svg",
      alt: "Coin & Cloth logo",
    },
    hero: {
      key: "home",
      label: "Homepage",
      src: "/images/projects/coin-cloth/home.png",
      alt: "Coin & Cloth homepage design",
    },
    gallery: [
      {
        key: "brands",
        label: "Brands",
        src: "/images/projects/coin-cloth/brands.png",
        alt: "Coin & Cloth brand discovery screen",
      },
      {
        key: "arcade",
        label: "Arcade",
        src: "/images/projects/coin-cloth/arcade.png",
        alt: "Coin & Cloth arcade section",
      },
      {
        key: "threesixty",
        label: "360° Experience",
        src: "/images/projects/coin-cloth/360.png",
        alt: "Coin & Cloth 360° store preview",
      },
    ],
    video: {
      src: "/videos/coin-cloth-demo.mp4",
      poster: "/videos/coin-cloth-poster.jpg",
      label: "Website walkthrough",
    },
  },
];
