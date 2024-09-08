import React from "react";
import { Outlet, Navigate } from "react-router-dom";

export default function ProtectedRoute(props) {
  // If user is not authenticated, redirect to login
  if (!props.isAuthenticated) {
    return <Navigate to="/login" />;
  }

  // If user is authenticated but does not have the required role, redirect to unauthorized page
  if (props.allowedRoles && !props.allowedRoles.includes(props.role)) {
    return <div className="dark:text-white">Permission denied</div>;
  }

  // If user is authenticated and has the required role, render the requested route
  return <Outlet />;
}
