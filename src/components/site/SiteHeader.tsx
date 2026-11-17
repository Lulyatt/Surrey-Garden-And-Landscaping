import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { business } from "@/content/site";
import { Logo } from "./Logo";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/faqs", label: "FAQs" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="hidden bg-primary-deep text-primary-foreground md:block">
        <div className="container-site flex h-9 items-center justify-between text-sm">
          <span className="text-primary-foreground/80">Garden landscaping &amp; maintenance across Surrey</span>
          <a href={business.phoneHref} className="flex items-center gap-2 font-bold hover:text-accent">
            <Phone className="h-3.5 w-3.5" /> {business.phone}
          </a>
        </div>
      </div>
      <div className="container-site flex h-18 items-center justify-between gap-6 py-3">
        <Logo />
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="relative py-2 text-[0.95rem] font-semibold text-foreground/80 transition-colors hover:text-primary data-[status=active]:text-primary after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:bg-accent after:transition-transform hover:after:scale-x-100 data-[status=active]:after:scale-x-100"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild variant="cta" className="hidden h-11 px-5 sm:inline-flex">
            <Link to="/quote">Request a quote</Link>
          </Button>
          <a href={business.phoneHref} className="flex h-11 w-11 items-center justify-center rounded-sm bg-primary text-primary-foreground md:hidden" aria-label={`Call ${business.phone}`}>
            <Phone className="h-5 w-5" />
          </a>
          <button
            className="flex h-11 w-11 items-center justify-center rounded-sm border border-border lg:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div id="mobile-nav" className="fixed inset-x-0 bottom-0 top-[72px] z-40 overflow-y-auto bg-background lg:hidden md:top-[108px]">
          <nav className="container-site flex flex-col py-6" aria-label="Mobile">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: n.to === "/" }}
                className="border-b border-border py-4 font-serif text-2xl text-primary-deep data-[status=active]:text-accent"
              >
                {n.label}
              </Link>
            ))}
            <div className="mt-8 grid gap-3">
              <Button asChild variant="cta" size="xl"><Link to="/quote" onClick={() => setOpen(false)}>Request a free quote</Link></Button>
              <Button asChild variant="line" size="xl"><a href={business.phoneHref}><Phone className="h-4 w-4" /> Call {business.phone}</a></Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
