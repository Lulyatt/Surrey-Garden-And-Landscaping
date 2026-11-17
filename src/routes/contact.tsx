import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { Button } from "@/components/ui/button";
import { business, images, serviceAreas } from "@/content/site";
export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact | Surrey Garden & Landscaping" }, { name: "description", content: "Call, email or send an enquiry to Surrey Garden & Landscaping." }, { property: "og:title", content: "Contact | Surrey Garden & Landscaping" }, { property: "og:description", content: "Call, email or send an enquiry to Surrey Garden & Landscaping." }] }),
  component: () => (
    <Layout>
      <PageHero eyebrow="Contact" title="Get in touch" image={images.decking} />
      <div className="container-site grid gap-12 py-20 lg:grid-cols-[1fr_1.4fr]">
        <div className="space-y-8">
          <div><h2 className="eyebrow">Phone</h2><a href={business.phoneHref} className="mt-2 block font-serif text-3xl text-primary-deep hover:text-accent">{business.phone}</a></div>
          <div><h2 className="eyebrow">Email</h2><a href={`mailto:${business.email}`} className="mt-2 block break-all text-primary underline">{business.email}</a></div>
          <div><h2 className="eyebrow">Opening hours</h2><ul className="mt-2">{business.hours.map((h) => <li key={h.days} className="flex justify-between border-b border-border py-2"><span>{h.days}</span><span>{h.time}</span></li>)}</ul></div>
          <div><h2 className="eyebrow">Areas we cover</h2><p className="mt-2 text-muted-foreground">{serviceAreas.join(" · ")}</p></div>
          <Button asChild variant="cta" size="xl"><Link to="/quote">Request a quote instead</Link></Button>
        </div>
        <div><h2 className="mb-6 text-3xl text-primary-deep">General enquiry</h2><EnquiryForm /></div>
      </div>
    </Layout>
  ),
});
