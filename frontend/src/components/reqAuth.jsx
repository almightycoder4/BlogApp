import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const ReqAuth = ({ children }) => {
  const token = useSelector((state) => state.authReducer.token);
  const location = useLocation(); //current user location before going to the login page

  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default ReqAuth;
