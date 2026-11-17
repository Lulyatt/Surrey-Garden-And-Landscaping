import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/content/site";

export function ProjectCard({ project, tall = false }: { project: Project; tall?: boolean }) {
  return (
    <Link to="/projects/$slug" params={{ slug: project.slug }} className="group block">
      <div className={`img-zoom relative bg-muted ${tall ? "aspect-[4/5]" : "aspect-[4/3]"}`}>
        <img src={project.image} alt={project.title} className="h-full w-full object-cover" loading="lazy" width={1280} height={960} />
        {project.beforeAfter && (
          <span className="absolute left-3 top-3 bg-accent px-2.5 py-1 text-[0.7rem] font-bold uppercase tracking-widest text-accent-foreground">Before &amp; after</span>
        )}
      </div>
      <p className="eyebrow mt-4">{project.location}</p>
      <h3 className="mt-1.5 flex items-center gap-2 text-xl text-primary-deep">
        {project.title}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </h3>
      <p className="mt-2 text-muted-foreground">{project.summary}</p>
    </Link>
  );
}
