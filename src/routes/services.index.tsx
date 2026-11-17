import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { images, services } from "@/content/site";
export const Route = createFileRoute("/services/")({
  head: () => ({ meta: [{ title: "Services | Surrey Garden & Landscaping" }, { name: "description", content: "Garden transformations, patios, fencing, decking, lawns and maintenance across Surrey." }, { property: "og:title", content: "Services | Surrey Garden & Landscaping" }, { property: "og:description", content: "Garden transformations, patios, fencing, decking, lawns and maintenance across Surrey." }] }),
  component: () => (
    <Layout>
      <PageHero eyebrow="Services" title="Landscaping and garden care" intro="From a new fence to a complete garden transformation." image={images.patio} />
      <div className="container-site space-y-16 py-20">{services.map((s, i) => (
        <div key={s.slug} className="grid items-center gap-8 md:grid-cols-2">
          <img src={s.image} alt={s.title} className={`aspect-[4/3] w-full object-cover ${i % 2 ? "md:order-2" : ""}`} loading="lazy" />
          <div><h2 className="text-3xl text-primary-deep">{s.title}</h2><p className="mt-4 text-muted-foreground">{s.intro}</p>
            <Link to="/services/$slug" params={{ slug: s.slug }} className="mt-5 inline-block font-bold text-primary underline underline-offset-4">More about {s.title.toLowerCase()}</Link></div>
        </div>))}</div>
      <CtaBand />
    </Layout>
  ),
});
