import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { business } from "@/content/site";

export function CtaBand({ title = "Thinking about your garden?", text = "Tell us what you have in mind and we'll arrange a visit and a free, no-obligation written quote." }: { title?: string; text?: string }) {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="container-site grid items-center gap-8 py-16 md:grid-cols-[1.4fr_1fr] md:py-20">
        <div>
          <h2 className="text-3xl md:text-4xl">{title}</h2>
          <p className="mt-4 max-w-xl text-primary-foreground/85">{text}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
          <Button asChild variant="cta" size="xl"><Link to="/quote">Request a free quote</Link></Button>
          <Button asChild variant="onDark" size="xl"><a href={business.phoneHref}><Phone className="h-4 w-4" />{business.phone}</a></Button>
        </div>
      </div>
    </section>
  );
}
