import type { ReactNode } from "react";

export function PageHero({ eyebrow, title, intro, image, children }: { eyebrow: string; title: string; intro?: string; image: string; children?: ReactNode }) {
  return (
    <section className="relative isolate overflow-hidden bg-primary-deep">
      <img src={image} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 -z-10 bg-overlay" />
      <div className="container-site py-20 md:py-28">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-4xl leading-tight text-primary-foreground md:text-5xl lg:text-6xl">{title}</h1>
        {intro && <p className="mt-5 max-w-2xl text-lg text-primary-foreground/85">{intro}</p>}
        {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
      </div>
    </section>
  );
}
