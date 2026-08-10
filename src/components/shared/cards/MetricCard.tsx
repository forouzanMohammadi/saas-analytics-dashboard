import type { ReactNode } from "react"
import {
  Line,
  LineChart,
  ResponsiveContainer,
} from "recharts"
import { TrendingDown, TrendingUp } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface MetricCardProps {
  title: string
  value: string | number
  className?: string

  // برای compatibility با Storyهای قبلی نگهش می‌داریم
  variant?: "simple" | "trend" | "sparkline"

  trend?: {
    value: string
    isPositive?: boolean
  }

  sparklineData?: number[]
  icon?: ReactNode
}

export function MetricCard({
  title,
  value,
  className,
  variant = "simple",
  trend,
  sparklineData,
  icon,
}: MetricCardProps) {
  const formattedValue =
    typeof value === "number"
      ? value.toLocaleString("en-US")
      : value

  const showTrend = variant === "trend" || Boolean(trend)
  const showSparkline =
    variant === "sparkline" ||
    Boolean(sparklineData?.length)

  return (
    <Card
      className={cn(
        "rounded-2xl border border-(--border) bg-(--surface) shadow-[0_1px_12px_rgba(30,27,46,0.03)] ring-0",
        className
      )}
    >
      <CardContent className="flex h-full flex-col justify-between p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[12px] font-medium text-(--text-secondary)">
              {title}
            </p>

            <p className="mt-1 text-[22px] font-semibold tracking-tight text-(--text)">
              {formattedValue}
            </p>
          </div>

          {!showSparkline && icon ? (
            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-(--primary-bg) text-(--primary)">
              {icon}
            </div>
          ) : null}
        </div>

        <div className="mt-4 flex min-h-8 items-end justify-between gap-3">
          {showTrend && trend ? (
            <div
              className={cn(
                "inline-flex items-center gap-1 rounded-full px-2 py-1 text-[11px] font-medium",
                trend.isPositive
                  ? "bg-(--success-bg) text-(--success)"
                  : "bg-(--danger-bg) text-(--danger)"
              )}
            >
              {trend.isPositive ? (
                <TrendingUp className="size-3" />
              ) : (
                <TrendingDown className="size-3" />
              )}

              {trend.value}
            </div>
          ) : (
            <span />
          )}

          {showSparkline &&
          sparklineData &&
          sparklineData.length > 1 ? (
            <Sparkline data={sparklineData} />
          ) : null}
        </div>
      </CardContent>
    </Card>
  )
}

function Sparkline({ data }: { data: number[] }) {
  const chartData = data.map((value, index) => ({
    index,
    value,
  }))

  return (
    <div className="h-9 w-24 shrink-0">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={chartData}
          margin={{
            top: 3,
            right: 2,
            bottom: 3,
            left: 2,
          }}
        >
          <Line
            type="monotone"
            dataKey="value"
            stroke="var(--primary)"
            strokeWidth={2}
            dot={false}
            isAnimationActive={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}