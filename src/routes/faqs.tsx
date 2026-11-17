import { createFileRoute } from "@tanstack/react-router";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { faqs, images } from "@/content/site";
export const Route = createFileRoute("/faqs")({
  head: () => ({ meta: [{ title: "FAQs | Surrey Garden & Landscaping" }, { name: "description", content: "Answers about quotes, payments, materials and timescales for garden projects in Surrey." }, { property: "og:title", content: "FAQs | Surrey Garden & Landscaping" }, { property: "og:description", content: "Answers about quotes, payments, materials and timescales for garden projects in Surrey." }] }),
  component: () => (
    <Layout>
      <PageHero eyebrow="FAQs" title="Common questions" image={images.lawn} />
      <div className="container-site max-w-3xl py-20"><Accordion type="single" collapsible>{faqs.map((f, i) => (
        <AccordionItem key={f.q} value={String(i)}><AccordionTrigger className="text-left font-serif text-lg">{f.q}</AccordionTrigger><AccordionContent className="text-base text-muted-foreground">{f.a}</AccordionContent></AccordionItem>))}</Accordion></div>
      <CtaBand />
    </Layout>
  ),
});
