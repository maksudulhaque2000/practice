import { createBrowserRouter } from "react-router";
import App from "../App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
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
