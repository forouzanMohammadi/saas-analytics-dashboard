import {
  AlertTriangle,
  ArrowDown,
  ArrowUp,
} from "lucide-react"

import { Button } from "@/components/shared/buttons/Button"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

import {
  planOrder,
  type BillingCycle,
  type PricingPlan,
} from "@/features/pricing/data/pricingData"

interface ChangePlanDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void

  currentPlan: PricingPlan
  targetPlan: PricingPlan | null

  billingCycle: BillingCycle

  members: number
  monthlyEvents: number

  onConfirm: (
    plan: PricingPlan
  ) => void
}

export function ChangePlanDialog({
  open,
  onOpenChange,
  currentPlan,
  targetPlan,
  billingCycle,
  members,
  monthlyEvents,
  onConfirm,
}: ChangePlanDialogProps) {
  if (!targetPlan) return null

  const isUpgrade =
    planOrder[targetPlan.id] >
    planOrder[currentPlan.id]

  const exceedsMembers =
    targetPlan.membersLimit !== null &&
    members > targetPlan.membersLimit

  const exceedsEvents =
    targetPlan.monthlyEventsLimit !==
      null &&
    monthlyEvents >
      targetPlan.monthlyEventsLimit

  const downgradeBlocked =
    !isUpgrade &&
    (exceedsMembers ||
      exceedsEvents)

  const currentPrice =
    billingCycle === "monthly"
      ? currentPlan.monthlyPrice
      : currentPlan.yearlyMonthlyPrice

  const newPrice =
    billingCycle === "monthly"
      ? targetPlan.monthlyPrice
      : targetPlan.yearlyMonthlyPrice

  const Icon = isUpgrade
    ? ArrowUp
    : ArrowDown

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="overflow-hidden p-0 sm:max-w-130">
        <div className="px-6 pt-6">
          <DialogHeader>
            <div className="mb-4 flex size-11 items-center justify-center rounded-xl bg-(--primary-bg) text-(--primary)">
              <Icon className="size-5" />
            </div>

            <DialogTitle>
              {isUpgrade
                ? `Upgrade to ${targetPlan.name}`
                : `Downgrade to ${targetPlan.name}`}
            </DialogTitle>

            <DialogDescription className="mt-1.5">
              Review your plan change before confirming.
            </DialogDescription>
          </DialogHeader>
        </div>

        <div className="space-y-4 px-6 py-5">
          <PlanRow
            label="Current plan"
            name={currentPlan.name}
            price={currentPrice}
          />

          <div className="flex justify-center text-(--text-muted)">
            <Icon className="size-4" />
          </div>

          <PlanRow
            label="New plan"
            name={targetPlan.name}
            price={newPrice}
            active
          />

          <div className="h-px bg-(--border)" />

          <div className="flex items-center justify-between">
            <span className="text-[11px] text-(--text-secondary)">
              New monthly total
            </span>

            <span className="text-[13px] font-semibold text-(--text)">
              ${newPrice}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-[11px] text-(--text-secondary)">
              Effective
            </span>

            <span className="text-[11px] font-medium text-(--text)">
              {isUpgrade
                ? "Immediately"
                : "End of billing period"}
            </span>
          </div>

          {downgradeBlocked ? (
            <div className="flex gap-3 rounded-xl border border-(--warning)/20 bg-(--warning-bg) p-4">
              <AlertTriangle className="mt-0.5 size-4 shrink-0 text-(--warning)" />

              <div>
                <p className="text-[12px] font-medium text-(--warning-text)">
                  Usage exceeds plan limits
                </p>

                <div className="mt-2 space-y-1 text-[11px] text-(--text-secondary)">
                  {exceedsMembers ? (
                    <p>
                      • {members} team
                      members —{" "}
                      {targetPlan.name}{" "}
                      supports{" "}
                      {
                        targetPlan.membersLimit
                      }
                    </p>
                  ) : null}

                  {exceedsEvents ? (
                    <p>
                      • Your monthly
                      event usage exceeds
                      this plan&apos;s limit.
                    </p>
                  ) : null}
                </div>
              </div>
            </div>
          ) : null}
        </div>

        <div className="flex items-center justify-end gap-2 border-t border-(--border) px-6 py-4">
          <Button
            variant="secondary"
            onClick={() =>
              onOpenChange(false)
            }
          >
            Cancel
          </Button>

          <Button
            disabled={downgradeBlocked}
            onClick={() =>
              onConfirm(targetPlan)
            }
          >
            {isUpgrade
              ? "Confirm upgrade"
              : "Schedule downgrade"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

function PlanRow({
  label,
  name,
  price,
  active,
}: {
  label: string
  name: string
  price: number | null
  active?: boolean
}) {
  return (
    <div
      className={
        active
          ? "rounded-xl border border-(--primary)/25 bg-(--primary-bg)/40 p-4"
          : "rounded-xl border border-(--border) p-4"
      }
    >
      <p className="text-[10px] text-(--text-secondary)">
        {label}
      </p>

      <div className="mt-1 flex items-center justify-between">
        <span className="text-[13px] font-semibold text-(--text)">
          {name}
        </span>

        <span className="text-[12px] font-medium text-(--text)">
          {price !== null
            ? `$${price} / mo`
            : "Custom"}
        </span>
      </div>
    </div>
  )
}