import {
  Activity,
  Crown,
  Users,
} from "lucide-react"

import { Button } from "@/components/shared/buttons/Button"

import type {
  BillingCycle,
  PricingPlan,
} from "@/features/pricing/data/pricingData"

interface CurrentPlanCardProps {
  plan: PricingPlan
  billingCycle: BillingCycle
  members: number
  monthlyEvents: number
  onManage: () => void
}

function percentage(
  value: number,
  limit: number | null
) {
  if (!limit) return 0

  return Math.min(
    100,
    Math.round((value / limit) * 100)
  )
}

function compact(value: number) {
  return Intl.NumberFormat("en-US", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(value)
}

export function CurrentPlanCard({
  plan,
  billingCycle,
  members,
  monthlyEvents,
  onManage,
}: CurrentPlanCardProps) {
  const price =
    billingCycle === "monthly"
      ? plan.monthlyPrice
      : plan.yearlyMonthlyPrice

  const memberUsage =
    percentage(
      members,
      plan.membersLimit
    )

  const eventUsage =
    percentage(
      monthlyEvents,
      plan.monthlyEventsLimit
    )

  return (
    <section className="rounded-2xl border border-(--border) bg-(--surface) p-5 shadow-[0_1px_12px_rgba(30,27,46,0.025)]">
      <div className="grid gap-5 lg:grid-cols-[1.2fr_.75fr_1fr_1fr_auto] lg:items-center">
        <div className="flex items-center gap-4">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-(--primary-bg) text-(--primary)">
            <Crown className="size-5" />
          </div>

          <div>
            <p className="text-[11px] font-medium text-(--primary)">
              Current plan
            </p>

            <h2 className="mt-1 text-xl font-semibold text-(--text)">
              {plan.name}
            </h2>

            <p className="mt-1 text-[11px] text-(--text-secondary)">
              {plan.description}
            </p>
          </div>
        </div>

        <div>
          {price ? (
            <>
              <div className="flex items-end gap-1">
                <span className="text-2xl font-semibold tracking-tight text-(--text)">
                  ${price}
                </span>

                <span className="mb-0.5 text-[11px] text-(--text-secondary)">
                  / month
                </span>
              </div>

              <p className="mt-1 text-[10px] text-(--text-muted)">
                Next billing: Sep 12, 2026
              </p>
            </>
          ) : (
            <p className="text-xl font-semibold text-(--text)">
              Custom pricing
            </p>
          )}
        </div>

        <UsageItem
          icon={Users}
          label="Team members"
          value={`${members} / ${
            plan.membersLimit ??
            "Unlimited"
          }`}
          percentage={memberUsage}
        />

        <UsageItem
          icon={Activity}
          label="Monthly events"
          value={`${compact(
            monthlyEvents
          )} / ${
            plan.monthlyEventsLimit
              ? compact(
                  plan.monthlyEventsLimit
                )
              : "Custom"
          }`}
          percentage={eventUsage}
        />

        <Button
          variant="secondary"
          onClick={onManage}
        >
          Manage subscription
        </Button>
      </div>
    </section>
  )
}

interface UsageItemProps {
  icon: typeof Users
  label: string
  value: string
  percentage: number
}

function UsageItem({
  icon: Icon,
  label,
  value,
  percentage,
}: UsageItemProps) {
  return (
    <div>
      <div className="flex items-center gap-1.5 text-[10px] text-(--text-secondary)">
        <Icon className="size-3" />
        {label}
      </div>

      <p className="mt-1 text-[12px] font-medium text-(--text)">
        {value}
      </p>

      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-(--primary-bg)">
        <div
          className="h-full rounded-full bg-(--primary)"
          style={{
            width: `${percentage}%`,
          }}
        />
      </div>

      <p className="mt-1.5 text-[10px] text-(--text-muted)">
        {percentage}% used
      </p>
    </div>
  )
}