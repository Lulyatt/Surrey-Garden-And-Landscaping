import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PageHero-DFWlattK.js
var import_jsx_runtime = require_jsx_runtime();
function PageHero({ eyebrow, title, intro, image, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative isolate overflow-hidden bg-primary-deep",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: image,
				alt: "",
				className: "absolute inset-0 -z-10 h-full w-full object-cover",
				width: 1920,
				height: 1080
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -z-10 bg-overlay" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-site py-20 md:py-28",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: eyebrow
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 max-w-3xl text-4xl leading-tight text-primary-foreground md:text-5xl lg:text-6xl",
						children: title
					}),
					intro && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-2xl text-lg text-primary-foreground/85",
						children: intro
					}),
					children && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 flex flex-wrap gap-3",
						children
					})
				]
			})
		]
	});
}
//#endregion
export { PageHero as t };
