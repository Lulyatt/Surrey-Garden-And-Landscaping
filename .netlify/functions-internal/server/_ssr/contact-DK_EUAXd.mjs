import { r as __toESM } from "../_runtime.mjs";
import { a as images, s as serviceAreas, t as business } from "./site-RebzGCaq.mjs";
import { n as useForm, r as require_react, t as u } from "../_libs/@hookform/resolvers+[...].mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as Layout, t as Button } from "./Layout-B1o8T_JI.mjs";
import { t as PageHero } from "./PageHero-DFWlattK.mjs";
import { i as inputCls, n as NotConnectedNotice, r as SubmittedState, t as Field } from "./FormBits-gLOoe08W.mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-DK_EUAXd.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var enquirySchema = objectType({
	name: stringType().trim().min(2, "Please enter your name").max(100),
	email: stringType().trim().email("Please enter a valid email address").max(255),
	phone: stringType().trim().max(20).refine((v) => v === "" || /^[0-9+()\s-]{10,20}$/.test(v), "Please enter a valid phone number").optional(),
	message: stringType().trim().min(10, "Please add a little more detail (at least 10 characters)").max(2e3)
});
function EnquiryForm() {
	const [done, setDone] = (0, import_react.useState)(false);
	const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm({
		resolver: u(enquirySchema),
		defaultValues: {
			name: "",
			email: "",
			phone: "",
			message: ""
		}
	});
	if (done) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SubmittedState, {
		title: "Thanks for your enquiry",
		onReset: () => {
			reset();
			setDone(false);
		}
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		noValidate: true,
		onSubmit: handleSubmit(async () => {
			await new Promise((r) => setTimeout(r, 500));
			setDone(true);
		}),
		className: "space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotConnectedNotice, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					id: "e-name",
					label: "Name",
					error: errors.name?.message,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: "e-name",
						autoComplete: "name",
						className: inputCls,
						"aria-invalid": !!errors.name,
						...register("name")
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					id: "e-email",
					label: "Email address",
					error: errors.email?.message,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: "e-email",
						type: "email",
						autoComplete: "email",
						className: inputCls,
						"aria-invalid": !!errors.email,
						...register("email")
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				id: "e-phone",
				label: "Phone number",
				optional: true,
				error: errors.phone?.message,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					id: "e-phone",
					type: "tel",
					autoComplete: "tel",
					className: inputCls,
					"aria-invalid": !!errors.phone,
					...register("phone")
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				id: "e-message",
				label: "Message",
				error: errors.message?.message,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					id: "e-message",
					rows: 5,
					className: inputCls,
					"aria-invalid": !!errors.message,
					...register("message")
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "submit",
				variant: "forest",
				size: "xl",
				disabled: isSubmitting,
				className: "w-full sm:w-auto",
				children: isSubmitting ? "Checking…" : "Send enquiry"
			})
		]
	});
}
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Layout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
	eyebrow: "Contact",
	title: "Get in touch",
	image: images.decking
}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
	className: "container-site grid gap-12 py-20 lg:grid-cols-[1fr_1.4fr]",
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "eyebrow",
				children: "Phone"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: business.phoneHref,
				className: "mt-2 block font-serif text-3xl text-primary-deep hover:text-accent",
				children: business.phone
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "eyebrow",
				children: "Email"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: `mailto:${business.email}`,
				className: "mt-2 block break-all text-primary underline",
				children: business.email
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "eyebrow",
				children: "Opening hours"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-2",
				children: business.hours.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex justify-between border-b border-border py-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: h.days }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: h.time })]
				}, h.days))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "eyebrow",
				children: "Areas we cover"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-muted-foreground",
				children: serviceAreas.join(" · ")
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				variant: "cta",
				size: "xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/quote",
					children: "Request a quote instead"
				})
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
		className: "mb-6 text-3xl text-primary-deep",
		children: "General enquiry"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EnquiryForm, {})] })]
})] });
//#endregion
export { SplitComponent as component };
