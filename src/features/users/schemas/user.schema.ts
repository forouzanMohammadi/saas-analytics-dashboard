import { z } from "zod"

export const userRoleSchema = z.enum([
  "Admin",
  "Member",
  "Viewer",
])

export const userPlanSchema = z.enum([
  "Starter",
  "Growth",
  "Scale",
  "Enterprise",
])

export const inviteUserSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(60, "Name is too long"),

  email: z.email("Enter a valid email address"),

  role: userRoleSchema,

  plan: userPlanSchema,
})

export type InviteUserFormValues =
  z.infer<typeof inviteUserSchema>