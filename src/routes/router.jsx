import { createBrowserRouter } from "react-router-dom";

import Home from "../views/Home";
import Register from "../views/Register";
import Login from "../views/Login";
import RouteProtected from "../components/auth/RouteProtected";

export default createBrowserRouter([
  {
    path: "/",
    element: <RouteProtected children={Home}/>,
  },

  {
    path: "/register",
    element: <Register />,
  },

  {
    path: "/login",
    element: <Login />,
  },
]);
