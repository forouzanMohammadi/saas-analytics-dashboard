import {
  Bell,
  ShieldCheck,
} from "lucide-react"

import { Switch } from "@/components/shared/forms/Switch"

import type {
  NotificationKey,
  NotificationPreferences,
} from "@/features/settings/data/settingsData"

interface NotificationSettingsProps {
  value: NotificationPreferences

  onChange: (
    key: NotificationKey,
    value: boolean
  ) => void
}

export function NotificationSettings({
  value,
  onChange,
}: NotificationSettingsProps) {
  return (
    <section
      id="settings-notifications"
      className="scroll-mt-6 overflow-hidden rounded-2xl border border-(--border) bg-(--surface)"
    >
      <SectionHeader
        icon={Bell}
        title="Notifications"
      />

      <div className="divide-y divide-(--border) px-5">
        <NotificationRow
          title="Email notifications"
          description="Receive a weekly performance report."
          checked={value.weeklySummary}
          onChange={(checked) =>
            onChange(
              "weeklySummary",
              checked
            )
          }
        />

        <NotificationRow
          title="Usage alerts"
          description="Get notified when usage reaches 80%."
          checked={value.usageAlerts}
          onChange={(checked) =>
            onChange(
              "usageAlerts",
              checked
            )
          }
        />

        <NotificationRow
          title="New team members"
          description="Receive a notification when someone joins."
          checked={value.newMembers}
          onChange={(checked) =>
            onChange(
              "newMembers",
              checked
            )
          }
        />

        <NotificationRow
          title="Billing updates"
          description="Receive subscription and billing emails."
          checked={value.billingUpdates}
          onChange={(checked) =>
            onChange(
              "billingUpdates",
              checked
            )
          }
        />

        <div className="flex items-center gap-3 py-4">
          <div className="flex size-8 items-center justify-center rounded-lg bg-(--primary-bg) text-(--primary)">
            <ShieldCheck className="size-4" />
          </div>

          <div className="min-w-0 flex-1">
            <p className="text-[12px] font-medium text-(--text)">
              Security alerts
            </p>

            <p className="mt-0.5 text-[10px] text-(--text-secondary)">
              Important account and login activity.
            </p>
          </div>

          <Switch
            checked
            disabled
          />
        </div>
      </div>
    </section>
  )
}

function NotificationRow({
  title,
  description,
  checked,
  onChange,
}: {
  title: string
  description: string
  checked: boolean
  onChange: (value: boolean) => void
}) {
  return (
    <div className="flex items-center gap-4 py-4">
      <div className="min-w-0 flex-1">
        <p className="text-[12px] font-medium text-(--text)">
          {title}
        </p>

        <p className="mt-0.5 text-[10px] text-(--text-secondary)">
          {description}
        </p>
      </div>

      <Switch
        checked={checked}
        onCheckedChange={onChange}
      />
    </div>
  )
}

function SectionHeader({
  icon: Icon,
  title,
}: {
  icon: typeof Bell
  title: string
}) {
  return (
    <div className="flex items-center gap-2 border-b border-(--border) px-5 py-4">
      <Icon className="size-4 text-(--primary)" />

      <h2 className="text-[14px] font-semibold text-(--text)">
        {title}
      </h2>
    </div>
  )
}