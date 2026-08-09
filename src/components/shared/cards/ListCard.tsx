import * as React from "react"

import { cn } from "@/lib/utils"

function ListCard({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div
      className={cn(
        "divide-y divide-(--border) rounded-2xl border border-(--border) bg-(--surface) shadow-[0_1px_12px_rgba(30,27,46,0.03)]",
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
        <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-(--avatar-bg) text-[11px] font-medium text-(--primary-dark)">
          {avatar}
        </div>
        <div>
          <p className="text-sm font-medium text-(--text)">{title}</p>
          {subtitle ? <p className="text-xs text-(--text-secondary)">{subtitle}</p> : null}
        </div>
      </div>
      {value ? <span className="text-sm font-medium text-(--text)">{value}</span> : null}
    </div>
  )
}

export { ListCard, ListCardItem }
