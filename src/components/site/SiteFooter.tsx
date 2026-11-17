import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";
import { business, serviceAreas, services } from "@/content/site";
import { Logo } from "./Logo";

export function SiteFooter() {
  return (
    <footer className="bg-primary-deep text-primary-foreground">
      <div className="container-site grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
        <div>
          <Logo inverted />
          <p className="mt-5 max-w-xs text-primary-foreground/75">
            A small, local team designing, building and looking after gardens across Surrey.
          </p>
          <div className="mt-6 flex gap-3">
            <a href={business.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/30 transition-colors hover:bg-accent hover:text-accent-foreground hover:border-accent">
              <Facebook className="h-4 w-4" />
            </a>
            <a href={business.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/30 transition-colors hover:bg-accent hover:text-accent-foreground hover:border-accent">
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div>
          <h2 className="eyebrow">Services</h2>
          <ul className="mt-4 space-y-2.5">
            {services.map((s) => (
              <li key={s.slug}>
                <Link to="/services/$slug" params={{ slug: s.slug }} className="text-primary-foreground/80 hover:text-primary-foreground hover:underline underline-offset-4">{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="eyebrow">Explore</h2>
          <ul className="mt-4 space-y-2.5">
            {([["/projects", "Our projects"], ["/faqs", "FAQs"], ["/contact", "Contact us"], ["/quote", "Request a quote"]] as const).map(([to, l]) => (
              <li key={to}><Link to={to} className="text-primary-foreground/80 hover:text-primary-foreground hover:underline underline-offset-4">{l}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="eyebrow">Get in touch</h2>
          <a href={business.phoneHref} className="mt-4 flex items-center gap-2 font-serif text-xl hover:text-accent"><Phone className="h-4 w-4" />{business.phone}</a>
          <a href={`mailto:${business.email}`} className="mt-2 flex items-center gap-2 break-all text-primary-foreground/80 hover:text-primary-foreground"><Mail className="h-4 w-4 shrink-0" />{business.email}</a>
          <p className="mt-5 text-sm text-primary-foreground/65">Covering {serviceAreas.slice(0, 6).join(", ")} and surrounding areas.</p>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15">
        <div className="container-site flex flex-col gap-2 py-6 text-xs text-primary-foreground/60 md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} {business.name}</p>
          <p>Portfolio concept: business details, projects, reviews and accreditations shown are illustrative.</p>
        </div>
      </div>
    </footer>
  );
}
