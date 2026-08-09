// src/routes/ProtectedRoute.tsx
import type { ReactNode } from "react"
import { Navigate, useLocation } from "react-router-dom"

import { useAuthStore } from "@/store/authStore"

interface ProtectedRouteProps {
  children: ReactNode
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated)
  const location = useLocation()

  if (!isAuthenticated) {
    // remember where they were headed so login can send them back
    return <Navigate to="/login" replace state={{ from: location }} />
  }

  return <>{children}</>
}
