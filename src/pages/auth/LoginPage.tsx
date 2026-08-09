// src/pages/auth/LoginPage.tsx
import * as React from "react"
import { Link, useNavigate, useLocation } from "react-router-dom"
import { Mail } from "lucide-react"

import { AuthLayout } from "@/layouts/AuthLayout"
import { Input } from "@/components/shared/forms/Input"
import { PasswordInput } from "@/components/shared/forms/PasswordInput"
import { Checkbox } from "@/components/shared/forms/Checkbox"
import { Button } from "@/components/shared/buttons/Button"
import { useAuthStore } from "@/store/authStore"
import { toast } from "@/store/toastStore"
import { validateEmail, validatePassword } from "@/utils/validators"

interface FormErrors {
  email?: string
  password?: string
}

export default function LoginPage() {
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [remember, setRemember] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [errors, setErrors] = React.useState<FormErrors>({})

  const login = useAuthStore((s) => s.login)
  const navigate = useNavigate()
  const location = useLocation()
  const from = (location.state as { from?: Location })?.from?.pathname ?? "/dashboard"

  function handleEmailChange(value: string) {
    setEmail(value)
    if (errors.email) {
      setErrors((prev) => ({ ...prev, email: validateEmail(value) }))
    }
  }

  function handlePasswordChange(value: string) {
    setPassword(value)
    if (errors.password) {
      setErrors((prev) => ({ ...prev, password: validatePassword(value) }))
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    const nextErrors: FormErrors = {
      email: validateEmail(email),
      password: validatePassword(password),
    }
    setErrors(nextErrors)
    if (nextErrors.email || nextErrors.password) return

    setLoading(true)

    // TODO: replace with your real auth API call (e.g. via axios/@tanstack/react-query).
    // The role would normally come back from the API response.
    await new Promise((resolve) => setTimeout(resolve, 800))
    const role = email.includes("admin") ? "admin" : "user"

    login({ id: "1", name: "Demo User", email, role }, "mock-jwt-token")
    toast.success("Signed in", `Logged in as ${role}`)

    // brief pause so the success toast is visible before the page swaps
    await new Promise((resolve) => setTimeout(resolve, 600))
    setLoading(false)
    navigate(from, { replace: true })
  }

  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Sign in to your account to continue."
      footer={
        <>
          Don&apos;t have an account?{" "}
          <Link to="/register" className="font-medium text-(--primary)">
            Sign up
          </Link>
        </>
      }
    >
      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
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
            onChange={(e) => handleEmailChange(e.target.value)}
            error={errors.email}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="text-[12.5px] font-medium text-(--text)">
              Password
            </label>
            <Link to="/forgot-password" className="text-[12px] text-(--primary)">
              Forgot password?
            </Link>
          </div>
          <PasswordInput
            id="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => handlePasswordChange(e.target.value)}
            error={errors.password}
          />
        </div>

        <label className="flex items-center gap-2 text-[12.5px] text-(--text-secondary)">
          <Checkbox checked={remember} onCheckedChange={setRemember} />
          Remember me for 30 days
        </label>

        <Button type="submit" variant="primary" className="mt-1 w-full" loading={loading}>
          Sign in
        </Button>
      </form>
    </AuthLayout>
  )
}
