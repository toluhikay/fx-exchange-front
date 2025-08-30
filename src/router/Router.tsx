import { createBrowserRouter } from "react-router";
import RedirectIfAuth from "../components/RedirectIfAuth";
import LandingPage from "../pages/auth/LandingPage";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import RequireAuth from "../components/RequireAuth";
import Dashboard from "../pages/dashboard/Dashboard";
import Profile from "../pages/dashboard/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <>Error</>,
    children: [
      { index: true, element: <LandingPage /> },
      {
        path: "login",
        element: (
          <RedirectIfAuth>
            <Login />
          </RedirectIfAuth>
        ),
      },
      {
        path: "register",
        element: (
          <RedirectIfAuth>
            <Register />
          </RedirectIfAuth>
        ),
      },
      {
        path: "dashboard",
        element: (
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        ),
      },
      {
        path: "profile",
        element: (
          <RequireAuth>
            <Profile />
          </RequireAuth>
        ),
      },
      { path: "*", element: <>Not Found</> },
    ],
  },
]);
