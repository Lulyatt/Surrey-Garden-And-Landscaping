import { r as __toESM } from "../_runtime.mjs";
import { a as images, n as faqs } from "./site-RebzGCaq.mjs";
import { r as require_react } from "../_libs/@hookform/resolvers+[...].mjs";
import { a as AccordionTrigger$1, c as require_jsx_runtime, i as AccordionItem$1, n as AccordionContent$1, r as AccordionHeader, t as Accordion$1 } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { d as ChevronDown } from "../_libs/lucide-react.mjs";
import { n as Layout, r as cn } from "./Layout-B1o8T_JI.mjs";
import { t as PageHero } from "./PageHero-DFWlattK.mjs";
import { t as CtaBand } from "./CtaBand-B8wlCqY3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/faqs-BdJYJwwe.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Accordion = Accordion$1;
var AccordionItem = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionItem$1, {
	ref,
	className: cn("border-b", className),
	...props
}));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionHeader, {
	className: "flex",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionTrigger$1, {
		ref,
		className: cn("flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })]
	})
}));
AccordionTrigger.displayName = AccordionTrigger$1.displayName;
var AccordionContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent$1, {
	ref,
	className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("pb-4 pt-0", className),
		children
	})
}));
AccordionContent.displayName = AccordionContent$1.displayName;
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Layout, { children: [
	/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "FAQs",
		title: "Common questions",
		image: images.lawn
	}),
	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "container-site max-w-3xl py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
			type: "single",
			collapsible: true,
			children: faqs.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
				value: String(i),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
					className: "text-left font-serif text-lg",
					children: f.q
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
					className: "text-base text-muted-foreground",
					children: f.a
				})]
			}, f.q))
		})
	}),
	/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {})
] });
//#endregion
export { SplitComponent as component };
