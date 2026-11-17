import { r as __toESM } from "../_runtime.mjs";
import { a as images, c as services, l as testimonials, o as projects, s as serviceAreas, t as business, u as trustPoints } from "./site-RebzGCaq.mjs";
import { r as require_react } from "../_libs/@hookform/resolvers+[...].mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as Phone } from "../_libs/lucide-react.mjs";
import { n as Layout, r as cn, t as Button } from "./Layout-B1o8T_JI.mjs";
import { t as CtaBand } from "./CtaBand-B8wlCqY3.mjs";
import { t as ProjectCard } from "./ProjectCard-BqVfndaU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CvD0tFqk.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Reveal({ children, className, delay = 0 }) {
	const ref = (0, import_react.useRef)(null);
	const [visible, setVisible] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver(([e]) => {
			if (e?.isIntersecting) {
				setVisible(true);
				io.disconnect();
			}
		}, {
			threshold: .12,
			rootMargin: "0px 0px -40px 0px"
		});
		io.observe(el);
		return () => io.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		"data-visible": visible,
		style: { transitionDelay: `${delay}ms` },
		className: cn("reveal", className),
		children
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Layout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative isolate overflow-hidden bg-primary-deep",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: images.hero,
					alt: "Finished Surrey garden with sandstone patio and lawn",
					className: "absolute inset-0 -z-10 h-full w-full object-cover",
					width: 1920,
					height: 1088
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -z-10 bg-overlay" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-site py-24 md:py-36",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "Established local landscapers · Surrey"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-4 max-w-3xl text-4xl leading-tight text-primary-foreground md:text-6xl",
							children: "Gardens built properly, by people who care about them."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-xl text-lg text-primary-foreground/85",
							children: "Patios, fencing, decking, lawns and complete garden transformations for homeowners across Surrey."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap gap-3",
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
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-site grid items-center gap-12 py-20 md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "About us"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-3 text-3xl text-primary-deep md:text-4xl",
					children: [
						"A small team, doing careful work since ",
						business.established,
						"."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-muted-foreground",
					children: "We're a local landscaping business, not a national contractor. The same small team visits, quotes and carries out your project, so you always know who's in your garden."
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: 150,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: images.maintenance,
					alt: "Gardener trimming a hedge",
					className: "aspect-[4/3] w-full object-cover",
					loading: "lazy"
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "texture-paper py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-site",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "What we do"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-3xl text-primary-deep md:text-4xl",
						children: "Our services"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3",
						children: services.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/services/$slug",
							params: { slug: s.slug },
							className: "group block bg-card",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "img-zoom aspect-[3/2]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: s.image,
									alt: s.title,
									className: "h-full w-full object-cover",
									loading: "lazy"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-xl text-primary-deep",
									children: s.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-muted-foreground",
									children: s.short
								})]
							})]
						}, s.slug))
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-site py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "Recent work"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 text-3xl text-primary-deep md:text-4xl",
					children: "Featured projects"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "line",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/projects",
						children: "All projects"
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-10 md:grid-cols-3",
				children: projects.filter((p) => p.featured).map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectCard, { project: p }, p.slug))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-secondary py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-site",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Kind words"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-3xl text-primary-deep md:text-4xl",
						children: "What customers say"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid gap-8 md:grid-cols-3",
						children: testimonials.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
							className: "border-t-2 border-accent pt-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
								className: "font-serif text-lg text-primary-deep",
								children: [
									"“",
									t.quote,
									"”"
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
								className: "mt-4 text-sm text-muted-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
										className: "text-foreground",
										children: t.name
									}),
									", ",
									t.location,
									" · ",
									t.project
								]
							})]
						}, t.name))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8 text-xs text-muted-foreground",
						children: "Illustrative testimonials for a portfolio concept."
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-site grid gap-12 py-20 md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow",
				children: "Peace of mind"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-6 space-y-5",
				children: trustPoints.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-lg text-primary-deep",
					children: t.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground",
					children: t.text
				})] }, t.title))
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "Where we work"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 text-3xl text-primary-deep",
					children: "Across Surrey"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-muted-foreground",
					children: serviceAreas.join(" · ")
				})
			] })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {})
	] });
}
//#endregion
export { Home as component };
