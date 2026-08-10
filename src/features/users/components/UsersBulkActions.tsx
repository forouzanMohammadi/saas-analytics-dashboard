import { Trash2 } from "lucide-react"

import { Button } from "@/components/shared/buttons/Button"
import { Select } from "@/components/shared/forms/Select"

import type {
  UserPlan,
  UserRole,
} from "@/features/users/data/usersData"

export interface UsersBulkActionsProps {
  selectedCount: number
  onChangeRole: (role: UserRole) => void
  onChangePlan: (plan: UserPlan) => void
  onSuspend: () => void
  onDelete: () => void
  onClear: () => void
}

export function UsersBulkActions({
  selectedCount,
  onChangeRole,
  onChangePlan,
  onSuspend,
  onDelete,
  onClear,
}: UsersBulkActionsProps) {
  if (!selectedCount) return null

  return (
    <div className="flex flex-col gap-3 border-t border-(--border) bg-(--search-bg)/45 px-4 py-3 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex items-center gap-3">
        <span className="rounded-lg bg-(--primary-bg) px-3 py-1.5 text-xs font-medium text-(--primary-dark)">
          {selectedCount} selected
        </span>

        <Button
          variant="ghost"
          className="h-8 px-2.5 text-xs"
          onClick={onClear}
        >
          Clear
        </Button>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <Select
          defaultValue=""
          className="h-9 min-w-34 py-1.5 text-xs"
          aria-label="Change selected users role"
          onChange={(event) => {
            if (!event.target.value) return

            onChangeRole(
              event.target.value as UserRole
            )

            event.target.value = ""
          }}
        >
          <option value="">
            Change role
          </option>
          <option value="Admin">
            Admin
          </option>
          <option value="Member">
            Member
          </option>
          <option value="Viewer">
            Viewer
          </option>
        </Select>

        <Select
          defaultValue=""
          className="h-9 min-w-34 py-1.5 text-xs"
          aria-label="Change selected users plan"
          onChange={(event) => {
            if (!event.target.value) return

            onChangePlan(
              event.target.value as UserPlan
            )

            event.target.value = ""
          }}
        >
          <option value="">
            Change plan
          </option>
          <option value="Starter">
            Starter
          </option>
          <option value="Growth">
            Growth
          </option>
          <option value="Scale">
            Scale
          </option>
          <option value="Enterprise">
            Enterprise
          </option>
        </Select>

        <Button
          variant="secondary"
          className="h-9 text-xs"
          onClick={onSuspend}
        >
          Suspend
        </Button>

        <Button
          variant="destructive"
          className="h-9 text-xs"
          onClick={onDelete}
        >
          <Trash2 className="size-3.5" />
          Delete
        </Button>
      </div>
    </div>
  )
}