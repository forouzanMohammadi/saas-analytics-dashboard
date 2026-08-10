import { Monitor } from "lucide-react"

import { cn } from "@/lib/utils"

interface AppearanceSettingsProps {
  density: "comfortable" | "default" | "compact"

  onDensityChange: (
    value:
      | "comfortable"
      | "default"
      | "compact"
  ) => void
}

export function AppearanceSettings({
  density,
  onDensityChange,
}: AppearanceSettingsProps) {
  return (
    <section
      id="settings-appearance"
      className="scroll-mt-6 rounded-2xl border border-(--border) bg-(--surface) p-5"
    >
      <div className="flex items-center gap-2">
        <Monitor className="size-4 text-(--primary)" />

        <h2 className="text-[14px] font-semibold text-(--text)">
          Appearance
        </h2>
      </div>

      <div className="mt-5">
        <p className="text-[11px] font-medium text-(--text)">
          Theme
        </p>

        <div className="mt-2 flex gap-2">
          <Option
            active
            label="Light"
          />

          <Option
            label="System"
          />
        </div>
      </div>

      <div className="my-5 h-px bg-(--border)" />

      <div>
        <p className="text-[11px] font-medium text-(--text)">
          Interface density
        </p>

        <div className="mt-2 flex flex-wrap gap-2">
          {(
            [
              "comfortable",
              "default",
              "compact",
            ] as const
          ).map((item) => (
            <Option
              key={item}
              label={
                item.charAt(0).toUpperCase() +
                item.slice(1)
              }
              active={density === item}
              onClick={() =>
                onDensityChange(item)
              }
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function Option({
  label,
  active,
  onClick,
}: {
  label: string
  active?: boolean
  onClick?: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex items-center gap-2 rounded-lg border px-3 py-2 text-[11px] transition",
        active
          ? "border-(--primary)/35 bg-(--primary-bg) text-(--primary-dark)"
          : "border-(--border) bg-(--surface) text-(--text-secondary) hover:bg-(--search-bg)"
      )}
    >
      <span
        className={cn(
          "size-3.5 rounded-full border",
          active
            ? "border-4 border-(--primary)"
            : "border-(--disabled)"
        )}
      />

      {label}
    </button>
  )
}