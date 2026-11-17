import { r as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/@hookform/resolvers+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { u as ChevronsLeftRight } from "../_libs/lucide-react.mjs";
import { n as Layout } from "./Layout-B1o8T_JI.mjs";
import { t as PageHero } from "./PageHero-DFWlattK.mjs";
import { t as CtaBand } from "./CtaBand-B8wlCqY3.mjs";
import { t as Route } from "./projects._slug-D84ayi-E.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projects._slug-_ZoK6Tvw.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function BeforeAfter({ before, after, alt }) {
	const [pos, setPos] = (0, import_react.useState)(50);
	const ref = (0, import_react.useRef)(null);
	const dragging = (0, import_react.useRef)(false);
	const update = (0, import_react.useCallback)((clientX) => {
		const r = ref.current?.getBoundingClientRect();
		if (!r) return;
		setPos(Math.min(100, Math.max(0, (clientX - r.left) / r.width * 100)));
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref,
		className: "relative aspect-[4/3] w-full touch-pan-y select-none overflow-hidden bg-muted",
		onPointerDown: (e) => {
			dragging.current = true;
			e.currentTarget.setPointerCapture(e.pointerId);
			update(e.clientX);
		},
		onPointerMove: (e) => dragging.current && update(e.clientX),
		onPointerUp: () => dragging.current = false,
		onPointerCancel: () => dragging.current = false,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: after,
				alt: `${alt} — after`,
				className: "absolute inset-0 h-full w-full object-cover",
				draggable: false,
				loading: "lazy"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0",
				style: { clipPath: `inset(0 ${100 - pos}% 0 0)` },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: before,
					alt: `${alt} — before`,
					className: "absolute inset-0 h-full w-full object-cover",
					draggable: false,
					loading: "lazy"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute left-3 top-3 bg-primary-deep/85 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary-foreground",
				children: "Before"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute right-3 top-3 bg-accent px-3 py-1 text-xs font-bold uppercase tracking-widest text-accent-foreground",
				children: "After"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute inset-y-0 w-0.5 bg-primary-foreground",
				style: { left: `${pos}%` },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary-foreground text-primary-deep shadow-lg",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronsLeftRight, { className: "h-5 w-5" })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				type: "range",
				min: 0,
				max: 100,
				value: pos,
				onChange: (e) => setPos(Number(e.target.value)),
				"aria-label": "Drag to compare before and after",
				className: "absolute inset-0 h-full w-full cursor-ew-resize opacity-0",
				onPointerDown: (e) => e.stopPropagation()
			})
		]
	});
}
var SplitComponent = () => {
	const p = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Layout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: p.location,
			title: p.title,
			intro: p.summary,
			image: p.image
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-site grid gap-12 py-20 md:grid-cols-[2fr_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-4 text-lg",
				children: p.description.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: d }, d))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "bg-muted p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "eyebrow",
						children: "Work carried out"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 space-y-1",
						children: p.services.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: s }, s))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "eyebrow mt-6",
						children: "Duration"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2",
						children: p.duration
					})
				]
			})]
		}),
		p.beforeAfter && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-site pb-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-6 text-3xl text-primary-deep",
				children: "Before & after"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BeforeAfter, {
				before: p.beforeAfter.before,
				after: p.beforeAfter.after,
				alt: p.title
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-site grid gap-4 pb-20 sm:grid-cols-3",
			children: p.gallery.map((g, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: g,
				alt: `${p.title} photo ${i + 1}`,
				className: "aspect-[4/3] w-full object-cover",
				loading: "lazy"
			}, i))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {})
	] });
};
//#endregion
export { SplitComponent as component };
