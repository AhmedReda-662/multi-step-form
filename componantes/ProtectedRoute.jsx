import { Navigate, Outlet, useLocation } from "react-router";
import { useData } from "../context/DataContext";

function ProtectedRoute() {
  const { data } = useData();
  const location = useLocation();
  if (!data && location.pathname !== "/") {
    return <Navigate to={"/"} />;
  } else return <Outlet />;
}

export default ProtectedRoute;
