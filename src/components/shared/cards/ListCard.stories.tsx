import type { Meta, StoryObj } from "@storybook/react-vite"

import { ListCard, ListCardItem } from "./ListCard"

const meta = {
  title: "Components/Cards/ListCard",
  component: ListCard,

  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {
    className: {
      control: false,
    },

    children: {
      control: false,
    },
  },
} satisfies Meta<typeof ListCard>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: null,
  },

  render: () => (
    <div className="w-105">
      <ListCard>
        <ListCardItem
          avatar="JD"
          title="John Doe"
          subtitle="john@example.com"
          value="$2,480"
        />

        <ListCardItem
          avatar="AS"
          title="Anna Smith"
          subtitle="anna@example.com"
          value="$1,920"
        />

        <ListCardItem
          avatar="MK"
          title="Michael Kim"
          subtitle="michael@example.com"
          value="$1,640"
        />
      </ListCard>
    </div>
  ),
}

export const WithoutValues: Story = {
  args: {
    children: null,
  },

  render: () => (
    <div className="w-105">
      <ListCard>
        <ListCardItem
          avatar="JD"
          title="John Doe"
          subtitle="john@example.com"
        />

        <ListCardItem
          avatar="AS"
          title="Anna Smith"
          subtitle="anna@example.com"
        />

        <ListCardItem
          avatar="MK"
          title="Michael Kim"
          subtitle="michael@example.com"
        />
      </ListCard>
    </div>
  ),
}

export const WithoutSubtitles: Story = {
  args: {
    children: null,
  },

  render: () => (
    <div className="w-105">
      <ListCard>
        <ListCardItem
          avatar="JD"
          title="John Doe"
          value="$2,480"
        />

        <ListCardItem
          avatar="AS"
          title="Anna Smith"
          value="$1,920"
        />

        <ListCardItem
          avatar="MK"
          title="Michael Kim"
          value="$1,640"
        />
      </ListCard>
    </div>
  ),
}

export const SingleItem: Story = {
  args: {
    children: null,
  },

  render: () => (
    <div className="w-105">
      <ListCard>
        <ListCardItem
          avatar="JD"
          title="John Doe"
          subtitle="john@example.com"
          value="$2,480"
        />
      </ListCard>
    </div>
  ),
}

