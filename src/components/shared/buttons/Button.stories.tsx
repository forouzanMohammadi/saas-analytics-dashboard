import type { Meta, StoryObj } from "@storybook/react-vite"
import { Search, ArrowRight } from "lucide-react"

import { Button } from "./Button"

const meta = {
  title: "Components/Buttons/Button",
  component: Button,

  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {
    variant: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "soft",
        "ghost",
        "destructive",
        "success",
        "warning",
      ],
      description: "Visual style of the button.",
    },

    size: {
      control: "inline-radio",
      options: ["default", "sm", "lg", "icon"],
      description: "Controls the button size.",
    },

    loading: {
      control: "boolean",
      description: "Shows a loading spinner and disables interaction.",
    },

    disabled: {
      control: "boolean",
      description: "Disables the button.",
    },

    children: {
      control: "text",
      description: "Button label.",
    },
  },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

/**
 * Interactive playground for exploring all Button props.
 */
export const Playground: Story = {
  args: {
    children: "Button",
    variant: "primary",
    size: "default",
    loading: false,
    disabled: false,
  },
}

/**
 * All available visual variants.
 */
export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="soft">Soft</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="success">Success</Button>
      <Button variant="warning">Warning</Button>
    </div>
  ),
}

/**
 * Available button sizes.
 */
export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
}

/**
 * Button with a leading icon.
 */
export const WithIcon: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Button>
        <Search />
        Search
      </Button>

      <Button>
        Continue
        <ArrowRight />
      </Button>
    </div>
  ),
}

/**
 * Icon-only button.
 */
export const IconOnly: Story = {
  render: () => (
    <Button
      size="icon"
      aria-label="Search"
    >
      <Search />
    </Button>
  ),
}

/**
 * Loading state.
 */
export const Loading: Story = {
  args: {
    children: "Loading...",
    loading: true,
    variant: "primary",
  },
}

/**
 * Disabled state.
 */
export const Disabled: Story = {
  args: {
    children: "Disabled",
    disabled: true,
    variant: "primary",
  },
}

