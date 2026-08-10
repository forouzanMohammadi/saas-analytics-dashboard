import type { Meta, StoryObj } from "@storybook/react-vite"

import { Badge } from "./Badge"

const meta = {
  title: "Components/Feedback/Badge",
  component: Badge,

  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {
    variant: {
      control: "select",
      options: [
        "success",
        "danger",
        "warning",
        "primary",
        "neutral",
        "solid-primary",
        "solid-dark",
      ],
    },

    children: {
      control: "text",
    },

    className: {
      control: false,
    },
  },
} satisfies Meta<typeof Badge>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: "Active",
    variant: "neutral",
  },
}

export const Success: Story = {
  args: {
    children: "Active",
    variant: "success",
  },
}

export const Danger: Story = {
  args: {
    children: "Failed",
    variant: "danger",
  },
}

export const Warning: Story = {
  args: {
    children: "Pending",
    variant: "warning",
  },
}

export const Primary: Story = {
  args: {
    children: "Pro",
    variant: "primary",
  },
}

export const SolidPrimary: Story = {
  args: {
    children: "Premium",
    variant: "solid-primary",
  },
}

export const SolidDark: Story = {
  args: {
    children: "Admin",
    variant: "solid-dark",
  },
}

export const AllVariants: Story = {
  args: {
    children: "Status",
  },

  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Badge variant="success">Active</Badge>
      <Badge variant="danger">Failed</Badge>
      <Badge variant="warning">Pending</Badge>
      <Badge variant="primary">Pro</Badge>
      <Badge variant="neutral">Draft</Badge>
      <Badge variant="solid-primary">Premium</Badge>
      <Badge variant="solid-dark">Admin</Badge>
    </div>
  ),
}

