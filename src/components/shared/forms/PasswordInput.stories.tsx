import type { Meta, StoryObj } from "@storybook/react-vite"

import { PasswordInput } from "./PasswordInput"

const meta = {
  title: "Components/Forms/PasswordInput",
  component: PasswordInput,

  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {
    placeholder: {
      control: "text",
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
    placeholder: "Enter your password",
  },
} satisfies Meta<typeof PasswordInput>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithError: Story = {
  args: {
    error: "Password must be at least 8 characters.",
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: "Password",
  },
}

