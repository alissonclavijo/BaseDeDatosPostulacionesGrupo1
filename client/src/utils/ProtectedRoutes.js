import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  let isLooged = localStorage.getItem("tokenCandidatos");
  if (!isLooged) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};
export default ProtectedRoutes;
