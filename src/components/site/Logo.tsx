import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link to="/" className="group flex items-center gap-3" aria-label="Surrey Garden & Landscaping — home">
      <svg viewBox="0 0 40 40" className={cn("h-10 w-10 shrink-0", inverted ? "text-primary-foreground" : "text-primary")} aria-hidden>
        <circle cx="20" cy="20" r="19" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M20 31V15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M20 22c-5 0-8-3-8-8 5 0 8 3 8 8Z" fill="currentColor" />
        <path d="M20 18c4 0 7-2.5 7-7-4 0-7 2.5-7 7Z" className="fill-accent" />
        <path d="M11 31h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
      <span className="leading-none">
        <span className={cn("block font-serif text-[1.05rem] font-bold", inverted ? "text-primary-foreground" : "text-primary-deep")}>
          Surrey Garden
        </span>
        <span className={cn("mt-1 block text-[0.68rem] font-bold uppercase tracking-[0.2em]", inverted ? "text-primary-foreground/75" : "text-muted-foreground")}>
          &amp; Landscaping
        </span>
      </span>
    </Link>
  );
}
