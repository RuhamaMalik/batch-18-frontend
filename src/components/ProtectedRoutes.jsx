import { Navigate } from "react-router-dom";
import { getToken, getUser } from "../utils/auth";

const ProtectedRoutes = ({ children, role }) => {
  const token = getToken();
  const user = getUser();

  const isLoggedin = token && user;
  const checkRole = role ? user?.role === role : true;

  if (!isLoggedin) return <Navigate to="/auth" replace />;
  if (!checkRole) return <Navigate to="/" replace />;

  return children;
};

export default ProtectedRoutes;
