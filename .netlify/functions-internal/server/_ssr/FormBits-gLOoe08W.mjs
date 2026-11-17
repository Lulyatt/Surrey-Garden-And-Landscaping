import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { l as CircleCheck, o as Info } from "../_libs/lucide-react.mjs";
import { r as cn } from "./Layout-B1o8T_JI.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/FormBits-gLOoe08W.js
var import_jsx_runtime = require_jsx_runtime();
var inputCls = "w-full rounded-sm border border-input bg-card px-4 py-3 text-base text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/30 aria-[invalid=true]:border-destructive";
function Field({ id, label, optional, error, hint, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
			htmlFor: id,
			className: "mb-1.5 flex items-baseline justify-between text-sm font-bold text-primary-deep",
			children: [label, optional && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xs font-normal text-muted-foreground",
				children: "Optional"
			})]
		}),
		children,
		hint && !error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1.5 text-sm text-muted-foreground",
			children: hint
		}),
		error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			id: `${id}-error`,
			role: "alert",
			className: "mt-1.5 text-sm font-semibold text-destructive",
			children: error
		})
	] });
}
/** Shown on every form until delivery (e.g. Netlify Forms) is configured. */
function NotConnectedNotice({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex gap-3 border-l-4 border-accent bg-muted p-4 text-sm text-foreground/85", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, { className: "mt-0.5 h-4 w-4 shrink-0 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Demo form:" }), " validation works, but sending isn't connected yet in this portfolio concept, so nothing you enter is delivered or stored."] })]
	});
}
function SubmittedState({ title, onReset }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		role: "status",
		className: "border border-success/40 bg-card p-8 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mx-auto h-10 w-10 text-success" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-4 text-2xl text-primary-deep",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mx-auto mt-3 max-w-md text-muted-foreground",
				children: [
					"Everything was filled in correctly. Because form delivery isn't connected in this concept, your message has",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: " not" }),
					" been sent — on the live site this is where you'd see confirmation that we've received it."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: onReset,
				className: "mt-6 font-bold text-primary underline underline-offset-4 hover:text-accent",
				children: "Start again"
			})
		]
	});
}
//#endregion
export { inputCls as i, NotConnectedNotice as n, SubmittedState as r, Field as t };
