import { useState } from "react"

import { AppearanceSettings } from "@/features/settings/components/AppearanceSettings"
import { DangerZone } from "@/features/settings/components/DangerZone"
import { GeneralSettings } from "@/features/settings/components/GeneralSettings"
import { NotificationSettings } from "@/features/settings/components/NotificationSettings"
import { SecuritySettings } from "@/features/settings/components/SecuritySettings"
import { SettingsNavigation } from "@/features/settings/components/SettingsNavigation"

import {
  defaultNotifications,
  type NotificationKey,
  type SettingsSection,
} from "@/features/settings/data/settingsData"

import { useToastStore } from "@/store/toastStore"

export default function Settings() {
  const [activeSection, setActiveSection] =
    useState<SettingsSection>("general")

  const [
    notifications,
    setNotifications,
  ] = useState(defaultNotifications)

  const [density, setDensity] =
    useState<
      "comfortable" |
      "default" |
      "compact"
    >("default")

  const addToast = useToastStore(
    (state) => state.addToast
  )

  function updateNotification(
    key: NotificationKey,
    value: boolean
  ) {
    setNotifications(
      (current) => ({
        ...current,
        [key]: value,
      })
    )

    addToast({
      variant: "success",
      title: "Preference updated",
      description:
        "Your notification preference has been saved.",
    })
  }

  function saveGeneralSettings() {
    addToast({
      variant: "success",
      title: "Settings saved",
      description:
        "Your workspace settings have been updated.",
    })
  }

  function handleSessionRevoked() {
    addToast({
      variant: "success",
      title: "Session revoked",
      description:
        "The selected session has been signed out.",
    })
  }

  function handlePasswordChange() {
    addToast({
      variant: "info",
      title: "Password settings",
      description:
        "Password change dialog will open here.",
    })
  }

  function handleDeleteWorkspace() {
    addToast({
      variant: "warning",
      title: "Confirmation required",
      description:
        "Workspace deletion requires confirmation.",
    })
  }

  return (
    <div className="mx-auto w-full max-w-[1600px] space-y-5">
      {/* Page header */}
      <section>
        <h1 className="text-2xl font-semibold tracking-tight text-(--text)">
          Settings
        </h1>

        <p className="mt-1 text-sm text-(--text-secondary)">
          Manage your workspace preferences
          and account settings.
        </p>
      </section>

      <div className="grid items-start gap-4 lg:grid-cols-[220px_minmax(0,1fr)]">
        {/* Settings navigation */}
        <div className="lg:sticky lg:top-5">
          <SettingsNavigation
            value={activeSection}
            onChange={setActiveSection}
          />
        </div>

        {/* Settings content */}
        <div className="min-w-0 space-y-4">
          <GeneralSettings
            onSave={
              saveGeneralSettings
            }
          />

          <div className="grid items-start gap-4 xl:grid-cols-2">
            <div className="space-y-4">
              <NotificationSettings
                value={notifications}
                onChange={
                  updateNotification
                }
              />

              <AppearanceSettings
                density={density}
                onDensityChange={
                  setDensity
                }
              />
            </div>

            <div className="space-y-4">
              <SecuritySettings
                onPasswordChange={
                  handlePasswordChange
                }
                onSessionRevoked={
                  handleSessionRevoked
                }
              />

              <DangerZone
                onDelete={
                  handleDeleteWorkspace
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}