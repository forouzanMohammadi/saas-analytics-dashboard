import { cva, type VariantProps } from "class-variance-authority"
import { Sparkles, AlertTriangle, CircleCheck, CircleX } from "lucide-react"
import type { LucideIcon } from "lucide-react"

import { cn } from "@/lib/utils"

const alertCardVariants = cva("flex items-start gap-2.5 rounded-2xl px-4 py-3.5", {
  variants: {
    variant: {
      insight: "bg-[var(--primary-bg)] text-[var(--primary-dark)]",
      warning: "bg-[var(--warning-bg)] text-[var(--warning-text)]",
      success: "bg-[var(--success-bg)] text-[var(--success)]",
      danger: "bg-[var(--danger-bg)] text-[var(--danger)]",
    },
  },
  defaultVariants: {
    variant: "insight",
  },
})

const defaultIcons: Record<string, LucideIcon> = {
  insight: Sparkles,
  warning: AlertTriangle,
  success: CircleCheck,
  danger: CircleX,
}

export interface AlertCardProps extends VariantProps<typeof alertCardVariants> {
  title: string
  description?: string
  icon?: LucideIcon
  className?: string
}

function AlertCard({ variant = "insight", title, description, icon, className }: AlertCardProps) {
  const Icon = icon ?? defaultIcons[variant ?? "insight"]

  return (
    <div className={cn(alertCardVariants({ variant }), className)}>
      <Icon size={17} strokeWidth={2} className="mt-0.5 shrink-0" />
      <div>
        <p className="text-[13px] font-semibold">{title}</p>
        {description ? <p className="mt-0.5 text-[12px] opacity-80">{description}</p> : null}
      </div>
    </div>
  )
}

export { AlertCard }
