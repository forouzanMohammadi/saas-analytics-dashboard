import type { Meta, StoryObj } from "@storybook/react-vite"
import { Search, Eye } from "lucide-react"

import { Input } from "./Input"

const meta = {
  title: "Components/Forms/Input",
  component: Input,

  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {
    type: {
      control: "select",
      options: [
        "text",
        "email",
        "password",
        "number",
        "search",
        "tel",
        "url",
      ],
    },

    placeholder: {
      control: "text",
    },

    error: {
      control: "text",
    },

    disabled: {
      control: "boolean",
    },

    startIcon: {
      control: false,
      table: {
        disable: true,
      },
    },

    endIcon: {
      control: false,
      table: {
        disable: true,
      },
    },

    className: {
      control: false,
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof Input>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: "Enter your name",
    type: "text",
  },
}

export const WithStartIcon: Story = {
  args: {
    placeholder: "Search...",
    type: "search",
  },

  render: (args) => (
    <Input
      {...args}
      startIcon={<Search size={16} />}
    />
  ),
}

export const WithEndIcon: Story = {
  args: {
    placeholder: "Enter password",
    type: "password",
  },

  render: (args) => (
    <Input
      {...args}
      endIcon={<Eye size={16} />}
    />
  ),
}

export const WithError: Story = {
  args: {
    value: "invalid@email",
    type: "email",
    error: "Please enter a valid email address.",
  },
}

export const Disabled: Story = {
  args: {
    value: "Disabled input",
    disabled: true,
  },
}

