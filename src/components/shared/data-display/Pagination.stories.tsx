import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"

import { Pagination } from "./Pagination"

const meta = {
  title: "Components/Data Display/Pagination",
  component: Pagination,

  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {
    page: {
      control: "number",
      min: 1,
    },

    totalPages: {
      control: "number",
      min: 1,
    },

    onPageChange: {
      control: false,
      table: {
        disable: true,
      },
    },

    className: {
      control: false,
    },
  },
} satisfies Meta<typeof Pagination>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    page: 1,
    totalPages: 5,
    onPageChange: () => {},
  },
}

export const Interactive: Story = {
  args: {
    page: 1,
    totalPages: 10,
    onPageChange: () => {},
  },

  render: (args) => {
    const [page, setPage] = useState(args.page)

    return (
      <Pagination
        {...args}
        page={page}
        onPageChange={setPage}
      />
    )
  },
}

export const FirstPage: Story = {
  args: {
    page: 1,
    totalPages: 10,
    onPageChange: () => {},
  },
}

export const MiddlePage: Story = {
  args: {
    page: 5,
    totalPages: 10,
    onPageChange: () => {},
  },
}

export const LastPage: Story = {
  args: {
    page: 10,
    totalPages: 10,
    onPageChange: () => {},
  },
}

export const ManyPages: Story = {
  args: {
    page: 12,
    totalPages: 50,
    onPageChange: () => {},
  },
}

