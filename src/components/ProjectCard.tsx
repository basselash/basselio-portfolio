import type { Project } from "@/data/projects";
import { ProjectVideo } from "./ProjectVideo";

const label = "text-[11px] font-medium uppercase tracking-[0.1em]";

export function ProjectCard({ project }: { project: Project }) {
  const { theme } = project;

  return (
    <div
      className="group grid grid-cols-1 overflow-hidden rounded-lg transition-transform duration-300 ease-out hover:-translate-y-1 md:grid-cols-5"
      style={{ backgroundColor: theme.background, color: theme.text }}
    >
      <div className="overflow-hidden md:col-span-3">
        <div className="h-full w-full transition-transform duration-500 ease-out group-hover:scale-[1.04]">
          <ProjectVideo preview={project.preview} theme={theme} label={project.title} />
        </div>
      </div>

      <div className="flex flex-col justify-center gap-4 p-8 md:col-span-2">
        <div>
          <h3
            className="text-2xl font-semibold md:text-3xl"
            style={{ fontFamily: theme.fontDisplay }}
          >
            {project.title}
          </h3>
          <p className={`${label} mt-2`} style={{ color: theme.textMuted }}>
            {project.tagline}
          </p>
        </div>

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
    </div>
  );
}
