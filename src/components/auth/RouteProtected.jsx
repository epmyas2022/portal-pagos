import Forbidden from "../../views/Errors/Forbidden";

import Auth from "../../helpers/auth";
export default function RouteProtected({ children, condition = false }) {
  
  if (!Auth.token() || condition) 
    return <Forbidden />;
  
  return children();
}
