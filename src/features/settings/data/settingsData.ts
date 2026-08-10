export type SettingsSection =
  | "general"
  | "notifications"
  | "security"
  | "appearance"

export type NotificationKey =
  | "weeklySummary"
  | "usageAlerts"
  | "newMembers"
  | "billingUpdates"
  | "securityAlerts"

export interface NotificationPreferences {
  weeklySummary: boolean
  usageAlerts: boolean
  newMembers: boolean
  billingUpdates: boolean
  securityAlerts: boolean
}

export const defaultNotifications: NotificationPreferences = {
  weeklySummary: true,
  usageAlerts: true,
  newMembers: true,
  billingUpdates: false,
  securityAlerts: true,
}

export const settingsNavigation = [
  {
    id: "general",
    label: "General",
  },
  {
    id: "notifications",
    label: "Notifications",
  },
  {
    id: "security",
    label: "Security",
  },
  {
    id: "appearance",
    label: "Appearance",
  },
] as const

export interface Session {
  id: number
  device: string
  location: string
  lastActive: string
  current?: boolean
}

export const initialSessions: Session[] = [
  {
    id: 1,
    device: "Chrome · Windows",
    location: "Tirana, Albania",
    lastActive: "Now",
    current: true,
  },
  {
    id: 2,
    device: "Safari · iPhone",
    location: "London, UK",
    lastActive: "2 hours ago",
  },
  {
    id: 3,
    device: "Chrome · Mac",
    location: "Berlin, Germany",
    lastActive: "3 days ago",
  },
]