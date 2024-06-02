import { Navigate } from "react-router-dom";
import Auth from "../../helpers/auth";

export default function RoutePublic({ children, redirectTo = "/", auth = true}) {
  if (auth && Auth.token())
    return <Navigate to={redirectTo} />;

  return children();
}
