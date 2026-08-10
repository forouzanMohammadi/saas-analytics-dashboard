import {
  useEffect,
  useState,
  type FormEvent,
} from "react"

import {
  Building2,
  Send,
} from "lucide-react"

import { Button } from "@/components/shared/buttons/Button"
import { Input } from "@/components/shared/forms/Input"
import { Select } from "@/components/shared/forms/Select"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

interface ContactSalesDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onSubmit: () => void
}

export function ContactSalesDialog({
  open,
  onOpenChange,
  onSubmit,
}: ContactSalesDialogProps) {
  const [email, setEmail] =
    useState("")
  const [company, setCompany] =
    useState("")
  const [teamSize, setTeamSize] =
    useState("100-250")

  useEffect(() => {
    if (!open) {
      setEmail("")
      setCompany("")
      setTeamSize("100-250")
    }
  }, [open])

  function handleSubmit(
    event: FormEvent
  ) {
    event.preventDefault()

    if (!email || !company) {
      return
    }

    onSubmit()
    onOpenChange(false)
  }

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="overflow-hidden p-0 sm:max-w-125">
        <form
          onSubmit={handleSubmit}
        >
          <div className="px-6 pt-6">
            <DialogHeader>
              <div className="mb-4 flex size-11 items-center justify-center rounded-xl bg-(--primary-bg) text-(--primary)">
                <Building2 className="size-5" />
              </div>

              <DialogTitle>
                Contact sales
              </DialogTitle>

              <DialogDescription className="mt-1.5">
                Tell us a little about
                your organization and our
                team will get in touch.
              </DialogDescription>
            </DialogHeader>
          </div>

          <div className="space-y-4 px-6 py-5">
            <div className="space-y-1.5">
              <label className="text-[12px] font-medium text-(--text)">
                Work email
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
                required
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[12px] font-medium text-(--text)">
                Company name
              </label>

              <Input
                value={company}
                onChange={(event) =>
                  setCompany(
                    event.target.value
                  )
                }
                placeholder="Acme Inc."
                required
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[12px] font-medium text-(--text)">
                Team size
              </label>

              <Select
                value={teamSize}
                onChange={(event) =>
                  setTeamSize(
                    event.target.value
                  )
                }
              >
                <option value="1-50">
                  1–50
                </option>

                <option value="51-100">
                  51–100
                </option>

                <option value="100-250">
                  100–250
                </option>

                <option value="250-500">
                  250–500
                </option>

                <option value="500+">
                  500+
                </option>
              </Select>
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

            <Button type="submit">
              <Send className="size-4" />
              Send request
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}