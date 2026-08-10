import { Check } from "lucide-react"

import { Button } from "@/components/shared/buttons/Button"
import { Badge } from "@/components/shared/feedback/Badge"
import { cn } from "@/lib/utils"

import {
  planOrder,
  type BillingCycle,
  type PlanId,
  type PricingPlan,
} from "@/features/pricing/data/pricingData"

interface PricingCardProps {
  plan: PricingPlan
  currentPlanId: PlanId
  billingCycle: BillingCycle
  onSelectPlan: (plan: PricingPlan) => void
  onContactSales: () => void
}

export function PricingCard({
  plan,
  currentPlanId,
  billingCycle,
  onSelectPlan,
  onContactSales,
}: PricingCardProps) {
  const isCurrent =
    plan.id === currentPlanId

  const isRecommended =
    plan.recommended && !isCurrent

  const isEnterprise =
    plan.id === "enterprise"

  const isUpgrade =
    planOrder[plan.id] >
    planOrder[currentPlanId]

  const price =
    billingCycle === "monthly"
      ? plan.monthlyPrice
      : plan.yearlyMonthlyPrice

  const yearlyTotal =
    plan.yearlyMonthlyPrice
      ? plan.yearlyMonthlyPrice * 12
      : null

  return (
    <article
      className={cn(
        "relative flex h-full flex-col rounded-2xl border bg-(--surface) p-5 transition-shadow",
        "hover:shadow-[0_10px_35px_rgba(30,27,46,0.06)]",

        isCurrent
          ? "border-(--primary)/40"
          : "border-(--border)",

        isRecommended &&
          "border-(--primary)/30 bg-(--primary-bg)/25"
      )}
    >
      <div className="min-h-7">
        {isCurrent ? (
          <Badge variant="primary">
            Current plan
          </Badge>
        ) : isRecommended ? (
          <Badge variant="solid-primary">
            Recommended
          </Badge>
        ) : null}
      </div>

      <div className="mt-3">
        <h3 className="text-[16px] font-semibold text-(--text)">
          {plan.name}
        </h3>

        <p className="mt-1 text-[12px] text-(--text-secondary)">
          {plan.description}
        </p>
      </div>

      <div className="mt-5 min-h-20">
        {isEnterprise ? (
          <>
            <p className="text-3xl font-semibold tracking-tight text-(--text)">
              Custom
            </p>

            <p className="mt-1 text-[11px] text-(--text-secondary)">
              Custom pricing
            </p>
          </>
        ) : (
          <>
            <div className="flex items-end gap-1">
              <span className="text-3xl font-semibold tracking-tight text-(--text)">
                ${price}
              </span>

              <span className="mb-1 text-[11px] text-(--text-secondary)">
                / month
              </span>
            </div>

            {billingCycle === "yearly" &&
            yearlyTotal ? (
              <p className="mt-1 text-[11px] text-(--text-secondary)">
                ${yearlyTotal.toLocaleString()} billed annually
              </p>
            ) : (
              <p className="mt-1 text-[11px] text-(--text-secondary)">
                Billed monthly
              </p>
            )}
          </>
        )}
      </div>

      <div className="my-5 h-px bg-(--border)" />

      <div className="flex-1 space-y-3">
        {plan.features.map((feature) => (
          <div
            key={feature}
            className="flex items-start gap-2.5"
          >
            <Check className="mt-0.5 size-3.5 shrink-0 text-(--primary)" />

            <span className="text-[11px] leading-4 text-(--text)">
              {feature}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-6">
        {isCurrent ? (
          <Button
            variant="soft"
            disabled
            className="w-full"
          >
            Current plan
          </Button>
        ) : isEnterprise ? (
          <Button
            variant="secondary"
            className="w-full"
            onClick={onContactSales}
          >
            Contact sales
          </Button>
        ) : (
          <Button
            variant={
              isUpgrade
                ? "primary"
                : "secondary"
            }
            className="w-full"
            onClick={() =>
              onSelectPlan(plan)
            }
          >
            {isUpgrade
              ? `Upgrade to ${plan.name}`
              : `Downgrade to ${plan.name}`}
          </Button>
        )}
      </div>
    </article>
  )
}