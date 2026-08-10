import {
  KeyRound,
  Mail,
  ShieldCheck,
} from "lucide-react"

import { Badge } from "@/components/shared/feedback/Badge"
import { Button } from "@/components/shared/buttons/Button"

interface AccountSecurityProps {
  email: string
  twoFactorEnabled: boolean

  onChangeEmail: () => void
  onChangePassword: () => void
  onToggleTwoFactor: () => void
}

export function AccountSecurity({
  email,
  twoFactorEnabled,
  onChangeEmail,
  onChangePassword,
  onToggleTwoFactor,
}: AccountSecurityProps) {
  return (
    <div className="space-y-4">
      {/* Email */}
      <SecurityCard
        icon={Mail}
        title="Email address"
        description="Manage your email address."
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="min-w-0 flex-1 rounded-xl border border-(--border) bg-(--surface) px-3 py-2.5 text-[12px] text-(--text)">
            <p className="truncate">
              {email}
            </p>
          </div>

          <Button
            variant="secondary"
            onClick={onChangeEmail}
          >
            Change email
          </Button>
        </div>
      </SecurityCard>

      {/* Password */}
      <SecurityCard
        icon={KeyRound}
        title="Password"
        description="Ensure your account is using a strong password."
      >
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="tracking-[3px] text-(--text)">
              ••••••••••••
            </p>

            <p className="mt-1 text-[10px] text-(--text-secondary)">
              Last changed 3 months ago
            </p>
          </div>

          <Button
            variant="secondary"
            onClick={onChangePassword}
          >
            Change password
          </Button>
        </div>
      </SecurityCard>

      {/* 2FA */}
      <SecurityCard
        icon={ShieldCheck}
        title="Two-factor authentication"
        description="Add an extra layer of security to your account."
      >
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div
              className={
                twoFactorEnabled
                  ? "flex size-10 items-center justify-center rounded-xl bg-(--success-bg) text-(--success)"
                  : "flex size-10 items-center justify-center rounded-xl bg-(--warning-bg) text-(--warning)"
              }
            >
              <ShieldCheck className="size-4" />
            </div>

            <div>
              <p className="text-[12px] font-medium text-(--text)">
                {twoFactorEnabled
                  ? "2FA is enabled"
                  : "2FA is not enabled"}
              </p>

              <p className="mt-0.5 text-[10px] text-(--text-secondary)">
                {twoFactorEnabled
                  ? "Your account is protected."
                  : "Enable 2FA for additional security."}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Badge
              variant={
                twoFactorEnabled
                  ? "success"
                  : "warning"
              }
              className="hidden sm:inline-flex"
            >
              {twoFactorEnabled
                ? "Enabled"
                : "Disabled"}
            </Badge>

            <Button
              variant="secondary"
              onClick={
                onToggleTwoFactor
              }
            >
              {twoFactorEnabled
                ? "Manage 2FA"
                : "Enable 2FA"}
            </Button>
          </div>
        </div>
      </SecurityCard>
    </div>
  )
}

function SecurityCard({
  icon: Icon,
  title,
  description,
  children,
}: {
  icon: typeof Mail
  title: string
  description: string
  children: React.ReactNode
}) {
  return (
    <section className="rounded-2xl border border-(--border) bg-(--surface) p-5">
      <div className="flex items-start gap-3">
        <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-(--primary-bg) text-(--primary)">
          <Icon className="size-4" />
        </div>

        <div>
          <h2 className="text-[15px] font-semibold text-(--text)">
            {title}
          </h2>

          <p className="mt-1 text-[11px] text-(--text-secondary)">
            {description}
          </p>
        </div>
      </div>

      <div className="mt-5">
        {children}
      </div>
    </section>
  )
}