// src/pages/auth/RegisterPage.tsx
import * as React from "react"
import { Link } from "react-router-dom"
import { Mail, User } from "lucide-react"

import { AuthLayout } from "@/layouts/AuthLayout"
import { Input } from "@/components/shared/forms/Input"
import { PasswordInput } from "@/components/shared/forms/PasswordInput"
import { Checkbox } from "@/components/shared/forms/Checkbox"
import { Button } from "@/components/shared/buttons/Button"

export default function RegisterPage() {
  const [name, setName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [agreed, setAgreed] = React.useState(false)
  const [loading, setLoading] = React.useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    // TODO: wire up to your auth service
    setTimeout(() => setLoading(false), 1200)
  }

  return (
    <AuthLayout
      title="Create your account"
      subtitle="Start your 14-day free trial. No credit card required."
      footer={
        <>
          Already have an account?{" "}
          <Link to="/login" className="font-medium text-(--primary)">
            Sign in
          </Link>
        </>
      }
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-[12.5px] font-medium text-(--text)">
            Full name
          </label>
          <Input
            id="name"
            startIcon={<User />}
            placeholder="Jane Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-[12.5px] font-medium text-(--text)">
            Work email
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

        <div className="flex flex-col gap-1.5">
          <label htmlFor="password" className="text-[12.5px] font-medium text-(--text)">
            Password
          </label>
          <PasswordInput
            id="password"
            placeholder="At least 8 characters"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            minLength={8}
            required
          />
        </div>

        <label className="flex items-start gap-2 text-[12.5px] text-(--text-secondary)">
          <Checkbox checked={agreed} onCheckedChange={setAgreed} className="mt-0.5" />
          <span>
            I agree to the{" "}
            <a href="#" className="font-medium text-(--primary)">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="font-medium text-(--primary)">
              Privacy Policy
            </a>
            .
          </span>
        </label>

        <Button
          type="submit"
          variant="primary"
          className="mt-1 w-full"
          loading={loading}
          disabled={!agreed}
        >
          Create account
        </Button>
      </form>
    </AuthLayout>
  )
}
