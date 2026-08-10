import type { Meta, StoryObj } from "@storybook/react-vite"
import { Bell } from "lucide-react"

import { NotificationBadge } from "./NotificationBadge"

type NotificationBadgeStoryProps = {
  count: number
  max?: number
}

function NotificationBadgeStory({ count, max }: NotificationBadgeStoryProps) {
  return (
    <NotificationBadge count={count} max={max}>
      <Bell size={22} strokeWidth={1.8} />
    </NotificationBadge>
  )
}

const meta = {
  title: "Components/Feedback/NotificationBadge",
  component: NotificationBadgeStory,

  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {
    count: {
      control: {
        type: "number",
        min: 0,
      },
    },

    max: {
      control: {
        type: "number",
        min: 1,
      },
    },
  },
} satisfies Meta<typeof NotificationBadgeStory>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    count: 3,
    max: 9,
  },
}

export const NoNotifications: Story = {
  args: {
    count: 0,
    max: 9,
  },
}

export const ManyNotifications: Story = {
  args: {
    count: 24,
    max: 9,
  },
}

export const CustomMax: Story = {
  args: {
    count: 125,
    max: 99,
  },
}
