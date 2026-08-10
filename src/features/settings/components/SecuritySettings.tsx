import { useState } from "react"

import {
  Laptop,
  LockKeyhole,
  ShieldCheck,
} from "lucide-react"

import { Badge } from "@/components/shared/feedback/Badge"
import { Button } from "@/components/shared/buttons/Button"
import { Switch } from "@/components/shared/forms/Switch"

import {
  initialSessions,
  type Session,
} from "@/features/settings/data/settingsData"

interface SecuritySettingsProps {
  onPasswordChange: () => void
  onSessionRevoked: () => void
}

export function SecuritySettings({
  onPasswordChange,
  onSessionRevoked,
}: SecuritySettingsProps) {
  const [twoFactor, setTwoFactor] =
    useState(false)

  const [sessions, setSessions] =
    useState<Session[]>(
      initialSessions
    )

  function revokeSession(id: number) {
    setSessions((current) =>
      current.filter(
        (session) =>
          session.id !== id
      )
    )

    onSessionRevoked()
  }

  function revokeOthers() {
    setSessions((current) =>
      current.filter(
        (session) =>
          session.current
      )
    )

    onSessionRevoked()
  }

  return (
    <section
      id="settings-security"
      className="scroll-mt-6 overflow-hidden rounded-2xl border border-(--border) bg-(--surface)"
    >
      <div className="flex items-center gap-2 border-b border-(--border) px-5 py-4">
        <LockKeyhole className="size-4 text-(--primary)" />

        <h2 className="text-[14px] font-semibold text-(--text)">
          Security
        </h2>
      </div>

      {/* Password */}
      <div className="flex items-center justify-between gap-4 border-b border-(--border) p-5">
        <div>
          <p className="text-[12px] font-medium text-(--text)">
            Password
          </p>

          <p className="mt-0.5 text-[10px] text-(--text-secondary)">
            Last changed 3 months ago
          </p>
        </div>

        <Button
          variant="secondary"
          onClick={onPasswordChange}
        >
          Change password
        </Button>
      </div>

      {/* 2FA */}
      <div className="flex items-start gap-4 border-b border-(--border) p-5">
        <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-(--success-bg) text-(--success)">
          <ShieldCheck className="size-4" />
        </div>

        <div className="flex-1">
          <p className="text-[12px] font-medium text-(--text)">
            Two-factor authentication
          </p>

          <p className="mt-1 max-w-70 text-[10px] leading-4 text-(--text-secondary)">
            Protect your account with an
            additional verification step.
          </p>

          <div className="mt-2">
            <Badge
              variant={
                twoFactor
                  ? "success"
                  : "warning"
              }
            >
              {twoFactor
                ? "Enabled"
                : "Not enabled"}
            </Badge>
          </div>
        </div>

        <Switch
          checked={twoFactor}
          onCheckedChange={
            setTwoFactor
          }
        />
      </div>

      {/* Sessions */}
      <div className="p-5">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Laptop className="size-4 text-(--primary)" />

            <p className="text-[12px] font-semibold text-(--text)">
              Active sessions
            </p>
          </div>

          {sessions.length > 1 ? (
            <Button
              variant="secondary"
              onClick={revokeOthers}
            >
              Revoke all others
            </Button>
          ) : null}
        </div>

        <div className="mt-3 divide-y divide-(--border)">
          {sessions.map(
            (session) => (
              <div
                key={session.id}
                className="flex items-center gap-3 py-3"
              >
                <Laptop className="size-4 shrink-0 text-(--text-muted)" />

                <div className="min-w-0 flex-1">
                  <p className="text-[11px] font-medium text-(--text)">
                    {session.device}
                  </p>

                  <p className="mt-0.5 text-[10px] text-(--text-secondary)">
                    {session.location}
                  </p>
                </div>

                {session.current ? (
                  <Badge variant="primary">
                    Current session
                  </Badge>
                ) : (
                  <>
                    <span className="hidden text-[10px] text-(--text-muted) sm:block">
                      {session.lastActive}
                    </span>

                    <Button
                      variant="secondary"
                      onClick={() =>
                        revokeSession(
                          session.id
                        )
                      }
                    >
                      Revoke
                    </Button>
                  </>
                )}
              </div>
            )
          )}
        </div>
      </div>
    </section>
  )
}