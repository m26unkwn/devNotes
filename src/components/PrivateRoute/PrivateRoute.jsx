/** @format */

import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../../context/provider/auth-provider";

export const PrivateRoute = () => {
  const {
    authState: { token },
  } = useAuth();
  const location = useLocation();
  return token ? (
    <Outlet />
  ) : (
    <Navigate to='/login' state={{ lastLocation: location }} replace />
  );
};
