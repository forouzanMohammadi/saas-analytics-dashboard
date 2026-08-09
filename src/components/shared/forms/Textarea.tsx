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
            "w-full resize-none rounded-[9px] border-[1.5px] border-(--border) bg-(--surface) px-3 py-2.5 text-sm text-(--text) outline-none transition-colors",
            "placeholder:text-(--text-muted)",
            "focus-visible:border-(--primary) focus-visible:ring-3 focus-visible:ring-(--primary)/20",
            "aria-invalid:border-(--danger) aria-invalid:focus-visible:ring-(--danger)/20",
            "disabled:cursor-not-allowed disabled:border-(--border) disabled:bg-(--search-bg) disabled:text-(--text-muted)",
            className
          )}
          {...props}
        />
        {error ? <p className="text-xs text-(--danger)">{error}</p> : null}
      </div>
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
