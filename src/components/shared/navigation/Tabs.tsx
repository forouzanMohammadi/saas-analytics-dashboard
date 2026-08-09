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
        "inline-flex items-center gap-0.5 rounded-[10px] bg-(--search-bg) p-0.75",
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
              "rounded-lg px-3.5 py-1.5 text-[12.5px] font-medium transition-colors",
              active
                ? "bg-(--surface) text-(--text) shadow-[0_1px_3px_rgba(30,27,46,0.08)]"
                : "text-(--text-secondary) hover:text-(--text)"
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
