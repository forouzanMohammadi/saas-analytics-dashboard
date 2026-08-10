// src/services/mockAuthService.ts
//
// Stands in for a real backend. Everything here is client-side and NOT secure
// (passwords are stored in plain text in localStorage) — this exists purely so
// the demo has believable register/login behavior without a server. When a real
// API exists, replace the bodies of registerUser/loginUser with fetch/axios calls
// and keep the same function signatures — nothing else in the app has to change.

import type { Role } from "@/store/authStore"

interface StoredUser {
  id: string
  name: string
  email: string
  password: string
  role: Role
}

const DB_KEY = "pulse-users-db"

function readUsers(): StoredUser[] {
  try {
    const raw = localStorage.getItem(DB_KEY)
    return raw ? (JSON.parse(raw) as StoredUser[]) : seedUsers()
  } catch {
    return seedUsers()
  }
}

function writeUsers(users: StoredUser[]) {
  localStorage.setItem(DB_KEY, JSON.stringify(users))
}

// A ready-made admin account so reviewers can see the admin view
// without needing to know how role assignment works.
function seedUsers(): StoredUser[] {
  const seeded: StoredUser[] = [
    {
      id: crypto.randomUUID(),
      name: "Admin",
      email: "admin@pulse.dev",
      password: "admin123",
      role: "admin",
    },
  ]
  writeUsers(seeded)
  return seeded
}

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export interface AuthResult {
  id: string
  name: string
  email: string
  role: Role
}

export async function registerUser(input: {
  name: string
  email: string
  password: string
}): Promise<AuthResult> {
  await delay(700)

  const users = readUsers()
  const exists = users.some((u) => u.email.toLowerCase() === input.email.toLowerCase())
  if (exists) {
    throw new Error("An account with this email already exists.")
  }

  const newUser: StoredUser = {
    id: crypto.randomUUID(),
    name: input.name,
    email: input.email,
    password: input.password,
    role: "user", // new signups always start as "user" — promote via the Users page
  }

  writeUsers([...users, newUser])

  const { password: _password, ...result } = newUser
  return result
}

export async function loginUser(input: {
  email: string
  password: string
}): Promise<AuthResult> {
  await delay(700)

  const users = readUsers()
  const match = users.find((u) => u.email.toLowerCase() === input.email.toLowerCase())

  if (!match || match.password !== input.password) {
    throw new Error("Invalid email or password.")
  }

  const { password: _password, ...result } = match
  return result
}
