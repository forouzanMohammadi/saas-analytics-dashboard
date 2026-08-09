// src/pages/auth/ForgotPasswordPage.tsx
import * as React from "react"
import { Link } from "react-router-dom"
import { Mail, ArrowLeft, MailCheck } from "lucide-react"

import { AuthLayout } from "@/layouts/AuthLayout"
import { Input } from "@/components/shared/forms/Input"
import { Button } from "@/components/shared/buttons/Button"

export default function ForgotPasswordPage() {
  const [email, setEmail] = React.useState("")
  const [loading, setLoading] = React.useState(false)
  const [sent, setSent] = React.useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    // TODO: wire up to your auth service
    setTimeout(() => {
      setLoading(false)
      setSent(true)
    }, 1200)
  }

  if (sent) {
    return (
      <AuthLayout
        title="Check your email"
        subtitle={`We sent a password reset link to ${email}.`}
        footer={
          <Link to="/login" className="inline-flex items-center gap-1 font-medium text-(--primary)">
            <ArrowLeft size={14} />
            Back to sign in
          </Link>
        }
      >
        <div className="flex flex-col items-center gap-4 py-2 text-center">
          <div className="flex size-12 items-center justify-center rounded-full bg-(--primary-bg) text-(--primary)">
            <MailCheck size={22} />
          </div>
          <p className="text-[12.5px] text-(--text-secondary)">
            Didn&apos;t get the email? Check your spam folder, or{" "}
            <button
              type="button"
              onClick={() => setSent(false)}
              className="font-medium text-(--primary)"
            >
              try another address
            </button>
            .
          </p>
        </div>
      </AuthLayout>
    )
  }

  return (
    <AuthLayout
      title="Forgot your password?"
      subtitle="Enter your email and we'll send you a reset link."
      footer={
        <Link to="/login" className="inline-flex items-center gap-1 font-medium text-(--primary)">
          <ArrowLeft size={14} />
          Back to sign in
        </Link>
      }
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-[12.5px] font-medium text-(--text)">
            Email
          </label>
          <Input
            id="email"
            type="email"
            startIcon={<Mail />}
            placeholder="name@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <Button type="submit" variant="primary" className="mt-1 w-full" loading={loading}>
          Send reset link
        </Button>
      </form>
    </AuthLayout>
  )
}
