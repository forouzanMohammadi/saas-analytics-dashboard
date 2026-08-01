import { createBrowserRouter, Navigate } from "react-router-dom";

import DashboardLayout from "../layouts/DashboardLayout";

import LoginPage from "../pages/LoginPage";
import DashboardPage from "@/pages/Dashboard";
import AnalyticsPage from "@/pages/Analytics";
import UsersPage from "@/pages/Users";
import PricingPage from "@/pages/Pricing";
import SettingsPage from "@/pages/Settings";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/dashboard" replace />,
      },
      {
        path: "dashboard",
        element: <DashboardPage />,
      },
      {
        path: "analytics",
        element: <AnalyticsPage />,
      },
      {
        path: "users",
        element: <UsersPage />,
      },
      {
        path: "pricing",
        element: <PricingPage />,
      },
      {
        path: "settings",
        element: <SettingsPage />,
      },
    ],
  },
]);