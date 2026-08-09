// src/components/shared/ListCard.tsx
import * as React from "react"

import { cn } from "@/lib/utils"

function ListCard({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div
      className={cn(
        "divide-y divide-[var(--border)] rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[0_1px_12px_rgba(30,27,46,0.03)]",
        className
      )}
    >
      {children}
    </div>
  )
}

export interface ListCardItemProps {
  avatar: string
  title: string
  subtitle?: string
  value?: string
  className?: string
}

function ListCardItem({ avatar, title, subtitle, value, className }: ListCardItemProps) {
  return (
    <div className={cn("flex items-center justify-between gap-3 px-4 py-3.5", className)}>
      <div className="flex items-center gap-3">
        <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[var(--avatar-bg)] text-[11px] font-medium text-[var(--primary-dark)]">
          {avatar}
        </div>
        <div>
          <p className="text-sm font-medium text-[var(--text)]">{title}</p>
          {subtitle ? <p className="text-xs text-[var(--text-secondary)]">{subtitle}</p> : null}
        </div>
      </div>
      {value ? <span className="text-sm font-medium text-[var(--text)]">{value}</span> : null}
    </div>
  )
}

export { ListCard, ListCardItem }
