import type { Meta, StoryObj } from "@storybook/react-vite"

import { Textarea } from "./Textarea"

const meta = {
  title: "Components/Forms/Textarea",
  component: Textarea,

  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {
    placeholder: {
      control: "text",
    },

    rows: {
      control: {
        type: "number",
        min: 1,
        max: 10,
      },
    },

    disabled: {
      control: "boolean",
    },

    error: {
      control: "text",
    },

    className: {
      control: false,
      table: {
        disable: true,
      },
    },
  },

  args: {
    placeholder: "Write something...",
    rows: 3,
  },
} satisfies Meta<typeof Textarea>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithError: Story = {
  args: {
    error: "This field is required.",
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: "This field is disabled",
  },
}

export const WithContent: Story = {
  args: {
    defaultValue:
      "This is an example of a textarea with some existing content.",
  },
}

