import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const dotVariants = cva("size-[7px] rounded-full", {
  variants: {
    variant: {
      online: "bg-[var(--success)]",
      offline: "bg-[var(--text-muted)]",
      busy: "bg-[var(--danger)]",
      away: "bg-[var(--warning)]",
    },
  },
  defaultVariants: {
    variant: "online",
  },
})

export interface StatusDotProps extends VariantProps<typeof dotVariants> {
  label: string
  className?: string
}

function StatusDot({ variant, label, className }: StatusDotProps) {
  return (
    <span className={cn("inline-flex items-center gap-1.5 text-[12.5px] text-(--text)", className)}>
      <span className={dotVariants({ variant })} />
      {label}
    </span>
  )
}

export { StatusDot }
