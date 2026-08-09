// src/components/shared/Badge.tsx
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium whitespace-nowrap",
  {
    variants: {
      variant: {
        success: "bg-[var(--success-bg)] text-[var(--success)]",
        danger: "bg-[var(--danger-bg)] text-[var(--danger)]",
        warning: "bg-[var(--warning-bg)] text-[var(--warning-text)]",
        primary: "bg-[var(--primary-bg)] text-[var(--primary-dark)]",
        neutral: "bg-[var(--search-bg)] text-[var(--text-secondary)] border border-[var(--border)]",
        "solid-primary": "rounded-md bg-[var(--primary)] text-white font-semibold",
        "solid-dark": "rounded-md bg-[var(--primary-tooltip)] text-white font-semibold",
      },
    },
    defaultVariants: {
      variant: "neutral",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <span data-slot="badge" className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }
