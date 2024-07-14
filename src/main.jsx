import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Overview from "./pages/Overview";

const router = createBrowserRouter([
  {
    path: "/satria-mms",
    element: <Home />,
  },
  {
    path: "/satria-mms/overview",
    element: <Overview />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);