// components/shared/MetricCard.tsx
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { TrendingUp, TrendingDown } from "lucide-react"

interface MetricCardProps {
  title: string
  value: string | number
  className?: string
  variant?: "simple" | "trend" | "sparkline"
  trend?: {
    value: string
    isPositive?: boolean
  }
  sparklineData?: number[]
  icon?: React.ReactNode
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
    typeof value === "number" ? value.toLocaleString("en-US") : value

  return (
    <Card
      className={cn(
        "border border-(--border) bg-white shadow-none rounded-2xl ring-0",
        className
      )}
    >
      <CardContent className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="space-y-1.5 min-w-0">
            <p className="text-sm font-medium text-(--text-secondary) truncate">
              {title}
            </p>

            <p className="text-2xl font-semibold tracking-tight text-(--text)">
              {formattedValue}
            </p>

            {variant === "trend" && trend && (
              <div
                className={cn(
                  "inline-flex items-center gap-1 mt-1.5 px-2 py-0.5 rounded-full text-xs font-medium",
                  trend.isPositive
                    ? "bg-emerald-50 text-emerald-600"
                    : "bg-red-50 text-red-600"
                )}
              >
                {trend.isPositive ? (
                  <TrendingUp className="size-3" />
                ) : (
                  <TrendingDown className="size-3" />
                )}
                {trend.value}
              </div>
            )}
          </div>

          {variant === "sparkline" && sparklineData && sparklineData.length > 0 ? (
            <Sparkline data={sparklineData} className="mt-1" />
          ) : (
            icon && (
              <div className="text-(--text-secondary) shrink-0">{icon}</div>
            )
          )}
        </div>
      </CardContent>
    </Card>
  )
}

function Sparkline({
  data,
  className,
}: {
  data: number[]
  className?: string
}) {
  const width = 80
  const height = 32
  const max = Math.max(...data)
  const min = Math.min(...data)
  const range = max - min || 1

  const points = data
    .map((value, i) => {
      const x = (i / (data.length - 1)) * width
      const y = height - ((value - min) / range) * height
      return `${x},${y}`
    })
    .join(" ")

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className={cn("shrink-0", className)}
      fill="none"
    >
      <polyline
        points={points}
        stroke="var(--primary)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}