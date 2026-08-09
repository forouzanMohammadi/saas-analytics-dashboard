// src/components/shared/NotificationBadge.tsx
import * as React from "react"

import { cn } from "@/lib/utils"

export interface NotificationBadgeProps {
  count: number
  max?: number
  children: React.ReactNode
  className?: string
}

function NotificationBadge({ count, max = 9, children, className }: NotificationBadgeProps) {
  if (count <= 0) return <>{children}</>

  const display = count > max ? `${max}+` : count

  return (
    <span className={cn("relative inline-flex", className)}>
      {children}
      <span
        className={cn(
          "absolute -top-1.5 -right-2 flex h-4 min-w-4 items-center justify-center rounded-full px-1",
          "bg-[var(--danger)] text-[9.5px] font-semibold text-white"
        )}
      >
        {display}
      </span>
    </span>
  )
}

export { NotificationBadge }
