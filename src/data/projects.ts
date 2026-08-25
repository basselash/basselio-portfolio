// Each project owns its own visual identity (theme/preview) so a project
// card looks like the actual project, not a re-skinned template. The
// portfolio-level system (grid, spacing, nav, section rhythm) stays fixed;
// only what's declared here varies per project.

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

export type ProjectPreview =
  | { type: "video"; src: string; poster?: string }
  | { type: "image"; src: string }
  | { type: "placeholder" };

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  role: string;
  tool: string;
  tags: string[];
  theme: ProjectTheme;
  preview: ProjectPreview;
};

export const PROJECTS: Project[] = [
  {
    slug: "coin-and-cloth",
    title: "Coin & Cloth",
    tagline: "Clothing & Accessories Store — UI/UX Case Study",
    description:
      "A full UI/UX design for an e-commerce concept selling clothing and accessories — product browsing, cart, and checkout flows designed end-to-end in Figma.",
    role: "UI/UX Design",
    tool: "Figma",
    tags: ["UI/UX Design", "E-Commerce", "Figma"],
    // Placeholder brand palette standing in for Coin & Cloth's own visual
    // identity — a warm boutique black/cream/brass system suited to a
    // clothing & accessories store. Replace with the real values sampled
    // from the Coin & Cloth Figma file once available.
    theme: {
      background: "#17130F",
      surface: "#241E19",
      text: "#F3ECE3",
      textMuted: "#B8AA98",
      accent: "#C7A567",
      fontDisplay: "var(--font-fraunces), Georgia, serif",
    },
    // Drop the real screen-recording at public/videos/coin-cloth-demo.mp4
    // (scrolling through the designed pages, moving between sections) and
    // this card will pick it up automatically. Until that file exists,
    // ProjectVideo renders an honest "preview coming soon" placeholder
    // instead of a broken video or a fake screenshot.
    preview: {
      type: "video",
      src: "/videos/coin-cloth-demo.mp4",
      poster: "/videos/coin-cloth-poster.jpg",
    },
  },
];
