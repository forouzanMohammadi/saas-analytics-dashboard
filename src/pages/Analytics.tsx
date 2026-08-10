import { useMemo, useState } from "react"
import {
  Download,
  GitCompareArrows,
} from "lucide-react"

import { Button } from "@/components/shared/buttons/Button"
import { MetricCard } from "@/components/shared/cards/MetricCard"
import { Select } from "@/components/shared/forms/Select"
import { Tabs } from "@/components/shared/navigation/Tabs"

import {
  AcquisitionChart,
  ConversionFunnel,
  DeviceBreakdown,
  PerformanceExplorer,
} from "@/features/analytics/components/AnalyticsCharts"

import { RetentionHeatmap } from "@/features/analytics/components/RetentionHeatmap"
import { TrafficSourcesTable } from "@/features/analytics/components/TrafficSourcesTable"

import {
  analyticsByRange,
  trafficSources,
  type AcquisitionMetric,
  type AnalyticsRange,
  type PerformanceMetric,
} from "@/features/analytics/data/analyticsData"

const rangeTabs = [
  {
    value: "7d",
    label: "7d",
  },
  {
    value: "30d",
    label: "30d",
  },
  {
    value: "90d",
    label: "90d",
  },
  {
    value: "12m",
    label: "12m",
  },
]

const channelFactors: Record<string, number> = {
  all: 1,
  organic: 0.42,
  paid: 0.24,
  referral: 0.14,
  social: 0.12,
  email: 0.08,
}

const deviceFactors: Record<string, number> = {
  all: 1,
  desktop: 0.62,
  mobile: 0.3,
  tablet: 0.08,
}

const planFactors: Record<string, number> = {
  all: 1,
  starter: 0.32,
  growth: 0.38,
  scale: 0.22,
  enterprise: 0.08,
}

export default function Analytics() {
  const [range, setRange] =
    useState<AnalyticsRange>("7d")

  const [performanceMetric, setPerformanceMetric] =
    useState<PerformanceMetric>("revenue")

  const [acquisitionMetric, setAcquisitionMetric] =
    useState<AcquisitionMetric>("sessions")

  const [compare, setCompare] = useState(true)

  const [channel, setChannel] = useState("all")
  const [device, setDevice] = useState("all")
  const [plan, setPlan] = useState("all")

  const analytics = analyticsByRange[range]

  const filteredPerformance = useMemo(() => {
    const channelFactor =
      channelFactors[channel] ?? 1

    const deviceFactor =
      deviceFactors[device] ?? 1

    const planFactor =
      planFactors[plan] ?? 1

    const factor =
      channelFactor *
      deviceFactor *
      planFactor

    if (factor === 1) {
      return analytics.performance
    }

    return analytics.performance.map(
      (point) => ({
        ...point,

        revenue: Math.round(
          point.revenue * factor
        ),

        previousRevenue: Math.round(
          point.previousRevenue * factor
        ),

        sessions: Math.round(
          point.sessions * factor
        ),

        previousSessions: Math.round(
          point.previousSessions * factor
        ),

        users: Math.round(
          point.users * factor
        ),

        previousUsers: Math.round(
          point.previousUsers * factor
        ),
      })
    )
  }, [
    analytics.performance,
    channel,
    device,
    plan,
  ])

  function handleExport() {
    const headers = [
      "Source",
      "Channel",
      "Sessions",
      "Users",
      "Conversion",
      "Revenue",
      "Change",
    ]

    const rows = trafficSources.map(
      (source) => [
        source.source,
        source.channel,
        source.sessions.toString(),
        source.users.toString(),
        `${source.conversion}%`,
        `$${source.revenue}`,
        `${source.change}%`,
      ]
    )

    const csv = [headers, ...rows]
      .map((row) =>
        row
          .map(
            (value) =>
              `"${value.replaceAll('"', '""')}"`
          )
          .join(",")
      )
      .join("\n")

    const blob = new Blob([csv], {
      type: "text/csv;charset=utf-8",
    })

    const url = URL.createObjectURL(blob)

    const anchor =
      document.createElement("a")

    anchor.href = url
    anchor.download = `pulse-analytics-${range}.csv`

    document.body.appendChild(anchor)

    anchor.click()
    anchor.remove()

    URL.revokeObjectURL(url)
  }

  return (
    <div className="mx-auto w-full max-w-[1600px] space-y-5">
      {/* Header */}
      <section className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-(--text)">
            Analytics
          </h1>

          <p className="mt-1 text-sm text-(--text-secondary)">
            Understand traffic, revenue, and customer
            behavior.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Button
            variant={compare ? "soft" : "secondary"}
            onClick={() =>
              setCompare((current) => !current)
            }
          >
            <GitCompareArrows className="size-4" />

            {compare
              ? "Comparing previous period"
              : "Compare previous period"}
          </Button>

          <Tabs
            items={rangeTabs}
            value={range}
            onChange={(value) =>
              setRange(value as AnalyticsRange)
            }
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

      {/* Filters */}
      <section className="flex flex-wrap gap-3">
        <Select
          value={channel}
          onChange={(event) =>
            setChannel(event.target.value)
          }
          className="min-w-40"
          aria-label="Filter by channel"
        >
          <option value="all">
            All channels
          </option>

          <option value="organic">
            Organic
          </option>

          <option value="paid">
            Paid
          </option>

          <option value="referral">
            Referral
          </option>

          <option value="social">
            Social
          </option>

          <option value="email">
            Email
          </option>
        </Select>

        <Select
          value={device}
          onChange={(event) =>
            setDevice(event.target.value)
          }
          className="min-w-40"
          aria-label="Filter by device"
        >
          <option value="all">
            All devices
          </option>

          <option value="desktop">
            Desktop
          </option>

          <option value="mobile">
            Mobile
          </option>

          <option value="tablet">
            Tablet
          </option>
        </Select>

        <Select
          value={plan}
          onChange={(event) =>
            setPlan(event.target.value)
          }
          className="min-w-40"
          aria-label="Filter by plan"
        >
          <option value="all">
            All plans
          </option>

          <option value="starter">
            Starter
          </option>

          <option value="growth">
            Growth
          </option>

          <option value="scale">
            Scale
          </option>

          <option value="enterprise">
            Enterprise
          </option>
        </Select>
      </section>

      {/* KPIs */}
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {analytics.kpis.map((metric) => (
          <MetricCard
            key={metric.title}
            title={metric.title}
            value={metric.value}
            trend={{
              value: metric.trend,
              isPositive: metric.positive,
            }}
            sparklineData={metric.sparkline}
            variant="sparkline"
            className="min-h-34"
          />
        ))}
      </section>

      {/* Main analytics */}
      <section className="grid gap-4 xl:grid-cols-[minmax(0,1.75fr)_minmax(340px,0.8fr)]">
        <PerformanceExplorer
          data={filteredPerformance}
          metric={performanceMetric}
          onMetricChange={setPerformanceMetric}
          showComparison={compare}
        />

        <ConversionFunnel />
      </section>

      {/* Acquisition */}
      <section className="grid gap-4 xl:grid-cols-[minmax(0,1.3fr)_minmax(320px,0.7fr)]">
        <AcquisitionChart
          metric={acquisitionMetric}
          onMetricChange={setAcquisitionMetric}
        />

        <DeviceBreakdown />
      </section>

      {/* Retention */}
      <RetentionHeatmap />

      {/* Table */}
      <TrafficSourcesTable
        channel={channel}
      />
    </div>
  )
}