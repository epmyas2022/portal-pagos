import { createBrowserRouter } from "react-router-dom";

import Home from "../views/Home";
import Register from "../views/Register";
import Login from "../views/Login";
import RouteProtected from "../components/auth/RouteProtected";
import RoutePublic from "../components/auth/RoutePublic";

export default createBrowserRouter([
  {
    path: "/",
    element: <RouteProtected children={Home}/>,
  },

  {
    path: "/register",
    element:  <RoutePublic children={Register}/>,
    
  },

  {
    path: "/login",
    element: <RoutePublic children={Login}/>,
  },
]);
