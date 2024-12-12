import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Blog from "./components/Blog";
import Page from "./components/Page";
import Home from "./components/Home";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/:page",
        element: <Page />,
      },
    ],
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
