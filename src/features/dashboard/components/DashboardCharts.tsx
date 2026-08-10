import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Pie,
  PieChart,
  ResponsiveContainer,
  Sector,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import { MoreHorizontal } from "lucide-react"

import { Button } from "@/components/shared/buttons/Button"

import {
  deviceData,
  performanceData,
  topPages,
  trafficData,
  type RevenuePoint,
} from "../data/dashboardData"

const panelClass =
  "rounded-2xl border border-(--border) bg-(--surface) shadow-[0_1px_12px_rgba(30,27,46,0.03)]"

interface TooltipEntry {
  name?: string
  value?: number | string
  color?: string
}

interface ChartTooltipProps {
  active?: boolean
  payload?: TooltipEntry[]
  label?: string
  currency?: boolean
}

function ChartTooltip({
  active,
  payload,
  label,
  currency,
}: ChartTooltipProps) {
  if (!active || !payload?.length) {
    return null
  }

  return (
    <div className="min-w-36 rounded-xl border border-(--border) bg-(--surface) p-3 shadow-lg">
      {label ? (
        <p className="mb-2 text-[11px] font-medium text-(--text-secondary)">
          {label}
        </p>
      ) : null}

      <div className="space-y-1.5">
        {payload.map((item, index) => (
          <div
            key={`${item.name}-${index}`}
            className="flex items-center justify-between gap-4"
          >
            <div className="flex items-center gap-2">
              <span
                className="size-2 rounded-full"
                style={{
                  backgroundColor:
                    item.color ?? "var(--primary)",
                }}
              />

              <span className="text-xs text-(--text-secondary)">
                {item.name}
              </span>
            </div>

            <span className="text-xs font-medium text-(--text)">
              {currency ? "$" : ""}
              {Number(item.value).toLocaleString("en-US")}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

function PanelHeader({
  title,
  description,
}: {
  title: string
  description?: string
}) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div>
        <h2 className="text-[15px] font-semibold text-(--text)">
          {title}
        </h2>

        {description ? (
          <p className="mt-0.5 text-xs text-(--text-secondary)">
            {description}
          </p>
        ) : null}
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="size-8 shrink-0"
        aria-label={`More options for ${title}`}
      >
        <MoreHorizontal className="size-4" />
      </Button>
    </div>
  )
}

export function RevenueOverviewChart({
  data,
}: {
  data: RevenuePoint[]
}) {
  return (
    <section className={`${panelClass} p-5`}>
      <div className="flex flex-wrap items-start justify-between gap-4">
        <PanelHeader
          title="Revenue Overview"
          description="Revenue compared with the previous period"
        />

        <div className="ml-auto flex items-center gap-4 pr-10 text-[11px] text-(--text-secondary)">
          <div className="flex items-center gap-1.5">
            <span className="size-2 rounded-sm bg-(--primary)" />
            Revenue
          </div>

          <div className="flex items-center gap-1.5">
            <span className="size-2 rounded-sm bg-(--primary-light)" />
            Previous period
          </div>
        </div>
      </div>

      <div className="mt-6 h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 8,
              right: 4,
              bottom: 0,
              left: -14,
            }}
          >
            <defs>
              <linearGradient
                id="revenueGradient"
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
              tick={{
                fill: "var(--text-muted)",
                fontSize: 11,
              }}
              tickFormatter={(value) =>
                `$${Math.round(Number(value) / 1000)}K`
              }
              width={54}
            />

            <Tooltip
              cursor={{
                stroke: "var(--border)",
                strokeDasharray: "4 4",
              }}
              content={<ChartTooltip currency />}
            />

            <Area
              type="monotone"
              dataKey="previous"
              name="Previous"
              stroke="var(--primary-light)"
              strokeWidth={2}
              strokeDasharray="5 5"
              fill="transparent"
              dot={false}
            />

            <Area
              type="monotone"
              dataKey="revenue"
              name="Revenue"
              stroke="var(--primary)"
              strokeWidth={2.5}
              fill="url(#revenueGradient)"
              dot={false}
              activeDot={{
                r: 4,
                fill: "var(--surface)",
                stroke: "var(--primary)",
                strokeWidth: 2,
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </section>
  )
}

export function PerformanceCard() {
  return (
    <section className={`${panelClass} p-5`}>
      <PanelHeader
        title="Performance"
        description="Your business performance this month"
      />

      <div className="mt-7 space-y-7">
        {performanceData.map((item) => (
          <div key={item.label}>
            <div className="mb-2 flex items-center justify-between gap-3">
              <span className="text-xs text-(--text-secondary)">
                {item.label}
              </span>

              <span className="text-xs font-semibold text-(--text)">
                {item.value}
              </span>
            </div>

            <div className="h-1.5 overflow-hidden rounded-full bg-(--primary-bg)">
              <div
                className="h-full rounded-full bg-(--primary) transition-[width] duration-500"
                style={{
                  width: `${item.progress}%`,
                }}
              />
            </div>

            <p className="mt-2 text-[11px] font-medium text-(--success)">
              ↗ {item.progress}% of target
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export function TrafficByChannelChart() {
  return (
    <section className={`${panelClass} p-5`}>
      <PanelHeader
        title="Traffic by channel"
        description="Sessions by acquisition channel"
      />

      <div className="mt-5 h-55">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={trafficData}
            margin={{
              top: 8,
              right: 0,
              left: -20,
              bottom: 0,
            }}
          >
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "var(--text-muted)",
                fontSize: 10,
              }}
              dy={8}
            />

            <YAxis hide />

            <Tooltip
              cursor={{
                fill: "var(--search-bg)",
              }}
              content={<ChartTooltip />}
            />

            <Bar
              dataKey="value"
              name="Sessions"
              fill="var(--primary)"
              radius={[7, 7, 2, 2]}
              maxBarSize={48}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  )
}

export function DeviceSplitChart() {
  return (
    <section className={`${panelClass} p-5`}>
      <PanelHeader
        title="Device split"
        description="Sessions by device"
      />

      <div className="mt-5 grid min-h-55 grid-cols-[150px_1fr] items-center gap-4">
        <div className="h-40 w-40">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Tooltip content={<ChartTooltip />} />

              <Pie
                data={deviceData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={70}
                paddingAngle={2}
                cornerRadius={5}
                stroke="var(--surface)"
                strokeWidth={2}
                shape={(props) => (
                  <Sector
                    {...props}
                    fill={
                      (
                        props.payload as {
                          color: string
                        }
                      ).color
                    }
                  />
                )}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="space-y-3">
          {deviceData.map((item) => (
            <div
              key={item.name}
              className="flex items-center justify-between gap-4"
            >
              <div className="flex items-center gap-2">
                <span
                  className="size-2 rounded-full"
                  style={{
                    backgroundColor: item.color,
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

export function TopPagesCard() {
  return (
    <section className={`${panelClass} p-5`}>
      <PanelHeader
        title="Top pages"
        description="Most viewed pages"
      />

      <div className="mt-6 space-y-5">
        {topPages.map((page) => (
          <div
            key={page.path}
            className="grid grid-cols-[80px_minmax(0,1fr)_42px] items-center gap-3"
          >
            <span className="truncate text-xs text-(--text-secondary)">
              {page.path}
            </span>

            <div className="h-1.5 overflow-hidden rounded-full bg-(--primary-bg)">
              <div
                className="h-full rounded-full bg-(--primary)"
                style={{
                  width: `${page.value}%`,
                }}
              />
            </div>

            <span className="text-right text-[11px] font-semibold text-(--text)">
              {page.views}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}