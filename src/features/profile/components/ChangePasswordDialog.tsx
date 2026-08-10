import { useState } from "react"

import { KeyRound } from "lucide-react"

import { Button } from "@/components/shared/buttons/Button"
import { PasswordInput } from "@/components/shared/forms/PasswordInput"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

interface ChangePasswordDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onConfirm: () => void
}

export function ChangePasswordDialog({
  open,
  onOpenChange,
  onConfirm,
}: ChangePasswordDialogProps) {
  const [currentPassword, setCurrentPassword] =
    useState("")

  const [newPassword, setNewPassword] =
    useState("")

  const [confirmPassword, setConfirmPassword] =
    useState("")

  const passwordsMatch =
    newPassword === confirmPassword

  const valid =
    currentPassword.length > 0 &&
    newPassword.length >= 8 &&
    passwordsMatch

  function handleSubmit(
    event: React.FormEvent
  ) {
    event.preventDefault()

    if (!valid) return

    onConfirm()

    setCurrentPassword("")
    setNewPassword("")
    setConfirmPassword("")

    onOpenChange(false)
  }

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="overflow-hidden p-0 sm:max-w-125">
        <form onSubmit={handleSubmit}>
          <div className="px-6 pt-6">
            <DialogHeader>
              <div className="mb-4 flex size-11 items-center justify-center rounded-xl bg-(--primary-bg) text-(--primary)">
                <KeyRound className="size-5" />
              </div>

              <DialogTitle>
                Change password
              </DialogTitle>

              <DialogDescription className="mt-1.5">
                Choose a strong password you haven&apos;t used before.
              </DialogDescription>
            </DialogHeader>
          </div>

          <div className="space-y-4 px-6 py-5">
            <Field label="Current password">
              <PasswordInput
                value={currentPassword}
                onChange={(event) =>
                  setCurrentPassword(
                    event.target.value
                  )
                }
              />
            </Field>

            <Field label="New password">
              <PasswordInput
                value={newPassword}
                onChange={(event) =>
                  setNewPassword(
                    event.target.value
                  )
                }
              />

              {newPassword.length > 0 &&
              newPassword.length < 8 ? (
                <p className="mt-1 text-[10px] text-(--danger)">
                  Password must contain at least 8 characters.
                </p>
              ) : null}
            </Field>

            <Field label="Confirm new password">
              <PasswordInput
                value={confirmPassword}
                onChange={(event) =>
                  setConfirmPassword(
                    event.target.value
                  )
                }
              />

              {confirmPassword &&
              !passwordsMatch ? (
                <p className="mt-1 text-[10px] text-(--danger)">
                  Passwords do not match.
                </p>
              ) : null}
            </Field>
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
              Update password
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

function Field({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="space-y-1.5">
      <label className="text-[11px] font-medium text-(--text)">
        {label}
      </label>

      {children}
    </div>
  )
}