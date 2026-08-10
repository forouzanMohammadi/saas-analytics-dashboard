import {
  Activity,
  Clock3,
  Users,
} from "lucide-react"

import type { PricingPlan } from "@/features/pricing/data/pricingData"

interface UsageOverviewProps {
  plan: PricingPlan
  members: number
  monthlyEvents: number
}

function compact(value: number) {
  return Intl.NumberFormat("en-US", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(value)
}

function percent(
  value: number,
  limit: number | null
) {
  if (!limit) return 0

  return Math.min(
    100,
    Math.round((value / limit) * 100)
  )
}

export function UsageOverview({
  plan,
  members,
  monthlyEvents,
}: UsageOverviewProps) {
  return (
    <section>
      <div className="mb-3">
        <h2 className="text-[15px] font-semibold text-(--text)">
          Your usage
        </h2>

        <p className="mt-1 text-[11px] text-(--text-secondary)">
          Track your current {plan.name} plan limits.
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        <UsageCard
          icon={Users}
          label="Team members"
          value={`${members} / ${
            plan.membersLimit ??
            "Unlimited"
          }`}
          progress={percent(
            members,
            plan.membersLimit
          )}
        />

        <UsageCard
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
          progress={percent(
            monthlyEvents,
            plan.monthlyEventsLimit
          )}
        />

        <UsageCard
          icon={Clock3}
          label="Data retention"
          value={plan.retention}
          subtitle="Included"
        />
      </div>
    </section>
  )
}

interface UsageCardProps {
  icon: typeof Users
  label: string
  value: string
  progress?: number
  subtitle?: string
}

function UsageCard({
  icon: Icon,
  label,
  value,
  progress,
  subtitle,
}: UsageCardProps) {
  return (
    <div className="rounded-xl border border-(--border) bg-(--surface) p-4">
      <div className="flex items-center justify-between">
        <p className="text-[11px] text-(--text-secondary)">
          {label}
        </p>

        <div className="flex size-8 items-center justify-center rounded-lg bg-(--primary-bg) text-(--primary)">
          <Icon className="size-4" />
        </div>
      </div>

      <p className="mt-3 text-[16px] font-semibold text-(--text)">
        {value}
      </p>

      {progress !== undefined ? (
        <>
          <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-(--primary-bg)">
            <div
              className="h-full rounded-full bg-(--primary)"
              style={{
                width: `${progress}%`,
              }}
            />
          </div>

          <p className="mt-2 text-[10px] text-(--text-muted)">
            {progress}% used
          </p>
        </>
      ) : (
        <p className="mt-4 text-[10px] text-(--text-muted)">
          {subtitle}
        </p>
      )}
    </div>
  )
}