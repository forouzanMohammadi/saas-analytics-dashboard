// src/layouts/AuthLayout.tsx
import * as React from "react"
import { Link } from "react-router-dom"

export interface AuthLayoutProps {
  title: string
  subtitle?: string
  children: React.ReactNode
  footer?: React.ReactNode
}

function AuthLayout({ title, subtitle, children, footer }: AuthLayoutProps) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-(--background) px-4 py-10">
      <div className="w-full max-w-[380px]">
        <Link to="/" className="mb-8 flex items-center justify-center gap-2.5">
          <svg width="34" height="34" viewBox="0 0 52 52">
            <rect width="52" height="52" rx="16" fill="var(--primary-bg)" />
            <path
              d="M10 32c4 0 4-14 9-14s5 14 9 14 4-16 10-16 4 10 4 10"
              fill="none"
              stroke="var(--primary-dark)"
              strokeWidth="2.8"
              strokeLinecap="round"
            />
          </svg>
          <span className="text-[19px] font-medium text-(--text)">Pulse</span>
        </Link>

        <div className="rounded-2xl border border-(--border) bg-(--surface) p-7 shadow-[0_1px_16px_rgba(30,27,46,0.05)]">
          <div className="mb-6 text-center">
            <h1 className="text-[20px] font-semibold text-(--text)">{title}</h1>
            {subtitle ? (
              <p className="mt-1.5 text-[13px] text-(--text-secondary)">{subtitle}</p>
            ) : null}
          </div>

          {children}
        </div>

        {footer ? (
          <p className="mt-5 text-center text-[13px] text-(--text-secondary)">{footer}</p>
        ) : null}
      </div>
    </div>
  )
}

export { AuthLayout }
