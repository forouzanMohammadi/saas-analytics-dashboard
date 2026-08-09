import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Loader2 } from "lucide-react"

import { Button as ShadcnButton } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "font-medium transition-all disabled:bg-none disabled:bg-[var(--disabled-bg)] disabled:text-[var(--disabled-text)] disabled:shadow-none",
  {
    variants: {
      variant: {
        primary:
          "bg-[linear-gradient(135deg,var(--primary-lighter),var(--primary-dark))] text-white shadow-sm hover:bg-[linear-gradient(135deg,var(--primary-light),var(--primary))]",
        secondary:
          "border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] hover:bg-[var(--search-bg)]",
        soft: "bg-[var(--primary-bg)] text-[var(--primary-dark)] hover:bg-[var(--primary-soft)]/40",
        ghost:
          "bg-transparent text-[var(--text-secondary)] hover:bg-[var(--search-bg)] hover:text-[var(--text)]",
        destructive:
          "bg-[linear-gradient(135deg,#F87171,var(--danger))] text-white shadow-sm hover:opacity-90",
        success:
          "bg-[linear-gradient(135deg,#34D399,var(--success))] text-white shadow-sm hover:opacity-90",
        warning:
          "bg-[linear-gradient(135deg,#FBBF24,var(--warning))] text-white shadow-sm hover:opacity-90",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
)

export interface ButtonProps
  extends Omit<React.ComponentProps<typeof ShadcnButton>, "variant">,
    VariantProps<typeof buttonVariants> {
  loading?: boolean
}

function Button({
  className,
  variant,
  size = "default",
  loading = false,
  disabled,
  children,
  ...props
}: ButtonProps) {
  return (
    <ShadcnButton
      variant="ghost"
      size={size}
      disabled={disabled || loading}
      className={cn(buttonVariants({ variant }), className)}
      {...props}
    >
      {loading ? <Loader2 className="animate-spin" /> : null}
      {children}
    </ShadcnButton>
  )
}

export { Button, buttonVariants }