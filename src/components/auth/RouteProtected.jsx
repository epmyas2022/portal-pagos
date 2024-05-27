import Forbidden from "../../views/Errors/Forbidden";
export default function RouteProtected({ children, condition = false }) {
  

  return children();
  if (!localStorage.getItem("token") || condition) 
    return <Forbidden />;
  
  return children();
}
