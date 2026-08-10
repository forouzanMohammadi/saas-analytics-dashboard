import { useEffect, useState } from "react"

import { Mail } from "lucide-react"

import { Button } from "@/components/shared/buttons/Button"
import { Input } from "@/components/shared/forms/Input"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

interface ChangeEmailDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  currentEmail: string
  onConfirm: (email: string) => void
}

export function ChangeEmailDialog({
  open,
  onOpenChange,
  currentEmail,
  onConfirm,
}: ChangeEmailDialogProps) {
  const [email, setEmail] =
    useState(currentEmail)

  useEffect(() => {
    if (open) {
      setEmail(currentEmail)
    }
  }, [open, currentEmail])

  const valid =
    email.includes("@") &&
    email.includes(".") &&
    email !== currentEmail

  function handleSubmit(
    event: React.FormEvent
  ) {
    event.preventDefault()

    if (!valid) return

    onConfirm(
      email.trim().toLowerCase()
    )

    onOpenChange(false)
  }

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="overflow-hidden p-0 sm:max-w-120">
        <form onSubmit={handleSubmit}>
          <div className="px-6 pt-6">
            <DialogHeader>
              <div className="mb-4 flex size-11 items-center justify-center rounded-xl bg-(--primary-bg) text-(--primary)">
                <Mail className="size-5" />
              </div>

              <DialogTitle>
                Change email
              </DialogTitle>

              <DialogDescription className="mt-1.5">
                Enter the new email address you want to use for your account.
              </DialogDescription>
            </DialogHeader>
          </div>

          <div className="px-6 py-5">
            <div className="space-y-1.5">
              <label className="text-[11px] font-medium text-(--text)">
                New email address
              </label>

              <Input
                type="email"
                value={email}
                onChange={(event) =>
                  setEmail(
                    event.target.value
                  )
                }
                placeholder="you@company.com"
              />
            </div>
          </div>

          <div className="flex justify-end gap-2 border-t border-(--border) px-6 py-4">
            <Button
              type="button"
              variant="secondary"
              onClick={() =>
                onOpenChange(false)
              }
            >
              Cancel
            </Button>

            <Button
              type="submit"
              disabled={!valid}
            >
              Update email
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}