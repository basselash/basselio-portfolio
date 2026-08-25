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
    // not a store to buy from online. It exists to make people want to
    // visit in person.
    category: "Retail Discovery Website",
    description:
      "A website designed to introduce people to the physical Coin & Cloth store — a space featuring multiple fashion brands, an arcade, and a 360° experience — and make them want to visit. Not a shop; a preview of a place.",
    role: "UI/UX Design",
    tool: "Figma",
    tags: ["Retail Experience", "Multi-Brand", "Arcade", "360° Experience"],
    size: "featured",
    // Placeholder brand palette standing in for Coin & Cloth's own visual
    // identity — a warm boutique black/cream/brass system suited to a
    // physical fashion-and-entertainment space. Replace with the real
    // values sampled from the Coin & Cloth Figma file once available.
    theme: {
      background: "#17130F",
      surface: "#241E19",
      text: "#F3ECE3",
      textMuted: "#B8AA98",
      accent: "#C7A567",
      fontDisplay: "var(--font-fraunces), Georgia, serif",
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
