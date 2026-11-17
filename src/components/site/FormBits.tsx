import { CheckCircle2, Info } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export const inputCls =
  "w-full rounded-sm border border-input bg-card px-4 py-3 text-base text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/30 aria-[invalid=true]:border-destructive";

export function Field({ id, label, optional, error, hint, children }: { id: string; label: string; optional?: boolean; error?: string; hint?: string; children: ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 flex items-baseline justify-between text-sm font-bold text-primary-deep">
        {label}
        {optional && <span className="text-xs font-normal text-muted-foreground">Optional</span>}
      </label>
      {children}
      {hint && !error && <p className="mt-1.5 text-sm text-muted-foreground">{hint}</p>}
      {error && <p id={`${id}-error`} role="alert" className="mt-1.5 text-sm font-semibold text-destructive">{error}</p>}
    </div>
  );
}

/** Shown on every form until delivery (e.g. Netlify Forms) is configured. */
export function NotConnectedNotice({ className }: { className?: string }) {
  return (
    <div className={cn("flex gap-3 border-l-4 border-accent bg-muted p-4 text-sm text-foreground/85", className)}>
      <Info className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
      <p>
        <strong>Demo form:</strong> validation works, but sending isn't connected yet in this portfolio concept, so
        nothing you enter is delivered or stored.
      </p>
    </div>
  );
}

export function SubmittedState({ title, onReset }: { title: string; onReset: () => void }) {
  return (
    <div role="status" className="border border-success/40 bg-card p-8 text-center">
      <CheckCircle2 className="mx-auto h-10 w-10 text-success" />
      <h3 className="mt-4 text-2xl text-primary-deep">{title}</h3>
      <p className="mx-auto mt-3 max-w-md text-muted-foreground">
        Everything was filled in correctly. Because form delivery isn't connected in this concept, your message has
        <strong> not</strong> been sent — on the live site this is where you'd see confirmation that we've received it.
      </p>
      <button onClick={onReset} className="mt-6 font-bold text-primary underline underline-offset-4 hover:text-accent">
        Start again
      </button>
    </div>
  );
}
