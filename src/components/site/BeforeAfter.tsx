import { useCallback, useRef, useState } from "react";
import { ChevronsLeftRight } from "lucide-react";

export function BeforeAfter({ before, after, alt }: { before: string; after: string; alt: string }) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const update = useCallback((clientX: number) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    setPos(Math.min(100, Math.max(0, ((clientX - r.left) / r.width) * 100)));
  }, []);

  return (
    <div
      ref={ref}
      className="relative aspect-[4/3] w-full touch-pan-y select-none overflow-hidden bg-muted"
      onPointerDown={(e) => { dragging.current = true; e.currentTarget.setPointerCapture(e.pointerId); update(e.clientX); }}
      onPointerMove={(e) => dragging.current && update(e.clientX)}
      onPointerUp={() => (dragging.current = false)}
      onPointerCancel={() => (dragging.current = false)}
    >
      <img src={after} alt={`${alt} — after`} className="absolute inset-0 h-full w-full object-cover" draggable={false} loading="lazy" />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <img src={before} alt={`${alt} — before`} className="absolute inset-0 h-full w-full object-cover" draggable={false} loading="lazy" />
      </div>
      <span className="absolute left-3 top-3 bg-primary-deep/85 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary-foreground">Before</span>
      <span className="absolute right-3 top-3 bg-accent px-3 py-1 text-xs font-bold uppercase tracking-widest text-accent-foreground">After</span>
      <div className="pointer-events-none absolute inset-y-0 w-0.5 bg-primary-foreground" style={{ left: `${pos}%` }}>
        <div className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary-foreground text-primary-deep shadow-lg">
          <ChevronsLeftRight className="h-5 w-5" />
        </div>
      </div>
      <input
        type="range" min={0} max={100} value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label="Drag to compare before and after"
        className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
        onPointerDown={(e) => e.stopPropagation()}
      />
    </div>
  );
}
