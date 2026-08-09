// src/components/shared/ProgressCard.tsx
import * as React from "react"

import { cn } from "@/lib/utils"

export interface ProgressCardProps {
  label: string
  value: number // 0-100
  subtitle?: string
  className?: string
}

function ProgressCard({ label, value, subtitle, className }: ProgressCardProps) {
  const clamped = Math.min(100, Math.max(0, value))

  return (
    <div
      className={cn(
        "rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-[0_1px_12px_rgba(30,27,46,0.03)]",
        className
      )}
    >
      <div className="mb-2 flex items-center justify-between">
        <p className="text-sm font-medium text-[var(--text)]">{label}</p>
        <span className="text-sm text-[var(--text-secondary)]">{clamped}%</span>
      </div>
      <div className="h-[7px] w-full rounded-full bg-[var(--primary-bg)]">
        <div
          className="h-full rounded-full bg-[var(--primary)] transition-[width]"
          style={{ width: `${clamped}%` }}
          role="progressbar"
          aria-valuenow={clamped}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
      {subtitle ? <p className="mt-1.5 text-xs text-[var(--text-muted)]">{subtitle}</p> : null}
    </div>
  )
}

export { ProgressCard }
