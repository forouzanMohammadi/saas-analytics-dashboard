import { Trash2 } from "lucide-react"

import { Button } from "@/components/shared/buttons/Button"

interface DangerZoneProps {
  onDelete: () => void
}

export function DangerZone({
  onDelete,
}: DangerZoneProps) {
  return (
    <section className="rounded-2xl border border-(--danger)/25 bg-(--danger-bg)/40">
      <div className="flex items-center gap-2 border-b border-(--danger)/15 px-5 py-3">
        <Trash2 className="size-4 text-(--danger)" />

        <h2 className="text-[13px] font-semibold text-(--danger)">
          Danger zone
        </h2>
      </div>

      <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-[12px] font-medium text-(--text)">
            Delete workspace
          </p>

          <p className="mt-1 max-w-xl text-[10px] leading-4 text-(--text-secondary)">
            Permanently delete this workspace
            and all associated data. This
            action cannot be undone.
          </p>
        </div>

        <Button
          variant="destructive"
          onClick={onDelete}
        >
          Delete workspace
        </Button>
      </div>
    </section>
  )
}