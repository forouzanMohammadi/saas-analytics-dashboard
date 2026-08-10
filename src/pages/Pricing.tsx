import {
  useMemo,
  useState,
} from "react"

import { Tabs } from "@/components/shared/navigation/Tabs"

import { ChangePlanDialog } from "@/features/pricing/components/ChangePlanDialog"
import { ContactSalesDialog } from "@/features/pricing/components/ContactSalesDialog"
import { CurrentPlanCard } from "@/features/pricing/components/CurrentPlanCard"
import { PlanComparison } from "@/features/pricing/components/PlanComparison"
import { PricingCard } from "@/features/pricing/components/PricingCard"
import { UsageOverview } from "@/features/pricing/components/UsageOverview"

import {
  currentUsage,
  pricingPlans,
  type BillingCycle,
  type PlanId,
  type PricingPlan,
} from "@/features/pricing/data/pricingData"

import { useToastStore } from "@/store/toastStore"

const billingTabs = [
  {
    value: "monthly",
    label: "Monthly",
  },
  {
    value: "yearly",
    label: "Yearly · Save 20%",
  },
]

export default function Pricing() {
  const [billingCycle, setBillingCycle] =
    useState<BillingCycle>("monthly")

  const [currentPlanId, setCurrentPlanId] =
    useState<PlanId>("growth")

  const [
    selectedPlan,
    setSelectedPlan,
  ] = useState<PricingPlan | null>(
    null
  )

  const [
    changePlanOpen,
    setChangePlanOpen,
  ] = useState(false)

  const [
    contactSalesOpen,
    setContactSalesOpen,
  ] = useState(false)

  const addToast = useToastStore(
    (state) => state.addToast
  )

  const currentPlan = useMemo(
    () =>
      pricingPlans.find(
        (plan) =>
          plan.id === currentPlanId
      ) ?? pricingPlans[1],
    [currentPlanId]
  )

  function handleSelectPlan(
    plan: PricingPlan
  ) {
    setSelectedPlan(plan)
    setChangePlanOpen(true)
  }

  function handleConfirmPlan(
    plan: PricingPlan
  ) {
    const previousPlan =
      currentPlan.name

    setCurrentPlanId(plan.id)

    setChangePlanOpen(false)
    setSelectedPlan(null)

    addToast({
      variant: "success",
      title: "Plan updated",
      description: `Your workspace changed from ${previousPlan} to ${plan.name}.`,
    })
  }

  function handleContactSales() {
    addToast({
      variant: "success",
      title: "Request sent",
      description:
        "Our sales team will contact you soon.",
    })
  }

  function handleManageSubscription() {
    document
      .getElementById("pricing-plans")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
  }

  return (
    <div className="mx-auto w-full max-w-[1600px] space-y-5">
      {/* Header */}
      <section className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-(--text)">
            Pricing & plans
          </h1>

          <p className="mt-1 text-sm text-(--text-secondary)">
            Choose the plan that fits
            your team and usage.
          </p>
        </div>

        <Tabs
          items={billingTabs}
          value={billingCycle}
          onChange={(value) =>
            setBillingCycle(
              value as BillingCycle
            )
          }
        />
      </section>

      {/* Current plan */}
      <CurrentPlanCard
        plan={currentPlan}
        billingCycle={billingCycle}
        members={currentUsage.members}
        monthlyEvents={
          currentUsage.monthlyEvents
        }
        onManage={
          handleManageSubscription
        }
      />

      {/* Pricing cards */}
      <section
        id="pricing-plans"
        className="scroll-mt-5"
      >
        <div className="grid items-stretch gap-4 md:grid-cols-2 xl:grid-cols-4">
          {pricingPlans.map(
            (plan) => (
              <PricingCard
                key={plan.id}
                plan={plan}
                currentPlanId={
                  currentPlanId
                }
                billingCycle={
                  billingCycle
                }
                onSelectPlan={
                  handleSelectPlan
                }
                onContactSales={() =>
                  setContactSalesOpen(
                    true
                  )
                }
              />
            )
          )}
        </div>
      </section>

      {/* Bottom content */}
      <section className="grid gap-4 xl:grid-cols-[0.85fr_1.15fr]">
        <UsageOverview
          plan={currentPlan}
          members={
            currentUsage.members
          }
          monthlyEvents={
            currentUsage.monthlyEvents
          }
        />

        <PlanComparison
          currentPlanId={
            currentPlanId
          }
        />
      </section>

      {/* Change plan */}
      <ChangePlanDialog
        open={changePlanOpen}
        onOpenChange={(open) => {
          setChangePlanOpen(open)

          if (!open) {
            setSelectedPlan(null)
          }
        }}
        currentPlan={currentPlan}
        targetPlan={selectedPlan}
        billingCycle={billingCycle}
        members={
          currentUsage.members
        }
        monthlyEvents={
          currentUsage.monthlyEvents
        }
        onConfirm={
          handleConfirmPlan
        }
      />

      {/* Contact sales */}
      <ContactSalesDialog
        open={contactSalesOpen}
        onOpenChange={
          setContactSalesOpen
        }
        onSubmit={
          handleContactSales
        }
      />
    </div>
  )
}