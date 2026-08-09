// src/components/shared/Textarea.tsx
import * as React from "react"

import { cn } from "@/lib/utils"

export interface TextareaProps extends React.ComponentProps<"textarea"> {
  error?: string
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, disabled, rows = 3, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1.5">
        <textarea
          ref={ref}
          data-slot="textarea"
          disabled={disabled}
          aria-invalid={!!error}
          rows={rows}
          className={cn(
            "w-full resize-none rounded-[9px] border-[1.5px] border-[var(--border)] bg-[var(--surface)] px-3 py-2.5 text-sm text-[var(--text)] outline-none transition-colors",
            "placeholder:text-[var(--text-muted)]",
            "focus-visible:border-[var(--primary)] focus-visible:ring-3 focus-visible:ring-[var(--primary)]/20",
            "aria-invalid:border-[var(--danger)] aria-invalid:focus-visible:ring-[var(--danger)]/20",
            "disabled:cursor-not-allowed disabled:border-[var(--border)] disabled:bg-[var(--search-bg)] disabled:text-[var(--text-muted)]",
            className
          )}
          {...props}
        />
        {error ? <p className="text-xs text-[var(--danger)]">{error}</p> : null}
      </div>
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
