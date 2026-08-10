import { Info } from "lucide-react"

import { Tooltip } from "@/components/shared/feedback/Tooltip"
import { retentionData } from "@/features/analytics/data/analyticsData"

const weekLabels = [
  "Week 0",
  "Week 1",
  "Week 2",
  "Week 3",
  "Week 4",
]

function getRetentionBackground(value: number) {
  if (value >= 90) return "var(--primary-dark)"
  if (value >= 70) return "var(--primary)"
  if (value >= 55) return "var(--primary-light)"
  if (value >= 40) return "var(--primary-soft)"

  return "var(--primary-bg)"
}

function getRetentionText(value: number) {
  if (value >= 70) return "#FFFFFF"

  return "var(--primary-dark)"
}

export function RetentionHeatmap() {
  return (
    <section className="rounded-2xl border border-(--border) bg-(--surface) p-5 shadow-[0_1px_12px_rgba(30,27,46,0.03)]">
      <div className="flex items-start gap-2">
        <div>
          <h2 className="text-[15px] font-semibold text-(--text)">
            User retention
          </h2>

          <p className="mt-0.5 text-xs text-(--text-secondary)">
            Weekly cohort retention after first activity.
          </p>
        </div>

        <Tooltip
          title="Cohort retention"
          content="Shows the percentage of users who return in each week after joining."
        >
          <button
            type="button"
            aria-label="About retention cohorts"
            className="mt-0.5 text-(--text-muted) transition-colors hover:text-(--text-secondary)"
          >
            <Info className="size-3.5" />
          </button>
        </Tooltip>
      </div>

      <div className="mt-6 overflow-x-auto">
        <div className="min-w-162.5">
          <div className="grid grid-cols-[110px_80px_repeat(5,minmax(72px,1fr))] gap-2">
            <div />
            <div className="px-2 text-[10px] font-medium text-(--text-muted)">
              Users
            </div>

            {weekLabels.map((week) => (
              <div
                key={week}
                className="px-2 text-center text-[10px] font-medium text-(--text-muted)"
              >
                {week}
              </div>
            ))}

            {retentionData.map((row) => (
              <div
                key={row.cohort}
                className="contents"
              >
                <div className="flex items-center px-2 text-xs font-medium text-(--text)">
                  {row.cohort}
                </div>

                <div className="flex items-center px-2 text-xs text-(--text-secondary)">
                  {row.users.toLocaleString("en-US")}
                </div>

                {row.weeks.map((value, index) => (
                  <div
                    key={`${row.cohort}-${index}`}
                    className="flex h-11 items-center justify-center rounded-lg text-[11px] font-medium"
                    style={
                      value === null
                        ? {
                            backgroundColor:
                              "var(--search-bg)",
                            color:
                              "var(--text-muted)",
                          }
                        : {
                            backgroundColor:
                              getRetentionBackground(value),
                            color:
                              getRetentionText(value),
                          }
                    }
                  >
                    {value === null ? "—" : `${value}%`}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-end gap-2">
        <span className="text-[10px] text-(--text-muted)">
          Lower
        </span>

        <span className="size-4 rounded bg-(--primary-bg)" />
        <span className="size-4 rounded bg-(--primary-soft)" />
        <span className="size-4 rounded bg-(--primary-light)" />
        <span className="size-4 rounded bg-(--primary)" />
        <span className="size-4 rounded bg-(--primary-dark)" />

        <span className="text-[10px] text-(--text-muted)">
          Higher
        </span>
      </div>
    </section>
  )
}