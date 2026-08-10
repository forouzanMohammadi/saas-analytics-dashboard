// src/pages/auth/RegisterPage.tsx
import * as React from "react"
import { Link, useNavigate } from "react-router-dom"
import { Mail, User } from "lucide-react"

import { AuthLayout } from "@/layouts/AuthLayout"
import { Input } from "@/components/shared/forms/Input"
import { PasswordInput } from "@/components/shared/forms/PasswordInput"
import { Checkbox } from "@/components/shared/forms/Checkbox"
import { Button } from "@/components/shared/buttons/Button"
import { useAuthStore } from "@/store/authStore"
import { toast } from "@/store/toastStore"
import { validateEmail, validatePassword, validateRequired } from "@/utils/validators"
import { registerUser } from "@/services/mockAuthService"

interface FormErrors {
  name?: string
  email?: string
  password?: string
  agreed?: string
}

export default function RegisterPage() {
  const [name, setName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [agreed, setAgreed] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [errors, setErrors] = React.useState<FormErrors>({})

  const login = useAuthStore((s) => s.login)
  const navigate = useNavigate()

  function handleNameChange(value: string) {
    setName(value)
    if (errors.name) setErrors((prev) => ({ ...prev, name: validateRequired(value, "Full name") }))
  }

  function handleEmailChange(value: string) {
    setEmail(value)
    if (errors.email) setErrors((prev) => ({ ...prev, email: validateEmail(value) }))
  }

  function handlePasswordChange(value: string) {
    setPassword(value)
    if (errors.password) setErrors((prev) => ({ ...prev, password: validatePassword(value) }))
  }

  function handleAgreedChange(value: boolean) {
    setAgreed(value)
    if (errors.agreed && value) setErrors((prev) => ({ ...prev, agreed: undefined }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    const nextErrors: FormErrors = {
      name: validateRequired(name, "Full name"),
      email: validateEmail(email),
      password: validatePassword(password),
      agreed: agreed ? undefined : "You must accept the terms to continue.",
    }
    setErrors(nextErrors)
    if (Object.values(nextErrors).some(Boolean)) return

    setLoading(true)

    try {
      const account = await registerUser({ name, email, password })
      login(account, "mock-jwt-token")
      toast.success("Account created", `Welcome, ${account.name}!`)

      // brief pause so the success toast is visible before the page swaps
      await new Promise((resolve) => setTimeout(resolve, 500))
      navigate("/dashboard", { replace: true })
    } catch (err) {
      const message = err instanceof Error ? err.message : "Please try again."
      setErrors((prev) => ({ ...prev, email: message }))
      toast.error("Couldn't create account", message)
    } finally {
      setLoading(false)
    }
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
      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-[12.5px] font-medium text-(--text)">
            Full name
          </label>
          <Input
            id="name"
            startIcon={<User />}
            placeholder="Jane Doe"
            value={name}
            onChange={(e) => handleNameChange(e.target.value)}
            error={errors.name}
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
            onChange={(e) => handleEmailChange(e.target.value)}
            error={errors.email}
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
            onChange={(e) => handlePasswordChange(e.target.value)}
            error={errors.password}
          />
        </div>

        <div>
          <label className="flex items-start gap-2 text-[12.5px] text-(--text-secondary)">
            <Checkbox
              checked={agreed}
              onCheckedChange={handleAgreedChange}
              className="mt-0.5"
            />
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
          {errors.agreed ? (
            <p className="mt-1.5 text-xs text-(--danger)">{errors.agreed}</p>
          ) : null}
        </div>

        <Button type="submit" variant="primary" className="mt-1 w-full" loading={loading}>
          Create account
        </Button>
      </form>
    </AuthLayout>
  )
}
