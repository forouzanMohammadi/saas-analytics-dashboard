import type { Meta, StoryObj } from "@storybook/react-vite"

import { Checkbox } from "./Checkbox"

const meta = {
  title: "Components/Forms/Checkbox",
  component: Checkbox,

  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {
    checked: {
      control: "boolean",
    },

    disabled: {
      control: "boolean",
    },

    className: {
      control: false,
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof Checkbox>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    checked: false,
  },
}

export const Checked: Story = {
  args: {
    checked: true,
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

export const DisabledChecked: Story = {
  args: {
    disabled: true,
    checked: true,
  },
}

