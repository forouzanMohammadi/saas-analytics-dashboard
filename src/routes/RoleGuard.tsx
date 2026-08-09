// src/routes/RoleGuard.tsx
import type { ReactNode } from "react"
import { Navigate } from "react-router-dom"

import { useAuthStore, type Role } from "@/store/authStore"

interface RoleGuardProps {
  allowedRoles: Role[]
  children: ReactNode
  redirectTo?: string
}

export function RoleGuard({ allowedRoles, children, redirectTo = "/dashboard" }: RoleGuardProps) {
  const role = useAuthStore((s) => s.user?.role)

  if (!role || !allowedRoles.includes(role)) {
    return <Navigate to={redirectTo} replace />
  }

  return <>{children}</>
}
