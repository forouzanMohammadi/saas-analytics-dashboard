import type { Meta, StoryObj } from "@storybook/react-vite"
import { fn } from "storybook/test"

import { FileUpload } from "./FileUpload"

const meta = {
  title: "Components/Forms/FileUpload",
  component: FileUpload,

  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  args: {
    onFilesSelected: fn(),
  },

  argTypes: {
    accept: {
      control: "text",
    },

    label: {
      control: "text",
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
} satisfies Meta<typeof FileUpload>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    accept: ".csv",
    label: "Drop a CSV or click to browse",
  },
}

export const ExcelFiles: Story = {
  args: {
    accept: ".xlsx,.xls",
    label: "Drop an Excel file or click to browse",
  },
}

export const Disabled: Story = {
  args: {
    accept: ".csv",
    label: "File upload disabled",
    disabled: true,
  },
}

