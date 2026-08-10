import * as React from "react"
import { CircleAlert } from "lucide-react"

import { Button } from "@/components/shared/buttons/Button"

export interface AuthLayoutProps {
  title: string
  subtitle?: string
  children: React.ReactNode
  footer?: React.ReactNode
}

function AuthLayout({
  title,
  subtitle,
  children,
  footer,
}: AuthLayoutProps) {
  const [showDemoInfo, setShowDemoInfo] = React.useState(false)

  return (
    <div className="relative min-h-screen bg-(--background)">
      {/* Demo information */}
      <div className="fixed right-5 top-5 z-50">
        <Button
          type="button"
          variant="secondary"
          size="icon"
          aria-label="Show demo account information"
          aria-expanded={showDemoInfo}
          onClick={() => setShowDemoInfo((prev) => !prev)}
          className="
          h-9 w-9
          rounded-full
          border-2 border-(--primary)
          bg-(--surface)
          text-(--primary)
          shadow-sm
          hover:bg-(--primary)
         hover:text-white
          "
        >
          <span className="text-[14px] font-bold leading-none">
            !
          </span>
        </Button>

        {showDemoInfo ? (
          <div className="absolute right-0 top-10 w-72 rounded-xl border border-(--border) bg-(--surface) p-4 shadow-[0_8px_30px_rgba(30,27,46,0.10)]">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-(--primary-bg) text-(--primary)">
                <CircleAlert className="h-4 w-4" />
              </div>

              <div className="min-w-0">
                <p className="text-[12.5px] font-semibold text-(--text)">
                  Demo access
                </p>

                <p className="mt-1.5 text-[11.5px] leading-5 text-(--text-secondary)">
                  New accounts created through registration are
                  assigned the{" "}
                  <span className="font-medium text-(--text)">
                    User
                  </span>{" "}
                  role.
                </p>

                <div className="mt-3 rounded-lg bg-(--search-bg) p-2.5">
                  <p className="text-[11px] font-semibold text-(--text)">
                    Admin demo
                  </p>

                  <div className="mt-1.5 space-y-0.5">
                    <p className="text-[11px] text-(--text-secondary)">
                      admin@pulse.dev
                    </p>

                    <p className="text-[11px] text-(--text-secondary)">
                      admin123
                    </p>
                  </div>
                </div>

                <p className="mt-2 text-[10.5px] leading-4 text-(--text-muted)">
                  Sign in with the admin account to explore
                  role-based access and admin features.
                </p>
              </div>
            </div>
          </div>
        ) : null}
      </div>

      <div className="flex min-h-screen items-center justify-center px-4 py-10">
        <div className="w-full max-w-105">
          <div className="mb-7 text-center">
            <div className="text-[22px] font-semibold tracking-tight text-(--text)">
              Pulse
            </div>
          </div>

          <div className="rounded-2xl border border-(--border) bg-(--surface) p-7 shadow-[0_1px_16px_rgba(30,27,46,0.05)]">
            <div className="mb-6 text-center">
              <h1 className="text-[20px] font-semibold text-(--text)">
                {title}
              </h1>

              {subtitle ? (
                <p className="mt-1.5 text-[13px] text-(--text-secondary)">
                  {subtitle}
                </p>
              ) : null}
            </div>

            {children}
          </div>

          {footer ? (
            <p className="mt-5 text-center text-[13px] text-(--text-secondary)">
              {footer}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export { AuthLayout }

