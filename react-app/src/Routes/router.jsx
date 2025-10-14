import { createBrowserRouter } from "react-router";
import App from "../App";
import Count from "../components/Counter/Count";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Products from "../components/Products/Products";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
    {
      path: "home",
      element: <Home />,
    },
    {
      path: "products",
      element: <Products />,
    },
    {
      path: "count",
      element: <Count />,
    },
    {
      path: "about",
      element: <About />,
    },
  ]
  },
  {
    path: "/login",
    element: <div>Login...</div>,
  },
  {
    path: "/register",
    element: <div>Register...</div>,
  },
]);
