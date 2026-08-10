import { MoreHorizontal } from "lucide-react"

import { Badge } from "@/components/shared/feedback/Badge"
import { Button } from "@/components/shared/buttons/Button"
import { Checkbox } from "@/components/shared/forms/Checkbox"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/shared/data-display/Table"

import type {
  User,
  UserStatus,
} from "@/features/users/data/usersData"

const statusVariant = {
  Active: "success",
  Trial: "primary",
  Invited: "warning",
  Churned: "danger",
  Suspended: "neutral",
} as const

function LastSeenDot({
  minutes,
}: {
  minutes: number
}) {
  const color =
    minutes <= 60
      ? "bg-(--success)"
      : "bg-(--text-muted)"

  return (
    <span
      className={`size-1.5 shrink-0 rounded-full ${color}`}
    />
  )
}

export interface UsersTableProps {
  users: User[]
  selectedIds: Set<number>
  onToggleUser: (id: number) => void
  onToggleAll: (checked: boolean) => void
}

export function UsersTable({
  users,
  selectedIds,
  onToggleUser,
  onToggleAll,
}: UsersTableProps) {
  const selectedOnPage = users.filter((user) =>
    selectedIds.has(user.id)
  ).length

  const allSelected =
    users.length > 0 &&
    selectedOnPage === users.length

  const someSelected =
    selectedOnPage > 0 && !allSelected

  return (
    <Table className="min-w-260">
      <TableHeader>
        <TableRow className="hover:bg-transparent">
          <TableHead className="w-12">
            <Checkbox
              checked={allSelected}
              indeterminate={someSelected}
              onCheckedChange={onToggleAll}
              aria-label="Select all users on this page"
            />
          </TableHead>

          <TableHead>User</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Plan</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Joined</TableHead>
          <TableHead>Last seen</TableHead>
          <TableHead>Spend (MRR)</TableHead>
          <TableHead className="w-16">
            Actions
          </TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {users.length ? (
          users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>
                <Checkbox
                  checked={selectedIds.has(user.id)}
                  onCheckedChange={() =>
                    onToggleUser(user.id)
                  }
                  aria-label={`Select ${user.name}`}
                />
              </TableCell>

              <TableCell>
                <div className="flex items-center gap-3">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-(--avatar-bg) text-[11px] font-semibold text-(--primary-dark)">
                    {user.initials}
                  </div>

                  <div className="min-w-0">
                    <p className="truncate text-[13px] font-medium text-(--text)">
                      {user.name}
                    </p>

                    <p className="truncate text-[11px] text-(--text-secondary)">
                      {user.email}
                    </p>
                  </div>
                </div>
              </TableCell>

              <TableCell>
                {user.role}
              </TableCell>

              <TableCell>
                {user.plan}
              </TableCell>

              <TableCell>
                <Badge
                  variant={
                    statusVariant[
                      user.status as UserStatus
                    ]
                  }
                  className="px-2.5 py-1 text-[10px]"
                >
                  {user.status}
                </Badge>
              </TableCell>

              <TableCell className="whitespace-nowrap text-(--text-secondary)">
                {user.joined}
              </TableCell>

              <TableCell>
                <div className="flex items-center gap-2 whitespace-nowrap text-(--text-secondary)">
                  <LastSeenDot
                    minutes={user.lastSeenMinutes}
                  />
                  {user.lastSeen}
                </div>
              </TableCell>

              <TableCell className="whitespace-nowrap font-medium">
                {user.mrr > 0
                  ? `$${user.mrr} / month`
                  : "$0"}
              </TableCell>

              <TableCell>
                <Button
                  variant="ghost"
                  size="icon"
                  className="size-8"
                  aria-label={`Actions for ${user.name}`}
                >
                  <MoreHorizontal className="size-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell
              colSpan={9}
              className="py-16 text-center text-(--text-secondary)"
            >
              No users match your filters.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  )
}