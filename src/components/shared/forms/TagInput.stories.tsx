import * as React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { TagInput } from "./TagInput"

type TagInputStoryProps = {
  initialTags?: string[]
  placeholder?: string
  disabled?: boolean
}

function TagInputStory({
  initialTags = [],
  placeholder = "Add a tag...",
  disabled = false,
}: TagInputStoryProps) {
  const [tags, setTags] = React.useState(initialTags)

  return (
    <div className="w-80">
      <TagInput
        value={tags}
        onChange={setTags}
        placeholder={placeholder}
        disabled={disabled}
      />
    </div>
  )
}

const meta = {
  title: "Components/Forms/TagInput",
  component: TagInputStory,

  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {
    initialTags: {
      control: "object",
    },

    placeholder: {
      control: "text",
    },

    disabled: {
      control: "boolean",
    },
  },

  args: {
    initialTags: [],
    placeholder: "Add a tag...",
    disabled: false,
  },
} satisfies Meta<typeof TagInputStory>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithTags: Story = {
  args: {
    initialTags: ["React", "TypeScript", "Storybook"],
  },
}

export const Disabled: Story = {
  args: {
    initialTags: ["React", "TypeScript"],
    disabled: true,
  },
}

