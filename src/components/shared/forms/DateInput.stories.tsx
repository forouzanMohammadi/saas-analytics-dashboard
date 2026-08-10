import type { Meta, StoryObj } from "@storybook/react-vite"

import { DateInput } from "./DateInput"

const meta = {
  title: "Components/Forms/DateInput",
  component: DateInput,

  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {
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
} satisfies Meta<typeof DateInput>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: "Select a date",
  },
}

export const WithValue: Story = {
  args: {
    value: "2026-08-10",
  },
}

export const WithError: Story = {
  args: {
    value: "2026-08-10",
    error: "Please select a valid date.",
  },
}

export const Disabled: Story = {
  args: {
    value: "2026-08-10",
    disabled: true,
  },
}

