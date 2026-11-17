import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { QuoteForm } from "@/components/site/QuoteForm";
import { images } from "@/content/site";
export const Route = createFileRoute("/quote")({
  head: () => ({ meta: [{ title: "Request a Quote | Surrey Garden & Landscaping" }, { name: "description", content: "Request a free, no-obligation garden landscaping quote in Surrey." }, { property: "og:title", content: "Request a Quote | Surrey Garden & Landscaping" }, { property: "og:description", content: "Request a free, no-obligation garden landscaping quote in Surrey." }] }),
  component: () => (
    <Layout>
      <PageHero eyebrow="Free quote" title="Request a quote" intro="Tell us about your garden and we'll arrange a visit." image={images.hero} />
      <div className="container-site max-w-3xl py-20"><QuoteForm /></div>
    </Layout>
  ),
});
