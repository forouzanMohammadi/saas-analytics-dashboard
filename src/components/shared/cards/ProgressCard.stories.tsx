import type { Meta, StoryObj } from "@storybook/react-vite"

import { ProgressCard } from "./ProgressCard"

const meta = {
  title: "Components/Cards/ProgressCard",
  component: ProgressCard,

  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {
    label: {
      control: "text",
      description: "Label displayed above the progress bar.",
    },

    value: {
      control: {
        type: "range",
        min: 0,
        max: 100,
        step: 1,
      },
      description: "Progress value from 0 to 100.",
    },

    subtitle: {
      control: "text",
      description: "Optional supporting text displayed below the progress bar.",
    },

    className: {
      control: false,
    },
  },
} satisfies Meta<typeof ProgressCard>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: {
    label: "Storage Usage",
    value: 68,
    subtitle: "68 GB of 100 GB used",
  },
}

export const Low: Story = {
  args: {
    label: "Storage Usage",
    value: 25,
    subtitle: "25 GB of 100 GB used",
  },
}

export const Medium: Story = {
  args: {
    label: "Storage Usage",
    value: 60,
    subtitle: "60 GB of 100 GB used",
  },
}

export const High: Story = {
  args: {
    label: "Storage Usage",
    value: 85,
    subtitle: "85 GB of 100 GB used",
  },
}

export const Complete: Story = {
  args: {
    label: "Profile Completion",
    value: 100,
    subtitle: "Your profile is complete",
  },
}

export const WithoutSubtitle: Story = {
  args: {
    label: "Project Progress",
    value: 72,
  },
}

export const AboveMaximum: Story = {
  args: {
    label: "Clamped Value",
    value: 120,
    subtitle: "Values above 100 are clamped to 100%",
  },
}

export const BelowMinimum: Story = {
  args: {
    label: "Clamped Value",
    value: -20,
    subtitle: "Values below 0 are clamped to 0%",
  },
}

