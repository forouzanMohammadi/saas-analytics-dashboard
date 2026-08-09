import * as React from "react"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

export interface TagInputProps {
  value: string[]
  onChange: (tags: string[]) => void
  placeholder?: string
  className?: string
  disabled?: boolean
}

function TagInput({ value, onChange, placeholder = "Add...", className, disabled }: TagInputProps) {
  const [draft, setDraft] = React.useState("")

  function addTag() {
    const tag = draft.trim()
    if (tag && !value.includes(tag)) {
      onChange([...value, tag])
    }
    setDraft("")
  }

  function removeTag(tag: string) {
    onChange(value.filter((t) => t !== tag))
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault()
      addTag()
    } else if (e.key === "Backspace" && draft === "" && value.length > 0) {
      removeTag(value[value.length - 1])
    }
  }

  return (
    <div
      data-slot="tag-input"
      className={cn(
        "flex flex-wrap items-center gap-1.5 rounded-[9px] border-[1.5px] border-(--border) bg-(--surface) px-2.5 py-1.5 transition-colors",
        "focus-within:border-(--primary) focus-within:ring-3 focus-within:ring-(--primary)/20",
        disabled && "cursor-not-allowed bg-(--search-bg) opacity-70",
        className
      )}
    >
      {value.map((tag) => (
        <span
          key={tag}
          className="flex items-center gap-1 rounded-[7px] bg-(--primary-bg) px-2 py-1 text-[11.5px] font-medium text-(--primary-dark)"
        >
          {tag}
          {!disabled && (
            <button
              type="button"
              onClick={() => removeTag(tag)}
              aria-label={`Remove ${tag}`}
              className="flex hover:opacity-70"
            >
              <X size={12} />
            </button>
          )}
        </span>
      ))}
      <input
        value={draft}
        onChange={(e) => setDraft(e.target.value)}
        onKeyDown={handleKeyDown}
        onBlur={addTag}
        disabled={disabled}
        placeholder={value.length === 0 ? placeholder : ""}
        className="min-w-20 flex-1 bg-transparent text-sm text-(--text) outline-none placeholder:text-(--text-muted) disabled:cursor-not-allowed"
      />
    </div>
  )
}

export { TagInput }
