import { createBrowserRouter } from "react-router-dom";

import Landing from "@/routes/landing";
import { Layout } from "@/components/layout";
import Events from "@/routes/events";
import Projects from "@/routes/projects";
import Partners from "@/routes/partners";
import Gallery from "@/routes/gallery";
import About from "@/routes/about";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/events",
        element: <Events />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/partners",
        element: <Partners />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
