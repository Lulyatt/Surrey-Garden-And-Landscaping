import { createFileRoute, notFound } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { getService } from "@/content/site";
export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => { const s = getService(params.slug); if (!s) throw notFound(); return s; },
  head: ({ loaderData }) => ({ meta: [{ title: `${loaderData?.title ?? "Service"} | Surrey Garden & Landscaping` }, { name: "description", content: loaderData?.short ?? "" }, { property: "og:title", content: loaderData?.title ?? "Service" }, { property: "og:description", content: loaderData?.short ?? "" }] }),
  component: () => {
    const s = Route.useLoaderData();
    return (
      <Layout>
        <PageHero eyebrow="Services" title={s.title} intro={s.intro} image={s.image} />
        <div className="container-site grid gap-12 py-20 md:grid-cols-2">
          <div><h2 className="text-2xl text-primary-deep">What's included</h2><ul className="mt-5 space-y-2">{s.includes.map((x) => <li key={x} className="border-b border-border pb-2">{x}</li>)}</ul></div>
          <div><h2 className="text-2xl text-primary-deep">How we work</h2><ol className="mt-5 space-y-5">{s.approach.map((a, i) => <li key={a.title}><h3 className="text-lg">{i + 1}. {a.title}</h3><p className="text-muted-foreground">{a.text}</p></li>)}</ol></div>
        </div>
        <CtaBand />
      </Layout>
    );
  },
});
