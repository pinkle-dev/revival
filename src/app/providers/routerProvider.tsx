import { ROUTES } from "@/consts/routes";
import { AboutPage } from "@/pages/About";
import { DonatePage } from "@/pages/Donate";
import { EventPage } from "@/pages/Event";
import { EventsPage } from "@/pages/Events";
import { HomePage } from "@/pages/Home";
import { LayoutPage } from "@/pages/Layout";
import { createBrowserRouter } from "react-router";
import { RouterProvider as BrowserRouter } from "react-router/dom";

const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <LayoutPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: ROUTES.ABOUT, element: <AboutPage /> },
      {
        path: ROUTES.EVENTS,
        children: [
          { index: true, element: <EventsPage /> },
          { path: ROUTES.EVENT, element: <EventPage /> },
        ],
      },
      { path: ROUTES.DONATE, element: <DonatePage /> },
    ],
  },
]);

export const RouterProvider = () => {
  return <BrowserRouter router={router} />;
};
