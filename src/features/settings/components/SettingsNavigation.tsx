import {
  Bell,
  Monitor,
  Settings2,
  ShieldCheck,
} from "lucide-react"

import { cn } from "@/lib/utils"

import type {
  SettingsSection,
} from "@/features/settings/data/settingsData"

interface SettingsNavigationProps {
  value: SettingsSection
  onChange: (value: SettingsSection) => void
}

const items = [
  {
    id: "general" as const,
    label: "General",
    icon: Settings2,
  },
  {
    id: "notifications" as const,
    label: "Notifications",
    icon: Bell,
  },
  {
    id: "security" as const,
    label: "Security",
    icon: ShieldCheck,
  },
  {
    id: "appearance" as const,
    label: "Appearance",
    icon: Monitor,
  },
]

export function SettingsNavigation({
  value,
  onChange,
}: SettingsNavigationProps) {
  function scrollTo(
    section: SettingsSection
  ) {
    onChange(section)

    document
      .getElementById(`settings-${section}`)
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
  }

  return (
    <aside className="rounded-2xl border border-(--border) bg-(--surface) p-3">
      <nav className="space-y-1">
        {items.map((item) => {
          const Icon = item.icon
          const active = value === item.id

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollTo(item.id)}
              className={cn(
                "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-[12px] transition-colors",
                active
                  ? "bg-(--primary-bg) font-medium text-(--primary)"
                  : "text-(--text-secondary) hover:bg-(--search-bg) hover:text-(--text)"
              )}
            >
              <Icon className="size-4" />

              {item.label}
            </button>
          )
        })}
      </nav>
    </aside>
  )
}