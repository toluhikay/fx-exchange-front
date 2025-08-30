import type { JSX } from "react";
import { Navigate } from "react-router";
import useAuth from "../hooks/useAuth";

export default function RedirectIfAuth({ children }: { children: JSX.Element }) {
  const user = useAuth();

  if (user?.token) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
}
