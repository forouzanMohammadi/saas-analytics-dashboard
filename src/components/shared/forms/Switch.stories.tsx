import { useState } from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { Switch } from "./Switch"

const meta = {
  title: "Components/Forms/Switch",
  component: Switch,

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
  },

  args: {
    checked: false,
  },
} satisfies Meta<typeof Switch>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(args.checked ?? false)

    return (
      <Switch
        {...args}
        checked={checked}
        onCheckedChange={setChecked}
      />
    )
  },
}

export const Checked: Story = {
  args: {
    checked: true,
  },
  render: (args) => {
    const [checked, setChecked] = useState(args.checked ?? false)

    return (
      <Switch
        {...args}
        checked={checked}
        onCheckedChange={setChecked}
      />
    )
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => {
    const [checked, setChecked] = useState(args.checked ?? false)

    return (
      <Switch
        {...args}
        checked={checked}
        onCheckedChange={setChecked}
      />
    )
  },
}

export const CheckedDisabled: Story = {
  args: {
    checked: true,
    disabled: true,
  },
  render: (args) => {
    const [checked, setChecked] = useState(args.checked ?? false)

    return (
      <Switch
        {...args}
        checked={checked}
        onCheckedChange={setChecked}
      />
    )
  },
}

