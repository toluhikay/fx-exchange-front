// src/components/RequireAuth.tsx
import type { JSX } from "react";
import { Navigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";
// import { Navigate, useLocation } from "react-router-dom";

export default function RequireAuth({ children }: { children: JSX.Element }) {
  const location = useLocation();

  const user = useAuth();

  if (!user?.token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
