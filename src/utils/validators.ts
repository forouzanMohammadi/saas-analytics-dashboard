export function validateEmail(value: string): string | undefined {
  if (!value.trim()) return "Email is required."
  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
  if (!isValid) return "Enter a valid email address."
  return undefined
}

export function validatePassword(value: string, minLength = 8): string | undefined {
  if (!value) return "Password is required."
  if (value.length < minLength) return `Password must be at least ${minLength} characters.`
  return undefined
}

export function validateRequired(value: string, label: string): string | undefined {
  if (!value.trim()) return `${label} is required.`
  return undefined
}
