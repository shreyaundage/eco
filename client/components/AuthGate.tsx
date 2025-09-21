import React from "react";
import { Navigate, useLocation } from "react-router-dom";

export default function RequireAuth({ children }: { children: React.ReactElement }) {
  const location = useLocation();
  const logged = typeof window !== "undefined" && localStorage.getItem("eco_logged_in") === "1";
  if (!logged) {
    return <Navigate to="/auth" state={{ from: location }} replace />;
  }
  return children;
}
