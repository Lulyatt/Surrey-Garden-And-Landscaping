import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as Layout } from "./Layout-B1o8T_JI.mjs";
import { t as PageHero } from "./PageHero-DFWlattK.mjs";
import { t as CtaBand } from "./CtaBand-B8wlCqY3.mjs";
import { t as Route } from "./services._slug-CTPEAw9c.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services._slug-DIVc9tg4.js
var import_jsx_runtime = require_jsx_runtime();
var SplitComponent = () => {
	const s = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Layout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Services",
			title: s.title,
			intro: s.intro,
			image: s.image
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-site grid gap-12 py-20 md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-2xl text-primary-deep",
				children: "What's included"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-5 space-y-2",
				children: s.includes.map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "border-b border-border pb-2",
					children: x
				}, x))
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-2xl text-primary-deep",
				children: "How we work"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-5 space-y-5",
				children: s.approach.map((a, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
					className: "text-lg",
					children: [
						i + 1,
						". ",
						a.title
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground",
					children: a.text
				})] }, a.title))
			})] })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {})
	] });
};
//#endregion
export { SplitComponent as component };
