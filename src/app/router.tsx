import { createBrowserRouter, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import { DashboardLayout } from "@/layouts/DashboardLayout";
import { ProtectedRoute } from "@/routes/ProtectedRoute";
import { RoleGuard } from "@/routes/RoleGuard";
import { PublicOnlyRoute } from "@/routes/PublicOnlyRoute";

const LoginPage = lazy(() => import("@/pages/auth/LoginPage"));
const RegisterPage = lazy(() => import("@/pages/auth/RegisterPage"));
const ForgotPasswordPage = lazy(() => import("@/pages/auth/ForgotPasswordPage"));
const DashboardPage = lazy(() => import("@/pages/Dashboard"));
const AnalyticsPage = lazy(() => import("@/pages/Analytics"));
const UsersPage = lazy(() => import("@/pages/Users"));
const PricingPage = lazy(() => import("@/pages/Pricing"));
const SettingsPage = lazy(() => import("@/pages/Settings"));

const PageLoader = () => (
  <div className="flex h-screen items-center justify-center">
    <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
  </div>
);

export const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      <PublicOnlyRoute>
        <Suspense fallback={<PageLoader />}>
          <LoginPage />
        </Suspense>
      </PublicOnlyRoute>
    ),
  },
  {
    path: "/register",
    element: (
      <PublicOnlyRoute>
        <Suspense fallback={<PageLoader />}>
          <RegisterPage />
        </Suspense>
      </PublicOnlyRoute>
    ),
  },
  {
    path: "/forgot-password",
    element: (
      <PublicOnlyRoute>
        <Suspense fallback={<PageLoader />}>
          <ForgotPasswordPage />
        </Suspense>
      </PublicOnlyRoute>
    ),
  },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Navigate to="/dashboard" replace />,
      },
      {
        path: "dashboard",
        element: (
          <Suspense fallback={<PageLoader />}>
            <DashboardPage />
          </Suspense>
        ),
      },
      {
        path: "analytics",
        element: (
          <RoleGuard allowedRoles={["admin"]}>
            <Suspense fallback={<PageLoader />}>
              <AnalyticsPage />
            </Suspense>
          </RoleGuard>
        ),
      },
      {
        path: "users",
        element: (
          <RoleGuard allowedRoles={["admin"]}>
            <Suspense fallback={<PageLoader />}>
              <UsersPage />
            </Suspense>
          </RoleGuard>
        ),
      },
      {
        path: "pricing",
        element: (
          <Suspense fallback={<PageLoader />}>
            <PricingPage />
          </Suspense>
        ),
      },
      {
        path: "settings",
        element: (
          <RoleGuard allowedRoles={["admin"]}>
            <Suspense fallback={<PageLoader />}>
              <SettingsPage />
            </Suspense>
          </RoleGuard>
        ),
      },
    ],
  },
]);
