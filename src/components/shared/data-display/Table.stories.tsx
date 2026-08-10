import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "./Table"

const meta = {
  title: "Components/Data Display/Table",
  component: Table,

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
} satisfies Meta<typeof Table>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: null,
  },

  render: () => (
    <div className="w-190">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>User</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Plan</TableHead>
            <TableHead className="text-right">Revenue</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          <TableRow>
            <TableCell className="font-medium">
              Anna Smith
            </TableCell>
            <TableCell>Active</TableCell>
            <TableCell>Pro</TableCell>
            <TableCell className="text-right">
              $1,920
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell className="font-medium">
              Michael Kim
            </TableCell>
            <TableCell>Active</TableCell>
            <TableCell>Enterprise</TableCell>
            <TableCell className="text-right">
              $4,280
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell className="font-medium">
              Sarah Johnson
            </TableCell>
            <TableCell>Inactive</TableCell>
            <TableCell>Free</TableCell>
            <TableCell className="text-right">
              $0
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  ),
}

export const WithLongContent: Story = {
  args: {
    children: null,
  },

  render: () => (
    <div className="w-190">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Customer</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Subscription</TableHead>
            <TableHead className="text-right">
              Monthly Revenue
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          <TableRow>
            <TableCell className="font-medium">
              Alexander Anderson
            </TableCell>
            <TableCell>
              alexander.anderson@example.com
            </TableCell>
            <TableCell>Enterprise</TableCell>
            <TableCell className="text-right">
              $8,420
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell className="font-medium">
              Christopher Williams
            </TableCell>
            <TableCell>
              christopher.williams@example.com
            </TableCell>
            <TableCell>Professional</TableCell>
            <TableCell className="text-right">
              $2,840
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  ),
}

export const Empty: Story = {
  args: {
    children: null,
  },

  render: () => (
    <div className="w-190">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>User</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Plan</TableHead>
            <TableHead className="text-right">
              Revenue
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          <TableRow>
            <TableCell
              colSpan={4}
              className="py-12 text-center text-(--text-secondary)"
            >
              No users found.
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  ),
}

