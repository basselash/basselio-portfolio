import type { Project } from "@/data/projects";
import { ProjectImage } from "./ProjectImage";
import { ProjectVideo } from "./ProjectVideo";

const label = "text-[11px] font-medium uppercase tracking-[0.1em]";

const SPAN_CLASS: Record<Project["size"], string> = {
  featured: "md:col-span-12",
  large: "md:col-span-8",
  medium: "md:col-span-6",
};

export function ProjectCard({ project }: { project: Project }) {
  const { theme } = project;

  return (
    <article
      className={`group col-span-1 overflow-hidden rounded-lg transition-transform duration-300 ease-out hover:-translate-y-1 ${SPAN_CLASS[project.size]}`}
      style={{ backgroundColor: theme.background, color: theme.text }}
    >
      <div className="p-6 pb-0 md:p-8 md:pb-0">
        <p className={label} style={{ color: theme.accent }}>
          {project.category}
        </p>
        <h3
          className="mt-2 text-3xl font-semibold md:text-4xl"
          style={{
            fontFamily: theme.fontDisplay,
            fontVariationSettings: "'WONK' 1",
          }}
        >
          {project.title}
        </h3>
      </div>

      {project.hero && (
        <div className="mt-6 overflow-hidden">
          <div className="aspect-[16/9] w-full transition-transform duration-500 ease-out group-hover:scale-[1.02]">
            <ProjectImage image={project.hero} theme={theme} large scrollOnHover />
          </div>
        </div>
      )}

      {project.gallery && project.gallery.length > 0 && (
        <div
          className="grid grid-cols-3 gap-px"
          style={{ backgroundColor: `${theme.textMuted}26` }}
        >
          {project.gallery.map((shot) => (
            <div key={shot.key} className="relative aspect-square overflow-hidden">
              <ProjectImage image={shot} theme={theme} />
              <span
                className={`${label} pointer-events-none absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-black/70 to-transparent px-2 pb-2 pt-6 text-white opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100`}
              >
                {shot.label}
              </span>
            </div>
          ))}
        </div>
      )}

      {project.video && (
        <div
          className="relative w-full overflow-hidden"
          style={{
            aspectRatio: project.video.aspectRatio ?? "16/9",
            marginTop: project.gallery ? 1 : 0,
          }}
        >
          <ProjectVideo video={project.video} theme={theme} />
          <span
            className={`${label} pointer-events-none absolute left-4 top-4 flex items-center gap-1.5 rounded-full px-3 py-1.5`}
            style={{ backgroundColor: `${theme.background}CC`, color: theme.text }}
          >
            <svg width="8" height="8" viewBox="0 0 8 8" fill="currentColor">
              <path d="M1 0.5L7 4L1 7.5V0.5Z" />
            </svg>
            {project.video.label}
          </span>
        </div>
      )}

      <div className="flex flex-col gap-4 p-6 md:p-8">
        <p className="leading-relaxed" style={{ color: theme.textMuted }}>
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border px-3 py-1 text-xs"
              style={{ borderColor: theme.accent, color: theme.accent }}
            >
              {tag}
            </span>
          ))}
        </div>

        <div
          className="mt-2 grid grid-cols-2 gap-4 border-t pt-4"
          style={{ borderColor: `${theme.textMuted}33` }}
        >
          <div>
            <span className={label} style={{ color: theme.textMuted }}>
              Role
            </span>
            <p className="mt-1">{project.role}</p>
          </div>
          <div>
            <span className={label} style={{ color: theme.textMuted }}>
              Tool
            </span>
            <p className="mt-1">{project.tool}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
