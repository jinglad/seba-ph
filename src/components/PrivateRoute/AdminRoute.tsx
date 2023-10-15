import React from "react";
import { useCookies } from "react-cookie";
import { useSelector } from "react-redux";
import { Navigate, Route, useLocation } from "react-router-dom";

const AdminRoute = ({ children }: { children: JSX.Element }) => {
  const location = useLocation();
  // const [cookies, setCookie, removeCookie] = useCookies(["seba-token"]);
  const { user, token } = useSelector((state: any) => state.user);
  if (token && user.role === "admin") {
    return children;
  } else {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
};

export default AdminRoute;
