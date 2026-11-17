import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { ProjectCard } from "@/components/site/ProjectCard";
import { CtaBand } from "@/components/site/CtaBand";
import { images, projects } from "@/content/site";
export const Route = createFileRoute("/projects/")({
  head: () => ({ meta: [{ title: "Projects | Surrey Garden & Landscaping" }, { name: "description", content: "Completed gardens, patios, decking and fencing projects across Surrey." }, { property: "og:title", content: "Projects | Surrey Garden & Landscaping" }, { property: "og:description", content: "Completed gardens, patios, decking and fencing projects across Surrey." }] }),
  component: () => (
    <Layout>
      <PageHero eyebrow="Our work" title="Recent projects" intro="A selection of gardens we've worked on around Surrey." image={images.after} />
      <div className="container-site grid gap-10 py-20 sm:grid-cols-2 lg:grid-cols-3">{projects.map((p) => <ProjectCard key={p.slug} project={p} />)}</div>
      <CtaBand />
    </Layout>
  ),
});
