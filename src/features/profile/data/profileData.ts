export type TimeFormat = "12h" | "24h"

export interface ProfileData {
  fullName: string
  username: string
  jobTitle: string
  bio: string
  email: string
  language: string
  timezone: string
  dateFormat: string
  timeFormat: TimeFormat
}

export interface ActivityItem {
  id: number
  type: "login" | "password"
  title: string
  meta: string
  current?: boolean
}

export const initialProfile: ProfileData = {
  fullName: "John Doe",
  username: "johndoe",
  jobTitle: "Product Analyst",
  bio: "I help teams turn data into actionable insights.",
  email: "john.doe@acme.com",
  language: "English",
  timezone: "Europe/London",
  dateFormat: "MM/DD/YYYY",
  timeFormat: "12h",
}

export const recentActivity: ActivityItem[] = [
  {
    id: 1,
    type: "login",
    title: "Logged in from Chrome on Windows",
    meta: "Tirana, Albania · Today, 9:42 AM",
    current: true,
  },
  {
    id: 2,
    type: "login",
    title: "Logged in from Safari on iPhone",
    meta: "London, UK · Yesterday, 8:15 PM",
  },
  {
    id: 3,
    type: "login",
    title: "Logged in from Chrome on Mac",
    meta: "Berlin, Germany · May 10, 2026, 10:03 AM",
  },
  {
    id: 4,
    type: "password",
    title: "Password changed",
    meta: "Tirana, Albania · May 2, 2026, 4:22 PM",
  },
]