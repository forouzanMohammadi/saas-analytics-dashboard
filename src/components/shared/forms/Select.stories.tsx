import type { Meta, StoryObj } from "@storybook/react-vite"

import { Select } from "./Select"

const meta = {
  title: "Components/Forms/Select",
  component: Select,

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

    children: {
      control: false,
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof Select>

export default meta

type Story = StoryObj<typeof meta>

const options = (
  <>
    <option value="">Select a country</option>
    <option value="us">United States</option>
    <option value="uk">United Kingdom</option>
    <option value="de">Germany</option>
    <option value="fr">France</option>
  </>
)

export const Default: Story = {
  args: {
    defaultValue: "",
  },

  render: (args) => <Select {...args}>{options}</Select>,
}

export const WithValue: Story = {
  args: {
    defaultValue: "de",
  },

  render: (args) => <Select {...args}>{options}</Select>,
}

export const WithError: Story = {
  args: {
    error: "Please select a country.",
  },

  render: (args) => <Select {...args}>{options}</Select>,
}

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: "de",
  },

  render: (args) => <Select {...args}>{options}</Select>,
}

