import { useState } from "react"
import { Download } from "lucide-react"

import { Button } from "@/components/shared/buttons/Button"
import { MetricCard } from "@/components/shared/cards/MetricCard"
import { Tabs } from "@/components/shared/navigation/Tabs"

import {
  dashboardDataByRange,
  transactions,
  type DashboardRange,
} from "@/features/dashboard/data/dashboardData"

import {
  DeviceSplitChart,
  PerformanceCard,
  RevenueOverviewChart,
  TopPagesCard,
  TrafficByChannelChart,
} from "@/features/dashboard/components/DashboardCharts"

import {
  RecentActivity,
  RecentTransactions,
} from "@/features/dashboard/components/DashboardLists"

const rangeTabs = [
  { value: "7d", label: "7d" },
  { value: "30d", label: "30d" },
  { value: "90d", label: "90d" },
  { value: "12m", label: "12m" },
]

export default function Dashboard() {
  const [range, setRange] =
    useState<DashboardRange>("7d")

  const dashboard = dashboardDataByRange[range]

  function handleRangeChange(value: string) {
    setRange(value as DashboardRange)
  }

  function handleExport() {
    const header = [
      "Customer",
      "Email",
      "Amount",
      "Status",
      "Date",
    ]

    const rows = transactions.map((transaction) => [
      transaction.customer,
      transaction.email,
      transaction.amount,
      transaction.status,
      transaction.date,
    ])

    const csv = [header, ...rows]
      .map((row) =>
        row
          .map((cell) => `"${cell.replaceAll('"', '""')}"`)
          .join(",")
      )
      .join("\n")

    const blob = new Blob([csv], {
      type: "text/csv;charset=utf-8",
    })

    const url = URL.createObjectURL(blob)

    const anchor = document.createElement("a")
    anchor.href = url
    anchor.download = `pulse-dashboard-${range}.csv`
    anchor.click()

    URL.revokeObjectURL(url)
  }

  return (
    <div className="mx-auto w-full max-w-[1600px] space-y-5">
      {/* Page header */}
      <section className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-(--text)">
            Good morning, John
          </h1>

          <p className="mt-1 text-sm text-(--text-secondary)">
            Here&apos;s what&apos;s happening with your business today.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Tabs
            items={rangeTabs}
            value={range}
            onChange={handleRangeChange}
          />

          <Button
            variant="secondary"
            onClick={handleExport}
          >
            <Download className="size-4" />
            Export
          </Button>
        </div>
      </section>

      {/* KPI metrics */}
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {dashboard.metrics.map((metric) => (
          <MetricCard
            key={metric.title}
            title={metric.title}
            value={metric.value}
            variant="sparkline"
            trend={{
              value: metric.trend,
              isPositive: metric.positive,
            }}
            sparklineData={metric.sparkline}
            className="min-h-33"
          />
        ))}
      </section>

      {/* Primary analytics */}
      <section className="grid gap-4 xl:grid-cols-[minmax(0,2fr)_minmax(300px,0.9fr)]">
        <RevenueOverviewChart
          data={dashboard.revenue}
        />

        <PerformanceCard />
      </section>

      {/* Secondary analytics */}
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <TrafficByChannelChart />
        <DeviceSplitChart />
        <TopPagesCard />
      </section>

      {/* Operational data */}
      <section className="grid gap-4 xl:grid-cols-[minmax(0,1.65fr)_minmax(320px,0.85fr)]">
        <RecentTransactions />
        <RecentActivity />
      </section>
    </div>
  )
}