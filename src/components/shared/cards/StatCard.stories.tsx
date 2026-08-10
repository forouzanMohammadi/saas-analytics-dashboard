import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  Users,
  DollarSign,
  ShoppingCart,
  Activity,
} from "lucide-react"

import { StatCard } from "./StatCard"

const meta = {
  title: "Components/Cards/StatCard",
  component: StatCard,

  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {
    icon: {
      control: false,
      description: "Lucide icon displayed inside the card.",
    },

    label: {
      control: "text",
      description: "Short label describing the statistic.",
    },

    value: {
      control: "text",
      description: "Main statistic value.",
    },

    variant: {
      control: "inline-radio",
      options: ["default", "accent"],
      description: "Visual style of the card.",
    },

    className: {
      control: false,
    },
  },
} satisfies Meta<typeof StatCard>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: {
    icon: Users,
    label: "Total Users",
    value: "12,840",
    variant: "default",
  },
}

export const Default: Story = {
  args: {
    icon: Users,
    label: "Total Users",
    value: "12,840",
    variant: "default",
  },
}

export const Accent: Story = {
  args: {
    icon: Activity,
    label: "Active Sessions",
    value: "842",
    variant: "accent",
  },
}

export const Revenue: Story = {
  args: {
    icon: DollarSign,
    label: "Total Revenue",
    value: "$84,290",
    variant: "default",
  },
}

export const Orders: Story = {
  args: {
    icon: ShoppingCart,
    label: "Total Orders",
    value: "3,248",
    variant: "default",
  },
}