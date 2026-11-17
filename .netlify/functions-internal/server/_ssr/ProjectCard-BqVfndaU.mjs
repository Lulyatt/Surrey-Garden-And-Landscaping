import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { f as ArrowRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ProjectCard-BqVfndaU.js
var import_jsx_runtime = require_jsx_runtime();
function ProjectCard({ project, tall = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/projects/$slug",
		params: { slug: project.slug },
		className: "group block",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `img-zoom relative bg-muted ${tall ? "aspect-[4/5]" : "aspect-[4/3]"}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: project.image,
					alt: project.title,
					className: "h-full w-full object-cover",
					loading: "lazy",
					width: 1280,
					height: 960
				}), project.beforeAfter && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute left-3 top-3 bg-accent px-2.5 py-1 text-[0.7rem] font-bold uppercase tracking-widest text-accent-foreground",
					children: "Before & after"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow mt-4",
				children: project.location
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
				className: "mt-1.5 flex items-center gap-2 text-xl text-primary-deep",
				children: [project.title, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-muted-foreground",
				children: project.summary
			})
		]
	});
}
//#endregion
export { ProjectCard as t };
