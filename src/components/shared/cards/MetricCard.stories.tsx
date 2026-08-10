import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  Activity,
  DollarSign,
  Users,
  ShoppingCart,
} from "lucide-react"

import { MetricCard } from "./MetricCard"

const meta = {
  title: "Components/Cards/MetricCard",
  component: MetricCard,

  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {
    title: {
      control: "text",
      description: "Metric label displayed above the value.",
    },

    value: {
      control: "text",
      description: "Main metric value.",
    },

    variant: {
      control: "inline-radio",
      options: ["simple", "trend", "sparkline"],
      description: "Visual presentation of the metric.",
    },

    trend: {
      control: "object",
      description: "Trend information displayed when variant is trend.",
    },

    sparklineData: {
      control: "object",
      description: "Numeric data used to render the sparkline.",
    },

    icon: {
      control: false,
      description: "Optional icon displayed on the right side.",
    },

    className: {
      control: false,
    },
  },
} satisfies Meta<typeof MetricCard>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: {
    title: "Total Revenue",
    value: "$48,290",
    variant: "trend",

    trend: {
      value: "+12.5%",
      isPositive: true,
    },

    sparklineData: [40, 45, 42, 55, 52, 65, 61, 72, 68, 80],
  },
}

export const Simple: Story = {
  args: {
    title: "Total Revenue",
    value: "$48,290",
    variant: "simple",
  },
}

export const WithTrend: Story = {
  args: {
    title: "Monthly Revenue",
    value: "$24,580",
    variant: "trend",
    trend: {
      value: "+12.5%",
      isPositive: true,
    },
  },
}

export const NegativeTrend: Story = {
  args: {
    title: "Churn Rate",
    value: "4.8%",
    variant: "trend",
    trend: {
      value: "-2.1%",
      isPositive: false,
    },
  },
}

export const WithSparkline: Story = {
  args: {
    title: "Active Users",
    value: 12480,
    variant: "sparkline",
    sparklineData: [40, 45, 42, 55, 52, 65, 61, 72, 68, 80],
  },
}

export const WithIcon: Story = {
  args: {
    title: "Total Users",
    value: 12840,
    variant: "simple",
    icon: <Users className="size-5" />,
  },
}

export const Revenue: Story = {
  args: {
    title: "Revenue",
    value: "$84,290",
    variant: "trend",
    trend: {
      value: "+18.4%",
      isPositive: true,
    },
    icon: <DollarSign className="size-5" />,
  },
}

export const Orders: Story = {
  args: {
    title: "Orders",
    value: 3248,
    variant: "sparkline",
    sparklineData: [20, 32, 28, 40, 36, 48, 45, 58, 52, 64],
    icon: <ShoppingCart className="size-5" />,
  },
}

export const ActivityMetric: Story = {
  args: {
    title: "Active Sessions",
    value: 842,
    variant: "simple",
    icon: <Activity className="size-5" />,
  },
}
