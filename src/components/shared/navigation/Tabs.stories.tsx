import { useState } from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { Tabs } from "./Tabs"

const items = [
  { value: "overview", label: "Overview" },
  { value: "analytics", label: "Analytics" },
  { value: "reports", label: "Reports" },
]

type TabsStoryProps = {
  items: typeof items
  value: string
}

function TabsStory({ items, value: initialValue }: TabsStoryProps) {
  const [value, setValue] = useState(initialValue)

  return (
    <Tabs
      items={items}
      value={value}
      onChange={setValue}
    />
  )
}

const meta = {
  title: "Components/Navigation/Tabs",
  component: TabsStory,

  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {
    items: {
      control: "object",
    },
    value: {
      control: "select",
      options: items.map((item) => item.value),
    },
  },

  args: {
    items,
    value: "overview",
  },
} satisfies Meta<typeof TabsStory>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Analytics: Story = {
  args: {
    value: "analytics",
  },
}

export const Reports: Story = {
  args: {
    value: "reports",
  },
}
