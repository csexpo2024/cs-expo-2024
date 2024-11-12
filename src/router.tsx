import { createBrowserRouter } from "react-router-dom";

import Landing from "@/routes/landing";
import { Layout } from "@/components/layout";

import { Events, Expo, DevDay } from "@/routes/events";
import { ProjectCollection, Project, HallOfFame } from "@/routes/projects";
import Partners from "@/routes/partners";
import Gallery from "@/routes/gallery";
import About from "@/routes/about";
import { NotFound } from "@/routes/not-found";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
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
        path: "/events/cs-expo",
        element: <Expo />,
      },
      {
        path: "/events/dev-day",
        element: <DevDay />,
      },
      {
        path: "/projects",
        element: <ProjectCollection />,
      },
      {
        path: "/projects/collection",
        element: <ProjectCollection />,
      },
      {
        path: "/projects/hall-of-fame",
        element: <HallOfFame />,
      },
      {
        path: "/projects/:projectid",
        element: <Project />,
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
