import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/site/Layout";
import { CtaBand } from "@/components/site/CtaBand";
import { ProjectCard } from "@/components/site/ProjectCard";
import { Reveal } from "@/components/site/Reveal";
import { business, images, projects, services, serviceAreas, testimonials, trustPoints } from "@/content/site";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title: "Garden Landscaping in Surrey | Surrey Garden & Landscaping" }, { name: "description", content: "Patios, fencing, decking, lawns and garden transformations across Surrey from a small, established local team." }, { property: "og:title", content: "Garden Landscaping in Surrey | Surrey Garden & Landscaping" }, { property: "og:description", content: "Patios, fencing, decking, lawns and garden transformations across Surrey from a small, established local team." }] }),
  component: Home,
});

function Home() {
  return (
    <Layout>
      <section className="relative isolate overflow-hidden bg-primary-deep">
        <img src={images.hero} alt="Finished Surrey garden with sandstone patio and lawn" className="absolute inset-0 -z-10 h-full w-full object-cover" width={1920} height={1088} />
        <div className="absolute inset-0 -z-10 bg-overlay" />
        <div className="container-site py-24 md:py-36">
          <p className="eyebrow">Established local landscapers · Surrey</p>
          <h1 className="mt-4 max-w-3xl text-4xl leading-tight text-primary-foreground md:text-6xl">Gardens built properly, by people who care about them.</h1>
          <p className="mt-6 max-w-xl text-lg text-primary-foreground/85">Patios, fencing, decking, lawns and complete garden transformations for homeowners across Surrey.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="cta" size="xl"><Link to="/quote">Request a free quote</Link></Button>
            <Button asChild variant="onDark" size="xl"><a href={business.phoneHref}><Phone className="h-4 w-4" />{business.phone}</a></Button>
          </div>
        </div>
      </section>
      <section className="container-site grid items-center gap-12 py-20 md:grid-cols-2">
        <Reveal><p className="eyebrow">About us</p><h2 className="mt-3 text-3xl text-primary-deep md:text-4xl">A small team, doing careful work since {business.established}.</h2>
          <p className="mt-5 text-muted-foreground">We're a local landscaping business, not a national contractor. The same small team visits, quotes and carries out your project, so you always know who's in your garden.</p></Reveal>
        <Reveal delay={150}><img src={images.maintenance} alt="Gardener trimming a hedge" className="aspect-[4/3] w-full object-cover" loading="lazy" /></Reveal>
      </section>
      <section className="texture-paper py-20"><div className="container-site">
        <p className="eyebrow">What we do</p><h2 className="mt-3 text-3xl text-primary-deep md:text-4xl">Our services</h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">{services.map((s) => (
          <Link key={s.slug} to="/services/$slug" params={{ slug: s.slug }} className="group block bg-card">
            <div className="img-zoom aspect-[3/2]"><img src={s.image} alt={s.title} className="h-full w-full object-cover" loading="lazy" /></div>
            <div className="p-6"><h3 className="text-xl text-primary-deep">{s.title}</h3><p className="mt-2 text-muted-foreground">{s.short}</p></div>
          </Link>))}</div>
      </div></section>
      <section className="container-site py-20">
        <div className="flex flex-wrap items-end justify-between gap-4"><div><p className="eyebrow">Recent work</p><h2 className="mt-3 text-3xl text-primary-deep md:text-4xl">Featured projects</h2></div>
          <Button asChild variant="line"><Link to="/projects">All projects</Link></Button></div>
        <div className="mt-10 grid gap-10 md:grid-cols-3">{projects.filter((p) => p.featured).map((p) => <ProjectCard key={p.slug} project={p} />)}</div>
      </section>
      <section className="bg-secondary py-20"><div className="container-site">
        <p className="eyebrow">Kind words</p><h2 className="mt-3 text-3xl text-primary-deep md:text-4xl">What customers say</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">{testimonials.map((t) => (
          <figure key={t.name} className="border-t-2 border-accent pt-6"><blockquote className="font-serif text-lg text-primary-deep">“{t.quote}”</blockquote>
            <figcaption className="mt-4 text-sm text-muted-foreground"><strong className="text-foreground">{t.name}</strong>, {t.location} · {t.project}</figcaption></figure>))}</div>
        <p className="mt-8 text-xs text-muted-foreground">Illustrative testimonials for a portfolio concept.</p>
      </div></section>
      <section className="container-site grid gap-12 py-20 md:grid-cols-2">
        <div><p className="eyebrow">Peace of mind</p><ul className="mt-6 space-y-5">{trustPoints.map((t) => <li key={t.title}><h3 className="text-lg text-primary-deep">{t.title}</h3><p className="text-muted-foreground">{t.text}</p></li>)}</ul></div>
        <div><p className="eyebrow">Where we work</p><h2 className="mt-3 text-3xl text-primary-deep">Across Surrey</h2><p className="mt-4 text-muted-foreground">{serviceAreas.join(" · ")}</p></div>
      </section>
      <CtaBand />
    </Layout>
  );
}
