import "./index.css";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createElement } from "react";
import routes from "./routes";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Actors from "./pages/Actors";
import Directors from "./pages/Directors";

// Create a components map to reference our components
const components = {
  Home: Home,
  Movie: Movie,
  Actors: Actors,
  Directors: Directors
};

// Use our routes array and map the element strings to actual components
const router = createBrowserRouter(
  routes.map(route => ({
    path: route.path,
    element: createElement(components[route.element])
  }))
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RouterProvider router={router} />
);