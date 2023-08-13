import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  let isLooged = localStorage.getItem("token");
  if (!isLooged) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
};
export default ProtectedRoutes;
