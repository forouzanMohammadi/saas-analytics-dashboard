// src/components/shared/Tabs.tsx
import * as React from "react"

import { cn } from "@/lib/utils"

export interface TabItem {
  value: string
  label: string
}

export interface TabsProps {
  items: TabItem[]
  value: string
  onChange: (value: string) => void
  className?: string
}

function Tabs({ items, value, onChange, className }: TabsProps) {
  return (
    <div
      role="tablist"
      className={cn(
        "inline-flex items-center gap-0.5 rounded-[10px] bg-[var(--search-bg)] p-[3px]",
        className
      )}
    >
      {items.map((item) => {
        const active = item.value === value
        return (
          <button
            key={item.value}
            role="tab"
            type="button"
            aria-selected={active}
            onClick={() => onChange(item.value)}
            className={cn(
              "rounded-[8px] px-3.5 py-1.5 text-[12.5px] font-medium transition-colors",
              active
                ? "bg-[var(--surface)] text-[var(--text)] shadow-[0_1px_3px_rgba(30,27,46,0.08)]"
                : "text-[var(--text-secondary)] hover:text-[var(--text)]"
            )}
          >
            {item.label}
          </button>
        )
      })}
    </div>
  )
}

export { Tabs }
