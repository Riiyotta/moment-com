import { lazy } from "react";

// One entry per captured page. Add a page by adding its component here.
export const routes = [
  { path: "/", title: "Moment · The AI Partner for Investment Management", Page: lazy(() => import("./pages/HomePage.jsx")) },
  { path: "/memo", title: "Memo · Moment", Page: lazy(() => import("./pages/Memo.jsx")) },
  { path: "/careers", title: "Careers · Moment", Page: lazy(() => import("./pages/Careers.jsx")) },
  { path: "/series-c", title: "Series C · Moment", Page: lazy(() => import("./pages/SeriesC.jsx")) },
  { path: "/careers/f8e990cd-4517-47bb-93b0-3c5f1fddeb07", title: "Agent Engineer · Moment", Page: lazy(() => import("./pages/CareersF8e990cd451747bb.jsx")) },
  { path: "/careers/b13c29c2-fe72-4055-86c8-fa8efbae416f", title: "Distributed Systems Engineer · Moment", Page: lazy(() => import("./pages/CareersB13c29c2Fe724055.jsx")) },
  { path: "/careers/9e9306c1-987b-4609-ad5e-8eaa92f16d44", title: "Front End / Full Stack Engineer · Moment", Page: lazy(() => import("./pages/Careers9e9306c1987b4609.jsx")) },
  { path: "/careers/f679da84-db6f-4a08-801b-dd63508d6310", title: "Head of Security · Moment", Page: lazy(() => import("./pages/CareersF679da84Db6f4a08.jsx")) },
  { path: "/careers/93c2d5e1-0a40-42bc-a4c9-a71449f3a6e2", title: "Platform Engineer · Moment", Page: lazy(() => import("./pages/Careers93c2d5e10a4042bc.jsx")) },
  { path: "/careers/30f72628-dd96-4fb2-b998-ab310e90ad82", title: "Security Engineer · Moment", Page: lazy(() => import("./pages/Careers30f72628Dd964fb2.jsx")) },
  { path: "/careers/1db991e4-9480-4847-b300-c430cc057d56", title: "Design Engineer · Moment", Page: lazy(() => import("./pages/Careers1db991e494804847.jsx")) },
  { path: "/careers/5fb2d42b-9542-4d54-999d-b8f4e0ee9490", title: "Product Designer · Moment", Page: lazy(() => import("./pages/Careers5fb2d42b95424d54.jsx")) },
  { path: "/careers/9a3a451a-43bf-42cd-9c24-78e309c07104", title: "Marketing Leader · Moment", Page: lazy(() => import("./pages/Careers9a3a451a43bf42cd.jsx")) },
  { path: "/careers/707c9117-1b1e-4260-96b3-28f735f7d840", title: "Strategy & Ops Leader · Moment", Page: lazy(() => import("./pages/Careers707c91171b1e4260.jsx")) },
  { path: "/careers/752a96ec-5ad1-456e-a98d-6c64c6dfa256", title: "Deployment Strategist · Moment", Page: lazy(() => import("./pages/Careers752a96ec5ad1456e.jsx")) },
  { path: "/careers/ed7b7afd-c6c1-4de5-a7b2-b504941c3da5", title: "Technical Recruiter · Moment", Page: lazy(() => import("./pages/CareersEd7b7afdC6c14de5.jsx")) },
];
export const ROUTE_SET = new Set(routes.map((r) => r.path));
