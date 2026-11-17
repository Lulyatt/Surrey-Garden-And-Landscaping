import { a as images, c as services } from "./site-RebzGCaq.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as Layout } from "./Layout-B1o8T_JI.mjs";
import { t as PageHero } from "./PageHero-DFWlattK.mjs";
import { t as CtaBand } from "./CtaBand-B8wlCqY3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services.index-Dij7qdhq.js
var import_jsx_runtime = require_jsx_runtime();
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Layout, { children: [
	/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Services",
		title: "Landscaping and garden care",
		intro: "From a new fence to a complete garden transformation.",
		image: images.patio
	}),
	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "container-site space-y-16 py-20",
		children: services.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid items-center gap-8 md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: s.image,
				alt: s.title,
				className: `aspect-[4/3] w-full object-cover ${i % 2 ? "md:order-2" : ""}`,
				loading: "lazy"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl text-primary-deep",
					children: s.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-muted-foreground",
					children: s.intro
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/services/$slug",
					params: { slug: s.slug },
					className: "mt-5 inline-block font-bold text-primary underline underline-offset-4",
					children: ["More about ", s.title.toLowerCase()]
				})
			] })]
		}, s.slug))
	}),
	/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {})
] });
//#endregion
export { SplitComponent as component };
