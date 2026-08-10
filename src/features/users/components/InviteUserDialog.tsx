import { useEffect } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Mail, UserPlus } from "lucide-react"

import { Button } from "@/components/shared/buttons/Button"
import { Input } from "@/components/shared/forms/Input"
import { Select } from "@/components/shared/forms/Select"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"

import {
    inviteUserSchema,
    type InviteUserFormValues,
} from "@/features/users/schemas/user.schema"

import type {
    User,
    UserPlan,
} from "@/features/users/data/usersData"

interface InviteUserDialogProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    onInvite: (user: User) => void
}

const planMrr: Record<UserPlan, number> = {
    Starter: 29,
    Growth: 99,
    Scale: 299,
    Enterprise: 499,
}

function getInitials(name: string) {
    return name
        .trim()
        .split(/\s+/)
        .slice(0, 2)
        .map((part) => part.charAt(0).toUpperCase())
        .join("")
}

function formatJoinedDate(date: Date) {
    return new Intl.DateTimeFormat("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
    }).format(date)
}

export function InviteUserDialog({
    open,
    onOpenChange,
    onInvite,
}: InviteUserDialogProps) {
    const {
        register,
        handleSubmit,
        reset,
        formState: {
            errors,
            isSubmitting,
        },
    } = useForm<InviteUserFormValues>({
        resolver: zodResolver(inviteUserSchema),

        defaultValues: {
            name: "",
            email: "",
            role: "Member",
            plan: "Growth",
        },
    })

    useEffect(() => {
        if (!open) {
            reset({
                name: "",
                email: "",
                role: "Member",
                plan: "Growth",
            })
        }
    }, [open, reset])

    function onSubmit(values: InviteUserFormValues) {
        const now = new Date()

        const newUser: User = {
            id: Date.now(),

            name: values.name.trim(),
            email: values.email.trim().toLowerCase(),
            initials: getInitials(values.name),

            role: values.role,
            plan: values.plan,
            status: "Invited",

            joined: formatJoinedDate(now),
            joinedAt: now.getTime(),

            lastSeen: "Never",
            lastSeenMinutes: Number.MAX_SAFE_INTEGER,

            mrr: planMrr[values.plan],
        }

        onInvite(newUser)

        reset()
        onOpenChange(false)
    }

    return (
        <Dialog
            open={open}
            onOpenChange={onOpenChange}
        >
            <DialogContent
                className="
                overflow-hidden
                border-(--border)
                bg-(--surface)
                p-0
                sm:max-w-130
                rounded-2xl
                shadow-[0_24px_70px_rgba(30,27,46,0.16)]
                "
            >
                <form
                    onSubmit={handleSubmit(onSubmit)}
                >
                    {/* Header */}
                    <div className="px-6 pt-6">
                        <DialogHeader className="gap-0 text-left">
                            <div className="mb-4 flex size-11 items-center justify-center rounded-xl bg-(--primary-bg) text-(--primary)">
                                <UserPlus
                                    size={20}
                                    strokeWidth={1.9}
                                />
                            </div>

                            <DialogTitle className="text-[18px] font-semibold tracking-tight text-(--text)">
                                Invite user
                            </DialogTitle>

                            <DialogDescription className="mt-1.5 text-[13px] leading-5 text-(--text-secondary)">
                                Invite a new member to your workspace and
                                choose their role and plan.
                            </DialogDescription>
                        </DialogHeader>
                    </div>

                    {/* Form body */}
                    <div className="space-y-5 px-6 py-6">
                        {/* Name */}
                        <div className="space-y-1.5">
                            <label
                                htmlFor="invite-name"
                                className="block text-[12px] font-medium text-(--text)"
                            >
                                Full name
                            </label>

                            <Input
                                id="invite-name"
                                placeholder="e.g. Alex Morgan"
                                autoComplete="name"
                                error={errors.name?.message}
                                {...register("name")}
                            />
                        </div>

                        {/* Email */}
                        <div className="space-y-1.5">
                            <label
                                htmlFor="invite-email"
                                className="block text-[12px] font-medium text-(--text)"
                            >
                                Email address
                            </label>

                            <Input
                                id="invite-email"
                                type="email"
                                placeholder="alex@company.com"
                                autoComplete="email"
                                startIcon={
                                    <Mail
                                        size={16}
                                        strokeWidth={1.8}
                                    />
                                }
                                error={errors.email?.message}
                                {...register("email")}
                            />
                        </div>

                        {/* Role & Plan */}
                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="space-y-1.5">
                                <label
                                    htmlFor="invite-role"
                                    className="block text-[12px] font-medium text-(--text)"
                                >
                                    Role
                                </label>

                                <Select
                                    id="invite-role"
                                    error={errors.role?.message}
                                    {...register("role")}
                                >
                                    <option value="Admin">
                                        Admin
                                    </option>

                                    <option value="Member">
                                        Member
                                    </option>

                                    <option value="Viewer">
                                        Viewer
                                    </option>
                                </Select>

                                <p className="text-[11px] leading-4 text-(--text-muted)">
                                    Controls workspace access.
                                </p>
                            </div>

                            <div className="space-y-1.5">
                                <label
                                    htmlFor="invite-plan"
                                    className="block text-[12px] font-medium text-(--text)"
                                >
                                    Plan
                                </label>

                                <Select
                                    id="invite-plan"
                                    error={errors.plan?.message}
                                    {...register("plan")}
                                >
                                    <option value="Starter">
                                        Starter
                                    </option>

                                    <option value="Growth">
                                        Growth
                                    </option>

                                    <option value="Scale">
                                        Scale
                                    </option>

                                    <option value="Enterprise">
                                        Enterprise
                                    </option>
                                </Select>

                                <p className="text-[11px] leading-4 text-(--text-muted)">
                                    Determines usage limits.
                                </p>
                            </div>
                        </div>

                        {/* Status information */}
                        <div className="flex gap-3 rounded-xl border border-(--border) bg-(--primary-bg)/55 px-4 py-3.5">
                            <div className="mt-0.5 size-2 shrink-0 rounded-full bg-(--primary)" />

                            <div>
                                <p className="text-[12px] font-medium text-(--primary-dark)">
                                    Invitation pending
                                </p>

                                <p className="mt-1 text-[11px] leading-4.25 text-(--text-secondary)">
                                    The user will appear with an Invited status
                                    until they accept the invitation.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-end gap-2 border-t border-(--border) bg-(--surface) px-6 py-4">
                        <Button
                            type="button"
                            variant="secondary"
                            disabled={isSubmitting}
                            className="min-w-28"
                            onClick={() => onOpenChange(false)}
                        >
                            Cancel
                        </Button>

                        <Button
                            type="submit"
                            loading={isSubmitting}
                            className="min-w-34"
                        >
                            <UserPlus className="size-4" />
                            Invite user
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}