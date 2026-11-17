import { r as getProject } from "./site-RebzGCaq.mjs";
import { Ht as notFound, _ as createFileRoute, g as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projects._slug-D84ayi-E.js
var $$splitComponentImporter = () => import("./projects._slug-_ZoK6Tvw.mjs");
var Route = createFileRoute("/projects/$slug")({
	loader: ({ params }) => {
		const p = getProject(params.slug);
		if (!p) throw notFound();
		return p;
	},
	head: ({ loaderData }) => ({ meta: [
		{ title: `${loaderData?.title ?? "Project"} | Surrey Garden & Landscaping` },
		{
			name: "description",
			content: loaderData?.summary ?? ""
		},
		{
			property: "og:title",
			content: loaderData?.title ?? "Project"
		},
		{
			property: "og:description",
			content: loaderData?.summary ?? ""
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
