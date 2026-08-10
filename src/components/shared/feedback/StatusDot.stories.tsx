import type { Meta, StoryObj } from "@storybook/react-vite"

import { StatusDot } from "./StatusDot"

const meta = {
  title: "Components/Feedback/StatusDot",
  component: StatusDot,

  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {
    variant: {
      control: "select",
      options: [
        "online",
        "offline",
        "busy",
        "away",
      ],
    },

    label: {
      control: "text",
    },

    className: {
      control: false,
    },
  },
} satisfies Meta<typeof StatusDot>

export default meta

type Story = StoryObj<typeof meta>

export const Online: Story = {
  args: {
    variant: "online",
    label: "Online",
  },
}

export const Offline: Story = {
  args: {
    variant: "offline",
    label: "Offline",
  },
}

export const Busy: Story = {
  args: {
    variant: "busy",
    label: "Busy",
  },
}

export const Away: Story = {
  args: {
    variant: "away",
    label: "Away",
  },
}

export const AllStatuses: Story = {
  args: {
    variant: "online",
    label: "Online",
  },

  render: () => (
    <div className="flex flex-col gap-3">
      <StatusDot
        variant="online"
        label="Online"
      />

      <StatusDot
        variant="offline"
        label="Offline"
      />

      <StatusDot
        variant="busy"
        label="Busy"
      />

      <StatusDot
        variant="away"
        label="Away"
      />
    </div>
  ),
}
