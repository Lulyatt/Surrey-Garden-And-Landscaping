import { r as __toESM } from "../_runtime.mjs";
import { c as services, s as serviceAreas, t as business } from "./site-RebzGCaq.mjs";
import { r as require_react } from "../_libs/@hookform/resolvers+[...].mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as require_jsx_runtime, s as Slot } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as Instagram, c as Facebook, i as Mail, n as Phone, r as Menu, t as X } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Layout-B1o8T_JI.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function Logo({ inverted = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/",
		className: "group flex items-center gap-3",
		"aria-label": "Surrey Garden & Landscaping — home",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 40 40",
			className: cn("h-10 w-10 shrink-0", inverted ? "text-primary-foreground" : "text-primary"),
			"aria-hidden": true,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "20",
					cy: "20",
					r: "19",
					fill: "none",
					stroke: "currentColor",
					strokeWidth: "1.5"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M20 31V15",
					stroke: "currentColor",
					strokeWidth: "1.6",
					strokeLinecap: "round"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M20 22c-5 0-8-3-8-8 5 0 8 3 8 8Z",
					fill: "currentColor"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M20 18c4 0 7-2.5 7-7-4 0-7 2.5-7 7Z",
					className: "fill-accent"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M11 31h18",
					stroke: "currentColor",
					strokeWidth: "1.6",
					strokeLinecap: "round"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "leading-none",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("block font-serif text-[1.05rem] font-bold", inverted ? "text-primary-foreground" : "text-primary-deep"),
				children: "Surrey Garden"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("mt-1 block text-[0.68rem] font-bold uppercase tracking-[0.2em]", inverted ? "text-primary-foreground/75" : "text-muted-foreground"),
				children: "& Landscaping"
			})]
		})]
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "bg-primary-deep text-primary-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-site grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { inverted: true }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-xs text-primary-foreground/75",
						children: "A small, local team designing, building and looking after gardens across Surrey."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: business.facebook,
							target: "_blank",
							rel: "noreferrer",
							"aria-label": "Facebook",
							className: "flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/30 transition-colors hover:bg-accent hover:text-accent-foreground hover:border-accent",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Facebook, { className: "h-4 w-4" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: business.instagram,
							target: "_blank",
							rel: "noreferrer",
							"aria-label": "Instagram",
							className: "flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/30 transition-colors hover:bg-accent hover:text-accent-foreground hover:border-accent",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "h-4 w-4" })
						})]
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "eyebrow",
					children: "Services"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-2.5",
					children: services.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/services/$slug",
						params: { slug: s.slug },
						className: "text-primary-foreground/80 hover:text-primary-foreground hover:underline underline-offset-4",
						children: s.title
					}) }, s.slug))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "eyebrow",
					children: "Explore"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-2.5",
					children: [
						["/projects", "Our projects"],
						["/faqs", "FAQs"],
						["/contact", "Contact us"],
						["/quote", "Request a quote"]
					].map(([to, l]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to,
						className: "text-primary-foreground/80 hover:text-primary-foreground hover:underline underline-offset-4",
						children: l
					}) }, to))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "eyebrow",
						children: "Get in touch"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: business.phoneHref,
						className: "mt-4 flex items-center gap-2 font-serif text-xl hover:text-accent",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" }), business.phone]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: `mailto:${business.email}`,
						className: "mt-2 flex items-center gap-2 break-all text-primary-foreground/80 hover:text-primary-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4 shrink-0" }), business.email]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-5 text-sm text-primary-foreground/65",
						children: [
							"Covering ",
							serviceAreas.slice(0, 6).join(", "),
							" and surrounding areas."
						]
					})
				] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-primary-foreground/15",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-site flex flex-col gap-2 py-6 text-xs text-primary-foreground/60 md:flex-row md:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" ",
					business.name
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Portfolio concept: business details, projects, reviews and accreditations shown are illustrative." })]
			})
		})]
	});
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline",
			cta: "rounded-sm bg-accent text-accent-foreground font-bold tracking-wide hover:bg-accent/85 hover:-translate-y-px transition-all",
			forest: "rounded-sm bg-primary text-primary-foreground font-bold tracking-wide hover:bg-primary-deep transition-colors",
			onDark: "rounded-sm border border-primary-foreground/60 text-primary-foreground font-bold tracking-wide hover:bg-primary-foreground hover:text-primary-deep transition-colors",
			line: "rounded-sm border border-primary text-primary font-bold tracking-wide hover:bg-primary hover:text-primary-foreground transition-colors"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			xl: "h-13 px-7 text-base",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var nav = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/services",
		label: "Services"
	},
	{
		to: "/projects",
		label: "Projects"
	},
	{
		to: "/faqs",
		label: "FAQs"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
function SiteHeader() {
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open ? "hidden" : "";
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "hidden bg-primary-deep text-primary-foreground md:block",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-site flex h-9 items-center justify-between text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-primary-foreground/80",
						children: "Garden landscaping & maintenance across Surrey"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: business.phoneHref,
						className: "flex items-center gap-2 font-bold hover:text-accent",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-3.5 w-3.5" }),
							" ",
							business.phone
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-site flex h-18 items-center justify-between gap-6 py-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "hidden items-center gap-8 lg:flex",
						"aria-label": "Main",
						children: nav.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: n.to,
							activeOptions: { exact: n.to === "/" },
							className: "relative py-2 text-[0.95rem] font-semibold text-foreground/80 transition-colors hover:text-primary data-[status=active]:text-primary after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:bg-accent after:transition-transform hover:after:scale-x-100 data-[status=active]:after:scale-x-100",
							children: n.label
						}, n.to))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "cta",
								className: "hidden h-11 px-5 sm:inline-flex",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/quote",
									children: "Request a quote"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: business.phoneHref,
								className: "flex h-11 w-11 items-center justify-center rounded-sm bg-primary text-primary-foreground md:hidden",
								"aria-label": `Call ${business.phone}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-5 w-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "flex h-11 w-11 items-center justify-center rounded-sm border border-border lg:hidden",
								onClick: () => setOpen((o) => !o),
								"aria-expanded": open,
								"aria-controls": "mobile-nav",
								"aria-label": open ? "Close menu" : "Open menu",
								children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
							})
						]
					})
				]
			}),
			open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				id: "mobile-nav",
				className: "fixed inset-x-0 bottom-0 top-[72px] z-40 overflow-y-auto bg-background lg:hidden md:top-[108px]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "container-site flex flex-col py-6",
					"aria-label": "Mobile",
					children: [nav.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: n.to,
						onClick: () => setOpen(false),
						activeOptions: { exact: n.to === "/" },
						className: "border-b border-border py-4 font-serif text-2xl text-primary-deep data-[status=active]:text-accent",
						children: n.label
					}, n.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 grid gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "cta",
							size: "xl",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/quote",
								onClick: () => setOpen(false),
								children: "Request a free quote"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "line",
							size: "xl",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: business.phoneHref,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" }),
									" Call ",
									business.phone
								]
							})
						})]
					})]
				})
			})
		]
	});
}
function Layout({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "flex-1",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { Layout as n, cn as r, Button as t };
