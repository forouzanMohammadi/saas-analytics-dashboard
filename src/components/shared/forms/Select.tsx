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
              "w-full appearance-none rounded-[9px] border-[1.5px] border-(--border) bg-(--surface) px-3 py-2 pr-9 text-sm text-(--text) outline-none transition-colors",
              "focus-visible:border-(--primary) focus-visible:ring-3 focus-visible:ring-(--primary)/20",
              "aria-invalid:border-(--danger) aria-invalid:focus-visible:ring-(--danger)/20",
              "disabled:cursor-not-allowed disabled:border-(--border) disabled:bg-(--search-bg) disabled:text-(--text-muted)",
              className
            )}
            {...props}
          >
            {children}
          </select>
          <ChevronDown className="pointer-events-none absolute right-3 size-4 text-(--text-muted)" />
        </div>
        {error ? <p className="text-xs text-(--danger)">{error}</p> : null}
      </div>
    )
  }
)
Select.displayName = "Select"

export { Select }
