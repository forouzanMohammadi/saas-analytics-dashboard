import type { Meta, StoryObj } from "@storybook/react-vite"
import { BarChart3, Plus } from "lucide-react"

import { EmptyState } from "./EmptyState"
import { Button } from "../buttons/Button"

const meta = {
  title: "Components/Cards/EmptyState",
  component: EmptyState,

  parameters: {
    layout: "fullscreen",
  },

  tags: ["autodocs"],

  argTypes: {
    title: {
      control: "text",
    },

    description: {
      control: "text",
    },

    icon: {
      control: false,
    },

    action: {
      control: false,
    },

    className: {
      control: false,
    },
  },
} satisfies Meta<typeof EmptyState>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: "No data available",
    description:
      "There is no data to display yet. Start by adding your first item.",
  },

  render: (args) => (
    <EmptyState
      {...args}
      icon={<BarChart3 size={40} strokeWidth={1.6} />}
    />
  ),
}

export const WithAction: Story = {
  args: {
    title: "No projects yet",
    description:
      "Create your first project to start tracking your analytics.",
  },

  render: (args) => (
    <EmptyState
      {...args}
      icon={<BarChart3 size={40} strokeWidth={1.6} />}
      action={
        <Button variant="primary">
          <Plus size={16} />
          Create Project
        </Button>
      }
    />
  ),
}

export const WithoutIcon: Story = {
  args: {
    title: "Nothing here yet",
    description:
      "Once you add some data, it will appear here.",
  },

  render: (args) => <EmptyState {...args} />,
}

