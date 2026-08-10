import {
  CheckCircle2,
  KeyRound,
  Monitor,
  Smartphone,
} from "lucide-react"

import { Badge } from "@/components/shared/feedback/Badge"
import { Button } from "@/components/shared/buttons/Button"

import {
  recentActivity,
} from "@/features/profile/data/profileData"

export function RecentActivity() {
  return (
    <section className="rounded-2xl border border-(--border) bg-(--surface) p-5">
      <div>
        <h2 className="text-[15px] font-semibold text-(--text)">
          Recent activity
        </h2>

        <p className="mt-1 text-[11px] text-(--text-secondary)">
          Your recent account activity.
        </p>
      </div>

      <div className="mt-5 space-y-4">
        {recentActivity.map(
          (activity, index) => {
            const mobile =
              activity.title
                .toLowerCase()
                .includes("iphone")

            const Icon =
              activity.type === "password"
                ? KeyRound
                : mobile
                  ? Smartphone
                  : activity.current
                    ? CheckCircle2
                    : Monitor

            return (
              <div
                key={activity.id}
                className="flex items-center gap-3"
              >
                <div
                  className={
                    activity.type ===
                    "password"
                      ? "flex size-9 shrink-0 items-center justify-center rounded-xl bg-(--danger-bg) text-(--danger)"
                      : activity.current
                        ? "flex size-9 shrink-0 items-center justify-center rounded-xl bg-(--success-bg) text-(--success)"
                        : "flex size-9 shrink-0 items-center justify-center rounded-xl bg-(--primary-bg) text-(--primary)"
                  }
                >
                  <Icon className="size-4" />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-[11px] font-medium text-(--text)">
                    {activity.title}
                  </p>

                  <p className="mt-0.5 text-[10px] text-(--text-secondary)">
                    {activity.meta}
                  </p>
                </div>

                {activity.current ? (
                  <Badge
                    variant="success"
                    className="shrink-0"
                  >
                    Current session
                  </Badge>
                ) : null}

                {index === 0 ? null : null}
              </div>
            )
          }
        )}
      </div>

      <Button
        variant="secondary"
        className="mt-5 w-full"
      >
        View all activity
      </Button>
    </section>
  )
}