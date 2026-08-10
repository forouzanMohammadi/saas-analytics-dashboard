import { useState } from "react"
import { Save } from "lucide-react"

import { Button } from "@/components/shared/buttons/Button"
import { Input } from "@/components/shared/forms/Input"
import { Select } from "@/components/shared/forms/Select"

interface GeneralSettingsProps {
  onSave: () => void
}

export function GeneralSettings({
  onSave,
}: GeneralSettingsProps) {
  const [workspaceName, setWorkspaceName] =
    useState("Acme Inc.")

  const [slug, setSlug] =
    useState("acme")

  const [timezone, setTimezone] =
    useState("Europe/London")

  const [language, setLanguage] =
    useState("English")

  return (
    <section
      id="settings-general"
      className="scroll-mt-6 rounded-2xl border border-(--border) bg-(--surface) p-5"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-[15px] font-semibold text-(--text)">
            Workspace profile
          </h2>

          <p className="mt-1 text-[11px] text-(--text-secondary)">
            Update your workspace information and preferences.
          </p>
        </div>

        <Button onClick={onSave}>
          <Save className="size-4" />
          Save changes
        </Button>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <Field label="Workspace name">
          <Input
            value={workspaceName}
            onChange={(event) =>
              setWorkspaceName(
                event.target.value
              )
            }
          />
        </Field>

        <Field label="Workspace URL">
          <div className="flex overflow-hidden rounded-xl border border-(--border) bg-(--surface) focus-within:border-(--primary)">
            <div className="flex items-center bg-(--search-bg) px-3 text-[12px] text-(--text-muted)">
              pulse.app/
            </div>

            <input
              value={slug}
              onChange={(event) =>
                setSlug(event.target.value)
              }
              className="min-w-0 flex-1 bg-transparent px-3 py-2.5 text-[12px] text-(--text) outline-none"
            />
          </div>

          <p className="mt-1 text-[10px] text-(--text-muted)">
            This is your unique workspace slug.
          </p>
        </Field>

        <Field label="Timezone">
          <Select
            value={timezone}
            onChange={(event) =>
              setTimezone(
                event.target.value
              )
            }
          >
            <option value="Europe/London">
              Europe/London
            </option>

            <option value="Europe/Tirana">
              Europe/Tirana
            </option>

            <option value="America/New_York">
              America/New York
            </option>

            <option value="Asia/Dubai">
              Asia/Dubai
            </option>
          </Select>
        </Field>

        <Field label="Language">
          <Select
            value={language}
            onChange={(event) =>
              setLanguage(
                event.target.value
              )
            }
          >
            <option value="English">
              English
            </option>

            <option value="German">
              German
            </option>

            <option value="French">
              French
            </option>
          </Select>
        </Field>
      </div>
    </section>
  )
}

function Field({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="space-y-1.5">
      <label className="text-[11px] font-medium text-(--text)">
        {label}
      </label>

      {children}
    </div>
  )
}