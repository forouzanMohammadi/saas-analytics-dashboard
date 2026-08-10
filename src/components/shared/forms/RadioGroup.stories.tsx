import type { Meta, StoryObj } from "@storybook/react-vite"

import { RadioGroup, RadioItem } from "./RadioGroup"

type RadioGroupStoryProps = {
  defaultValue?: string
  disabled?: boolean
}

function RadioGroupStory({
  defaultValue = "monthly",
  disabled = false,
}: RadioGroupStoryProps) {
  return (
    <RadioGroup defaultValue={defaultValue}>
      <div className="flex flex-col gap-3">
        <label className="flex items-center gap-2 text-sm text-(--text)">
          <RadioItem value="monthly" disabled={disabled} />
          Monthly
        </label>

        <label className="flex items-center gap-2 text-sm text-(--text)">
          <RadioItem value="yearly" disabled={disabled} />
          Yearly
        </label>

        <label className="flex items-center gap-2 text-sm text-(--text)">
          <RadioItem value="lifetime" disabled={disabled} />
          Lifetime
        </label>
      </div>
    </RadioGroup>
  )
}

const meta = {
  title: "Components/Forms/RadioGroup",
  component: RadioGroupStory,

  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {
    defaultValue: {
      control: "select",
      options: ["monthly", "yearly", "lifetime"],
    },

    disabled: {
      control: "boolean",
    },
  },

  args: {
    defaultValue: "monthly",
    disabled: false,
  },
} satisfies Meta<typeof RadioGroupStory>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const YearlySelected: Story = {
  args: {
    defaultValue: "yearly",
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

