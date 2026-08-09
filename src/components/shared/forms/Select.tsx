// src/components/shared/Select.tsx
import * as React from "react"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

export interface SelectProps extends React.ComponentProps<"select"> {
  error?: string
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, error, disabled, children, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1.5">
        <div className="relative flex items-center">
          <select
            ref={ref}
            data-slot="select"
            disabled={disabled}
            aria-invalid={!!error}
            className={cn(
              "w-full appearance-none rounded-[9px] border-[1.5px] border-[var(--border)] bg-[var(--surface)] px-3 py-2 pr-9 text-sm text-[var(--text)] outline-none transition-colors",
              "focus-visible:border-[var(--primary)] focus-visible:ring-3 focus-visible:ring-[var(--primary)]/20",
              "aria-invalid:border-[var(--danger)] aria-invalid:focus-visible:ring-[var(--danger)]/20",
              "disabled:cursor-not-allowed disabled:border-[var(--border)] disabled:bg-[var(--search-bg)] disabled:text-[var(--text-muted)]",
              className
            )}
            {...props}
          >
            {children}
          </select>
          <ChevronDown className="pointer-events-none absolute right-3 size-4 text-[var(--text-muted)]" />
        </div>
        {error ? <p className="text-xs text-[var(--danger)]">{error}</p> : null}
      </div>
    )
  }
)
Select.displayName = "Select"

export { Select }
