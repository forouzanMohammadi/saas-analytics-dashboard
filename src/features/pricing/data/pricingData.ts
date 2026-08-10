export type PlanId =
  | "starter"
  | "growth"
  | "scale"
  | "enterprise"

export type BillingCycle =
  | "monthly"
  | "yearly"

export interface PricingPlan {
  id: PlanId
  name: string
  description: string

  monthlyPrice: number | null
  yearlyMonthlyPrice: number | null

  membersLimit: number | null
  monthlyEventsLimit: number | null
  retention: string

  features: string[]
  recommended?: boolean
}

export const planOrder: Record<PlanId, number> = {
  starter: 1,
  growth: 2,
  scale: 3,
  enterprise: 4,
}

export const pricingPlans: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    description: "For individuals and small teams",
    monthlyPrice: 29,
    yearlyMonthlyPrice: 23,

    membersLimit: 5,
    monthlyEventsLimit: 100_000,
    retention: "30 days",

    features: [
      "Up to 5 users",
      "100K monthly events",
      "3 dashboards",
      "30-day data retention",
      "Basic analytics",
      "CSV export",
      "Email support",
    ],
  },

  {
    id: "growth",
    name: "Growth",
    description: "For growing teams",
    monthlyPrice: 99,
    yearlyMonthlyPrice: 79,

    membersLimit: 25,
    monthlyEventsLimit: 1_000_000,
    retention: "12 months",

    features: [
      "Up to 25 users",
      "1M monthly events",
      "Unlimited dashboards",
      "12-month data retention",
      "Funnel analytics",
      "Cohort analysis",
      "CSV export",
      "Priority support",
    ],
  },

  {
    id: "scale",
    name: "Scale",
    description: "For advanced analytics",
    monthlyPrice: 299,
    yearlyMonthlyPrice: 239,

    membersLimit: 100,
    monthlyEventsLimit: 10_000_000,
    retention: "36 months",

    recommended: true,

    features: [
      "Up to 100 users",
      "10M monthly events",
      "Unlimited dashboards",
      "36-month data retention",
      "Advanced analytics",
      "Custom reports",
      "API access",
      "Advanced permissions",
      "Priority support",
    ],
  },

  {
    id: "enterprise",
    name: "Enterprise",
    description: "For large organizations",

    monthlyPrice: null,
    yearlyMonthlyPrice: null,

    membersLimit: null,
    monthlyEventsLimit: null,
    retention: "Custom",

    features: [
      "Unlimited users",
      "Custom event volume",
      "Custom data retention",
      "SSO / SAML",
      "Audit logs",
      "Dedicated workspace",
      "SLA",
      "Dedicated account manager",
    ],
  },
]

export const currentUsage = {
  members: 12,
  monthlyEvents: 684_000,
}

export const comparisonRows = [
  {
    feature: "Team members",
    starter: "5",
    growth: "25",
    scale: "100",
    enterprise: "Unlimited",
  },
  {
    feature: "Monthly events",
    starter: "100K",
    growth: "1M",
    scale: "10M",
    enterprise: "Custom",
  },
  {
    feature: "Data retention",
    starter: "30 days",
    growth: "12 months",
    scale: "36 months",
    enterprise: "Custom",
  },
  {
    feature: "Funnel analytics",
    starter: false,
    growth: true,
    scale: true,
    enterprise: true,
  },
  {
    feature: "Cohort analysis",
    starter: false,
    growth: true,
    scale: true,
    enterprise: true,
  },
  {
    feature: "Custom reports",
    starter: false,
    growth: false,
    scale: true,
    enterprise: true,
  },
  {
    feature: "API access",
    starter: false,
    growth: false,
    scale: true,
    enterprise: true,
  },
  {
    feature: "SSO / SAML",
    starter: false,
    growth: false,
    scale: false,
    enterprise: true,
  },
  {
    feature: "Audit logs",
    starter: false,
    growth: false,
    scale: false,
    enterprise: true,
  },
]