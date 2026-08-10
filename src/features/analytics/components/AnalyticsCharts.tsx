import { useMemo } from "react"
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Funnel,
  FunnelChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip as RechartsTooltip,
  XAxis,
  YAxis,
} from "recharts"

import { Tabs } from "@/components/shared/navigation/Tabs"

import {
  acquisitionData,
  deviceData,
  funnelData,
  type AcquisitionMetric,
  type PerformanceMetric,
  type PerformancePoint,
} from "@/features/analytics/data/analyticsData"

const panelClass =
  "rounded-2xl border border-(--border) bg-(--surface) shadow-[0_1px_12px_rgba(30,27,46,0.03)]"

interface ChartTooltipEntry {
  name?: string
  value?: number | string
  color?: string
}

interface AnalyticsChartTooltipProps {
  active?: boolean
  payload?: readonly ChartTooltipEntry[]
  label?: string
  formatter?: (value: number) => string
}

function AnalyticsChartTooltip({
  active,
  payload,
  label,
  formatter,
}: AnalyticsChartTooltipProps) {
  if (!active || !payload?.length) return null

  return (
    <div className="min-w-40 rounded-xl border border-(--border) bg-(--surface) p-3 shadow-lg">
      {label ? (
        <p className="mb-2 text-[11px] font-medium text-(--text-secondary)">
          {label}
        </p>
      ) : null}

      <div className="space-y-1.5">
        {payload.map((item, index) => {
          const numericValue = Number(item.value)

          return (
            <div
              key={`${item.name}-${index}`}
              className="flex items-center justify-between gap-5"
            >
              <div className="flex items-center gap-2">
                <span
                  className="size-2 rounded-full"
                  style={{
                    backgroundColor:
                      item.color ?? "var(--primary)",
                  }}
                />

                <span className="text-[11px] text-(--text-secondary)">
                  {item.name}
                </span>
              </div>

              <span className="text-[11px] font-medium text-(--text)">
                {formatter
                  ? formatter(numericValue)
                  : numericValue.toLocaleString("en-US")}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

const performanceTabs = [
  { value: "revenue", label: "Revenue" },
  { value: "sessions", label: "Sessions" },
  { value: "users", label: "Users" },
  { value: "conversion", label: "Conversion" },
]

const performanceConfig = {
  revenue: {
    currentKey: "revenue",
    previousKey: "previousRevenue",
    formatter: (value: number) =>
      `$${Math.round(value / 1000)}K`,
  },

  sessions: {
    currentKey: "sessions",
    previousKey: "previousSessions",
    formatter: (value: number) =>
      `${Math.round(value / 1000)}K`,
  },

  users: {
    currentKey: "users",
    previousKey: "previousUsers",
    formatter: (value: number) =>
      `${Math.round(value / 1000)}K`,
  },

  conversion: {
    currentKey: "conversion",
    previousKey: "previousConversion",
    formatter: (value: number) =>
      `${value.toFixed(1)}%`,
  },
} as const

export function PerformanceExplorer({
  data,
  metric,
  onMetricChange,
  showComparison,
}: {
  data: PerformancePoint[]
  metric: PerformanceMetric
  onMetricChange: (value: PerformanceMetric) => void
  showComparison: boolean
}) {
  const config = performanceConfig[metric]

  return (
    <section className={`${panelClass} p-5`}>
      <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
        <div>
          <h2 className="text-[15px] font-semibold text-(--text)">
            Performance over time
          </h2>

          <p className="mt-0.5 text-xs text-(--text-secondary)">
            Explore key metrics across the selected period.
          </p>
        </div>

        <Tabs
          items={performanceTabs}
          value={metric}
          onChange={(value) =>
            onMetricChange(value as PerformanceMetric)
          }
        />
      </div>

      <div className="mt-5 flex items-center gap-5 text-[11px] text-(--text-secondary)">
        <div className="flex items-center gap-1.5">
          <span className="size-2 rounded-full bg-(--primary)" />
          Current period
        </div>

        {showComparison ? (
          <div className="flex items-center gap-1.5">
            <span className="size-2 rounded-full bg-(--primary-light)" />
            Previous period
          </div>
        ) : null}
      </div>

      <div className="mt-4 h-82.5">
        <ResponsiveContainer
          width="100%"
          height="100%"
          minWidth={0}
        >
          <AreaChart
            data={data}
            margin={{
              top: 8,
              right: 8,
              bottom: 4,
              left: 0,
            }}
          >
            <defs>
              <linearGradient
                id="analyticsArea"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor="var(--primary)"
                  stopOpacity={0.18}
                />

                <stop
                  offset="100%"
                  stopColor="var(--primary)"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>

            <CartesianGrid
              vertical={false}
              stroke="var(--border)"
              strokeDasharray="3 3"
            />

            <XAxis
              dataKey="label"
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "var(--text-muted)",
                fontSize: 11,
              }}
              dy={8}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              width={58}
              tick={{
                fill: "var(--text-muted)",
                fontSize: 11,
              }}
              tickFormatter={config.formatter}
            />

            <RechartsTooltip
              cursor={{
                stroke: "var(--border)",
                strokeDasharray: "4 4",
              }}
              content={
                <AnalyticsChartTooltip
                  formatter={config.formatter}
                />
              }
            />

            {showComparison ? (
              <Area
                type="monotone"
                dataKey={config.previousKey}
                name="Previous"
                stroke="var(--primary-light)"
                strokeWidth={2}
                strokeDasharray="5 5"
                fill="transparent"
                dot={false}
              />
            ) : null}

            <Area
              type="monotone"
              dataKey={config.currentKey}
              name="Current"
              stroke="var(--primary)"
              strokeWidth={2.5}
              fill="url(#analyticsArea)"
              dot={false}
              activeDot={{
                r: 4,
                strokeWidth: 2,
                fill: "var(--surface)",
                stroke: "var(--primary)",
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </section>
  )
}

export function ConversionFunnel() {
  const total = funnelData[0].value

  return (
    <section className={`${panelClass} p-5`}>
      <div>
        <h2 className="text-[15px] font-semibold text-(--text)">
          Conversion funnel
        </h2>

        <p className="mt-0.5 text-xs text-(--text-secondary)">
          Visitor progression to paid customer.
        </p>
      </div>

      <div className="mt-4 h-55">
        <ResponsiveContainer
          width="100%"
          height="100%"
          minWidth={0}
        >
          <FunnelChart>
            <RechartsTooltip
              content={
                <AnalyticsChartTooltip
                  formatter={(value) =>
                    value.toLocaleString("en-US")
                  }
                />
              }
            />

            <Funnel
              dataKey="value"
              nameKey="name"
              data={funnelData}
              fill="var(--primary)"
              fillOpacity={0.8}
              stroke="var(--surface)"
              strokeWidth={2}
              isAnimationActive
            />
          </FunnelChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 divide-y divide-(--border)">
        {funnelData.map((item) => {
          const percentage = Math.round(
            (item.value / total) * 100
          )

          return (
            <div
              key={item.name}
              className="flex items-center justify-between py-2.5 first:pt-0"
            >
              <span className="text-xs text-(--text-secondary)">
                {item.name}
              </span>

              <div className="flex items-center gap-3">
                <span className="text-xs font-medium text-(--text)">
                  {item.value.toLocaleString("en-US")}
                </span>

                <span className="min-w-11 rounded-full bg-(--primary-bg) px-2 py-0.5 text-center text-[10px] font-medium text-(--primary-dark)">
                  {percentage}%
                </span>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

const acquisitionTabs = [
  {
    value: "sessions",
    label: "Sessions",
  },
  {
    value: "conversions",
    label: "Conversions",
  },
  {
    value: "revenue",
    label: "Revenue",
  },
]

export function AcquisitionChart({
  metric,
  onMetricChange,
}: {
  metric: AcquisitionMetric
  onMetricChange: (value: AcquisitionMetric) => void
}) {
  const formatter = useMemo(() => {
    if (metric === "revenue") {
      return (value: number) =>
        `$${Math.round(value / 1000)}K`
    }

    return (value: number) =>
      value >= 1000
        ? `${(value / 1000).toFixed(1)}K`
        : value.toLocaleString("en-US")
  }, [metric])

  return (
    <section className={`${panelClass} p-5`}>
      <div>
        <h2 className="text-[15px] font-semibold text-(--text)">
          Traffic acquisition
        </h2>

        <p className="mt-0.5 text-xs text-(--text-secondary)">
          Performance by acquisition channel.
        </p>
      </div>

      <Tabs
        className="mt-4"
        items={acquisitionTabs}
        value={metric}
        onChange={(value) =>
          onMetricChange(value as AcquisitionMetric)
        }
      />

      <div className="mt-4 h-57.5">
        <ResponsiveContainer
          width="100%"
          height="100%"
          minWidth={0}
        >
          <BarChart
            data={acquisitionData}
            layout="vertical"
            margin={{
              top: 0,
              right: 16,
              bottom: 0,
              left: 4,
            }}
          >
            <XAxis
              type="number"
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "var(--text-muted)",
                fontSize: 10,
              }}
              tickFormatter={formatter}
            />

            <YAxis
              type="category"
              dataKey="name"
              axisLine={false}
              tickLine={false}
              width={68}
              tick={{
                fill: "var(--text-secondary)",
                fontSize: 10,
              }}
            />

            <RechartsTooltip
              cursor={{
                fill: "var(--search-bg)",
              }}
              content={
                <AnalyticsChartTooltip
                  formatter={formatter}
                />
              }
            />

            <Bar
              dataKey={metric}
              name={metric}
              fill="var(--primary)"
              radius={[0, 6, 6, 0]}
              maxBarSize={18}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  )
}

export function DeviceBreakdown() {
  return (
    <section className={`${panelClass} p-5`}>
      <div>
        <h2 className="text-[15px] font-semibold text-(--text)">
          Sessions by device
        </h2>

        <p className="mt-0.5 text-xs text-(--text-secondary)">
          Audience device distribution.
        </p>
      </div>

      <div className="mt-5 grid min-h-62.5 grid-cols-1 items-center gap-4 sm:grid-cols-[170px_1fr]">
        <div className="mx-auto h-42.5 w-42.5">
          <ResponsiveContainer
            width="100%"
            height="100%"
            minWidth={0}
          >
            <PieChart>
              <RechartsTooltip
                formatter={(value) => `${Number(value)}%`}
              />

              <Pie
                data={deviceData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={53}
                outerRadius={76}
                paddingAngle={3}
                cornerRadius={5}
                stroke="var(--surface)"
                strokeWidth={2}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="space-y-4">
          {deviceData.map((item) => (
            <div
              key={item.name}
              className="flex items-center justify-between gap-4"
            >
              <div className="flex items-center gap-2">
                <span
                  className="size-2 rounded-full"
                  style={{
                    backgroundColor: item.fill,
                  }}
                />

                <span className="text-xs text-(--text-secondary)">
                  {item.name}
                </span>
              </div>

              <span className="text-xs font-semibold text-(--text)">
                {item.value}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}