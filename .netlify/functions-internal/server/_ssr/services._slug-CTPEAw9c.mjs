import { i as getService } from "./site-RebzGCaq.mjs";
import { Ht as notFound, _ as createFileRoute, g as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services._slug-CTPEAw9c.js
var $$splitComponentImporter = () => import("./services._slug-DIVc9tg4.mjs");
var Route = createFileRoute("/services/$slug")({
	loader: ({ params }) => {
		const s = getService(params.slug);
		if (!s) throw notFound();
		return s;
	},
	head: ({ loaderData }) => ({ meta: [
		{ title: `${loaderData?.title ?? "Service"} | Surrey Garden & Landscaping` },
		{
			name: "description",
			content: loaderData?.short ?? ""
		},
		{
			property: "og:title",
			content: loaderData?.title ?? "Service"
		},
		{
			property: "og:description",
			content: loaderData?.short ?? ""
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
