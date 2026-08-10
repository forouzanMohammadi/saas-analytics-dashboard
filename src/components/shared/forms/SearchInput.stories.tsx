import type { Meta, StoryObj } from "@storybook/react-vite"

import { SearchInput } from "./SearchInput"

const meta = {
  title: "Components/Forms/SearchInput",
  component: SearchInput,

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
    placeholder: "Search...",
  },
} satisfies Meta<typeof SearchInput>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithError: Story = {
  args: {
    error: "Search failed. Please try again.",
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

