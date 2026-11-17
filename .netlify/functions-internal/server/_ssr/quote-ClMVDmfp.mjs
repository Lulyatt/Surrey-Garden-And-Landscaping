import { r as __toESM } from "../_runtime.mjs";
import { a as images, c as services } from "./site-RebzGCaq.mjs";
import { n as useForm, r as require_react, t as u } from "../_libs/@hookform/resolvers+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { s as ImagePlus, t as X } from "../_libs/lucide-react.mjs";
import { n as Layout, t as Button } from "./Layout-B1o8T_JI.mjs";
import { t as PageHero } from "./PageHero-DFWlattK.mjs";
import { i as inputCls, n as NotConnectedNotice, r as SubmittedState, t as Field } from "./FormBits-gLOoe08W.mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/quote-ClMVDmfp.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var quoteSchema = objectType({
	name: stringType().trim().min(2, "Please enter your name").max(100),
	email: stringType().trim().email("Please enter a valid email address").max(255),
	phone: stringType().trim().regex(/^[0-9+()\s-]{10,20}$/, "Please enter a valid phone number"),
	workType: stringType().min(1, "Please choose the type of work"),
	postcode: stringType().trim().min(2, "Please enter your postcode or area").max(60),
	description: stringType().trim().min(20, "Please describe the project in a little more detail (at least 20 characters)").max(3e3)
});
/** Returns an error message or null. Exported for tests. */
function validatePhotos(files) {
	if (files.length > 5) return `You can attach up to 5 photos`;
	if (files.some((f) => !f.type.startsWith("image/"))) return "Photos must be image files (JPG, PNG, HEIC)";
	if (files.some((f) => f.size > 10485760)) return `Each photo must be under 10MB`;
	return null;
}
function QuoteForm({ defaultWork = "" }) {
	const [done, setDone] = (0, import_react.useState)(false);
	const [photos, setPhotos] = (0, import_react.useState)([]);
	const [photoError, setPhotoError] = (0, import_react.useState)(null);
	const [previews, setPreviews] = (0, import_react.useState)([]);
	const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm({
		resolver: u(quoteSchema),
		defaultValues: {
			name: "",
			email: "",
			phone: "",
			workType: defaultWork,
			postcode: "",
			description: ""
		}
	});
	(0, import_react.useEffect)(() => {
		const urls = photos.map((f) => URL.createObjectURL(f));
		setPreviews(urls);
		return () => urls.forEach(URL.revokeObjectURL);
	}, [photos]);
	const addFiles = (list) => {
		if (!list) return;
		const next = [...photos, ...Array.from(list)];
		const err = validatePhotos(next);
		setPhotoError(err);
		if (!err) setPhotos(next);
	};
	if (done) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SubmittedState, {
		title: "Thanks for your quote request",
		onReset: () => {
			reset();
			setPhotos([]);
			setDone(false);
		}
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		noValidate: true,
		onSubmit: handleSubmit(async () => {
			if (photoError) return;
			await new Promise((r) => setTimeout(r, 600));
			setDone(true);
		}),
		className: "space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotConnectedNotice, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 sm:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						id: "q-name",
						label: "Name",
						error: errors.name?.message,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "q-name",
							autoComplete: "name",
							className: inputCls,
							"aria-invalid": !!errors.name,
							...register("name")
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						id: "q-email",
						label: "Email address",
						error: errors.email?.message,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "q-email",
							type: "email",
							autoComplete: "email",
							className: inputCls,
							"aria-invalid": !!errors.email,
							...register("email")
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						id: "q-phone",
						label: "Phone number",
						error: errors.phone?.message,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "q-phone",
							type: "tel",
							autoComplete: "tel",
							className: inputCls,
							"aria-invalid": !!errors.phone,
							...register("phone")
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						id: "q-postcode",
						label: "Postcode or area",
						error: errors.postcode?.message,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "q-postcode",
							autoComplete: "postal-code",
							placeholder: "e.g. GU1 or Guildford",
							className: inputCls,
							"aria-invalid": !!errors.postcode,
							...register("postcode")
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				id: "q-work",
				label: "Type of work",
				error: errors.workType?.message,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					id: "q-work",
					className: inputCls,
					"aria-invalid": !!errors.workType,
					...register("workType"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "",
							children: "Choose one…"
						}),
						services.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: s.slug,
							children: s.title
						}, s.slug)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "other",
							children: "Something else / not sure"
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				id: "q-desc",
				label: "Brief description of the project",
				error: errors.description?.message,
				hint: "Roughly what you'd like done, garden size, and any timing you have in mind.",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					id: "q-desc",
					rows: 5,
					className: inputCls,
					"aria-invalid": !!errors.description,
					...register("description")
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				id: "q-photos",
				label: "Photos of your garden",
				optional: true,
				error: photoError ?? void 0,
				hint: `Up to 5 images, 10MB each.`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					htmlFor: "q-photos",
					className: "flex cursor-pointer flex-col items-center justify-center gap-2 border-2 border-dashed border-input bg-card px-4 py-8 text-center transition-colors hover:border-primary hover:bg-muted",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePlus, { className: "h-7 w-7 text-primary" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-bold text-primary-deep",
							children: "Choose photos"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm text-muted-foreground",
							children: "or take one with your phone"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "q-photos",
							type: "file",
							accept: "image/*",
							multiple: true,
							className: "sr-only",
							onChange: (e) => {
								addFiles(e.target.files);
								e.target.value = "";
							}
						})
					]
				})
			}),
			previews.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "grid grid-cols-3 gap-3 sm:grid-cols-5",
				children: previews.map((src, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "relative aspect-square",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src,
						alt: photos[i]?.name ?? "Selected photo",
						className: "h-full w-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => {
							setPhotos(photos.filter((_, j) => j !== i));
							setPhotoError(null);
						},
						"aria-label": `Remove ${photos[i]?.name}`,
						className: "absolute right-1 top-1 flex h-7 w-7 items-center justify-center rounded-full bg-primary-deep text-primary-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
					})]
				}, src))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "submit",
				variant: "cta",
				size: "xl",
				disabled: isSubmitting,
				className: "w-full sm:w-auto",
				children: isSubmitting ? "Checking…" : "Request my free quote"
			})
		]
	});
}
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Layout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
	eyebrow: "Free quote",
	title: "Request a quote",
	intro: "Tell us about your garden and we'll arrange a visit.",
	image: images.hero
}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: "container-site max-w-3xl py-20",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuoteForm, {})
})] });
//#endregion
export { SplitComponent as component };
