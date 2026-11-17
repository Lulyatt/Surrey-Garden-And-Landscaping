import { t as business } from "./site-RebzGCaq.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as Phone } from "../_libs/lucide-react.mjs";
import { t as Button } from "./Layout-B1o8T_JI.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/CtaBand-B8wlCqY3.js
var import_jsx_runtime = require_jsx_runtime();
function CtaBand({ title = "Thinking about your garden?", text = "Tell us what you have in mind and we'll arrange a visit and a free, no-obligation written quote." }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-primary text-primary-foreground",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-site grid items-center gap-8 py-16 md:grid-cols-[1.4fr_1fr] md:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-3xl md:text-4xl",
				children: title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-xl text-primary-foreground/85",
				children: text
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-3 sm:flex-row md:justify-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "cta",
					size: "xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/quote",
						children: "Request a free quote"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "onDark",
					size: "xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: business.phoneHref,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" }), business.phone]
					})
				})]
			})]
		})
	});
}
//#endregion
export { CtaBand as t };
