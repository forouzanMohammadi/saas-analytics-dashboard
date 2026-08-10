import { Select } from "@/components/shared/forms/Select"
import { Tabs } from "@/components/shared/navigation/Tabs"

import type {
  ProfileData,
  TimeFormat,
} from "@/features/profile/data/profileData"

interface ProfilePreferencesProps {
  profile: ProfileData

  onChange: (
    changes: Partial<ProfileData>
  ) => void
}

const timeFormatTabs = [
  {
    value: "12h",
    label: "12-hour",
  },
  {
    value: "24h",
    label: "24-hour",
  },
]

export function ProfilePreferences({
  profile,
  onChange,
}: ProfilePreferencesProps) {
  return (
    <section className="rounded-2xl border border-(--border) bg-(--surface) p-5">
      <div>
        <h2 className="text-[15px] font-semibold text-(--text)">
          Preferences
        </h2>

        <p className="mt-1 text-[11px] text-(--text-secondary)">
          Customize your experience on Pulse.
        </p>
      </div>

      <div className="mt-5 space-y-5">
        <PreferenceRow
          title="Language"
          description="Choose your preferred language."
        >
          <Select
            value={profile.language}
            onChange={(event) =>
              onChange({
                language:
                  event.target.value,
              })
            }
            className="w-full sm:w-68"
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
        </PreferenceRow>

        <PreferenceRow
          title="Timezone"
          description="Select your timezone."
        >
          <Select
            value={profile.timezone}
            onChange={(event) =>
              onChange({
                timezone:
                  event.target.value,
              })
            }
            className="w-full sm:w-68"
          >
            <option value="Europe/London">
              Europe/London
            </option>

            <option value="Europe/Tirana">
              Europe/Tirana
            </option>

            <option value="Asia/Dubai">
              Asia/Dubai
            </option>

            <option value="America/New_York">
              America/New York
            </option>
          </Select>
        </PreferenceRow>

        <PreferenceRow
          title="Date format"
          description="Choose how dates are displayed."
        >
          <Select
            value={profile.dateFormat}
            onChange={(event) =>
              onChange({
                dateFormat:
                  event.target.value,
              })
            }
            className="w-full sm:w-68"
          >
            <option value="MM/DD/YYYY">
              MM/DD/YYYY
            </option>

            <option value="DD/MM/YYYY">
              DD/MM/YYYY
            </option>

            <option value="YYYY-MM-DD">
              YYYY-MM-DD
            </option>
          </Select>
        </PreferenceRow>

        <PreferenceRow
          title="Time format"
          description="Choose how time is displayed."
        >
          <Tabs
            items={timeFormatTabs}
            value={profile.timeFormat}
            onChange={(value) =>
              onChange({
                timeFormat:
                  value as TimeFormat,
              })
            }
          />
        </PreferenceRow>
      </div>
    </section>
  )
}

function PreferenceRow({
  title,
  description,
  children,
}: {
  title: string
  description: string
  children: React.ReactNode
}) {
  return (
    <div className="grid gap-3 sm:grid-cols-[1fr_auto] sm:items-center">
      <div>
        <p className="text-[11px] font-medium text-(--text)">
          {title}
        </p>

        <p className="mt-1 text-[10px] text-(--text-secondary)">
          {description}
        </p>
      </div>

      {children}
    </div>
  )
}