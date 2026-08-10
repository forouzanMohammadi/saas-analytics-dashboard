import type { Meta, StoryObj } from "@storybook/react-vite"
import { Info } from "lucide-react"

import { Tooltip, TooltipProvider } from "./Tooltip"

type TooltipStoryProps = {
  content: string
  title?: string
  side?: "top" | "right" | "bottom" | "left"
}

function TooltipStory({ content, title, side }: TooltipStoryProps) {
  return (
    <Tooltip
      content={content}
      title={title}
      side={side}
    >
      <button
        type="button"
        className="flex size-9 items-center justify-center rounded-lg border border-(--border) bg-(--surface) text-(--text-secondary) transition-colors hover:bg-(--search-bg)"
      >
        <Info size={18} strokeWidth={1.8} />
      </button>
    </Tooltip>
  )
}

const meta = {
  title: "Components/Feedback/Tooltip",
  component: TooltipStory,

  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  decorators: [
    (Story) => (
      <TooltipProvider>
        <Story />
      </TooltipProvider>
    ),
  ],

  argTypes: {
    content: {
      control: "text",
    },

    title: {
      control: "text",
    },

    side: {
      control: "select",
      options: ["top", "right", "bottom", "left"],
    },
  },
} satisfies Meta<typeof TooltipStory>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    content: "This is a helpful tooltip.",
    side: "top",
  },
}

export const WithTitle: Story = {
  args: {
    title: "More information",
    content: "Additional details about this feature.",
    side: "top",
  },
}

export const Right: Story = {
  args: {
    content: "This tooltip appears on the right.",
    side: "right",
  },
}

export const Bottom: Story = {
  args: {
    content: "This tooltip appears below the trigger.",
    side: "bottom",
  },
}

