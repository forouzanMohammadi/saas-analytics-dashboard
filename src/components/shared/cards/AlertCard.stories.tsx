import type { Meta, StoryObj } from "@storybook/react-vite"
import { Sparkles } from "lucide-react"

import { AlertCard } from "./AlertCard"

const meta = {
  title: "Components/Cards/AlertCard",
  component: AlertCard,

  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {
    variant: {
      control: "select",
      options: [
        "insight",
        "warning",
        "success",
        "danger",
      ],
    },

    title: {
      control: "text",
    },

    description: {
      control: "text",
    },

    icon: {
      control: false,
    },

    className: {
      control: false,
    },
  },
} satisfies Meta<typeof AlertCard>

export default meta

type Story = StoryObj<typeof meta>

export const Insight: Story = {
  args: {
    variant: "insight",
    title: "New insight available",
    description:
      "Your conversion rate increased by 12% this week.",
  },
}

export const Warning: Story = {
  args: {
    variant: "warning",
    title: "Usage limit approaching",
    description:
      "You have used 85% of your monthly usage limit.",
  },
}

export const Success: Story = {
  args: {
    variant: "success",
    title: "Payment successful",
    description:
      "Your subscription has been successfully renewed.",
  },
}

export const Danger: Story = {
  args: {
    variant: "danger",
    title: "Payment failed",
    description:
      "We couldn't process your latest payment.",
  },
}

export const CustomIcon: Story = {
  args: {
    variant: "insight",
    title: "Custom notification",
    description:
      "This alert demonstrates a custom icon.",
    icon: Sparkles,
  },
}

export const WithoutDescription: Story = {
  args: {
    variant: "success",
    title: "Changes saved successfully",
  },
}

