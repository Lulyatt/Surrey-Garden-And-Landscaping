import { createFileRoute, notFound } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { CtaBand } from "@/components/site/CtaBand";
import { getProject } from "@/content/site";
export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => { const p = getProject(params.slug); if (!p) throw notFound(); return p; },
  head: ({ loaderData }) => ({ meta: [{ title: `${loaderData?.title ?? "Project"} | Surrey Garden & Landscaping` }, { name: "description", content: loaderData?.summary ?? "" }, { property: "og:title", content: loaderData?.title ?? "Project" }, { property: "og:description", content: loaderData?.summary ?? "" }] }),
  component: () => {
    const p = Route.useLoaderData();
    return (
      <Layout>
        <PageHero eyebrow={p.location} title={p.title} intro={p.summary} image={p.image} />
        <div className="container-site grid gap-12 py-20 md:grid-cols-[2fr_1fr]">
          <div className="space-y-4 text-lg">{p.description.map((d) => <p key={d}>{d}</p>)}</div>
          <aside className="bg-muted p-6"><h2 className="eyebrow">Work carried out</h2><ul className="mt-3 space-y-1">{p.services.map((s) => <li key={s}>{s}</li>)}</ul><h2 className="eyebrow mt-6">Duration</h2><p className="mt-2">{p.duration}</p></aside>
        </div>
        {p.beforeAfter && <div className="container-site pb-16"><h2 className="mb-6 text-3xl text-primary-deep">Before &amp; after</h2><BeforeAfter before={p.beforeAfter.before} after={p.beforeAfter.after} alt={p.title} /></div>}
        <div className="container-site grid gap-4 pb-20 sm:grid-cols-3">{p.gallery.map((g, i) => <img key={i} src={g} alt={`${p.title} photo ${i + 1}`} className="aspect-[4/3] w-full object-cover" loading="lazy" />)}</div>
        <CtaBand />
      </Layout>
    );
  },
});
