import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps extends React.ComponentProps<"input"> {
  error?: string
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, disabled, id, startIcon, endIcon, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1.5">
        <div className="relative flex items-center">
          {startIcon ? (
            <span className="pointer-events-none absolute left-3 flex text-(--text-muted) [&_svg]:size-4">
              {startIcon}
            </span>
          ) : null}
          <input
            ref={ref}
            id={id}
            data-slot="input"
            disabled={disabled}
            aria-invalid={!!error}
            className={cn(
              "w-full rounded-[9px] border-[1.5px] border-(--border) bg-(--surface) px-3 py-2 text-sm text-(--text) outline-none transition-colors",
              "placeholder:text-(--text-muted)",
              "focus-visible:border-(--primary) focus-visible:ring-3 focus-visible:ring-(--primary)/20",
              "aria-invalid:border-(--danger) aria-invalid:focus-visible:ring-(--danger)/20",
              "disabled:cursor-not-allowed disabled:border-(--border) disabled:bg-(--search-bg) disabled:text-(--text-muted)",
              startIcon && "pl-9",
              endIcon && "pr-9",
              className
            )}
            {...props}
          />
          {endIcon ? (
            <span className="absolute right-3 flex text-(--text-muted) [&_svg]:size-4">
              {endIcon}
            </span>
          ) : null}
        </div>
        {error ? <p className="text-xs text-(--danger)">{error}</p> : null}
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
