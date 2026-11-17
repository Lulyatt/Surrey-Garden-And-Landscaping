import { a as images, o as projects } from "./site-RebzGCaq.mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as Layout } from "./Layout-B1o8T_JI.mjs";
import { t as PageHero } from "./PageHero-DFWlattK.mjs";
import { t as CtaBand } from "./CtaBand-B8wlCqY3.mjs";
import { t as ProjectCard } from "./ProjectCard-BqVfndaU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projects.index-CigyULyn.js
var import_jsx_runtime = require_jsx_runtime();
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Layout, { children: [
	/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Our work",
		title: "Recent projects",
		intro: "A selection of gardens we've worked on around Surrey.",
		image: images.after
	}),
	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "container-site grid gap-10 py-20 sm:grid-cols-2 lg:grid-cols-3",
		children: projects.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectCard, { project: p }, p.slug))
	}),
	/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {})
] });
//#endregion
export { SplitComponent as component };
