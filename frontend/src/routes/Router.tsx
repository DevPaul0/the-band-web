import { createBrowserRouter, type RouteObject } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    //   {
    //     path: "about",
    //     element: <About />,
    //   },
    //   {
    //     path: "*",
    //     element: <NotFound />,
    //   },
    ],
  },
];

export const router = createBrowserRouter(routes);