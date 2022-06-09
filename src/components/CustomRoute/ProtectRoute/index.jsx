import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ isCheckedAvatar }) => {
  const user = localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY);

  const isAllow = user ? true : false;

  return isAllow ? <Outlet /> : <Navigate to={"/login"} />;
};

export default ProtectedRoute;
