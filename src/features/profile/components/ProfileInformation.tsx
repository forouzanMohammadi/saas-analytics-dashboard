import {
    useEffect,
    useRef,
    useState,
    type ChangeEvent,
} from "react"

import {
    Camera,
    UserRound,
} from "lucide-react"

import { Button } from "@/components/shared/buttons/Button"
import { Input } from "@/components/shared/forms/Input"
import { Textarea } from "@/components/shared/forms/Textarea"

import type {
    ProfileData,
} from "@/features/profile/data/profileData"

interface ProfileInformationProps {
    profile: ProfileData

    onSave: (
        values: Pick<
            ProfileData,
            "fullName" | "username" | "jobTitle" | "bio"
        >
    ) => void
}

export function ProfileInformation({
    profile,
    onSave,
}: ProfileInformationProps) {
    const [fullName, setFullName] =
        useState(profile.fullName)

    const [username, setUsername] =
        useState(profile.username)

    const [jobTitle, setJobTitle] =
        useState(profile.jobTitle)

    const [bio, setBio] =
        useState(profile.bio)

    const [avatarUrl, setAvatarUrl] =
        useState<string | null>(null)

    const fileInputRef =
        useRef<HTMLInputElement>(null)

    useEffect(() => {
        return () => {
            if (avatarUrl) {
                URL.revokeObjectURL(avatarUrl)
            }
        }
    }, [avatarUrl])

    function handleAvatarChange(
        event: ChangeEvent<HTMLInputElement>
    ) {
        const file =
            event.target.files?.[0]

        if (!file) return

        if (!file.type.startsWith("image/")) {
            return
        }

        const nextUrl =
            URL.createObjectURL(file)

        setAvatarUrl((current) => {
            if (current) {
                URL.revokeObjectURL(current)
            }

            return nextUrl
        })
    }

    function handleSubmit(
        event: React.FormEvent
    ) {
        event.preventDefault()

        onSave({
            fullName: fullName.trim(),
            username: username.trim(),
            jobTitle: jobTitle.trim(),
            bio: bio.trim(),
        })
    }

    const initials =
        fullName
            .trim()
            .split(/\s+/)
            .slice(0, 2)
            .map((part) =>
                part.charAt(0).toUpperCase()
            )
            .join("") || "JD"

    return (
        <section className="rounded-2xl border border-(--border) bg-(--surface) p-5">
            <div>
                <h2 className="text-[15px] font-semibold text-(--text)">
                    Profile information
                </h2>

                <p className="mt-1 text-[11px] text-(--text-secondary)">
                    Update your personal details and how others see you.
                </p>
            </div>

            <form
                onSubmit={handleSubmit}
                className="mt-5"
            >
                <div className="grid gap-6 md:grid-cols-[160px_minmax(0,1fr)]">
                    {/* Avatar */}
                    {/* Avatar */}
                    <div className="flex items-start justify-center md:justify-start">
                        <div className="relative size-32 shrink-0">
                            {/* Avatar */}
                            <div className="flex size-32 items-center justify-center overflow-hidden rounded-full border border-(--border) bg-(--primary-bg) text-2xl font-semibold text-(--primary)">
                                {avatarUrl ? (
                                    <img
                                        src={avatarUrl}
                                        alt="Profile preview"
                                        className="size-full object-cover"
                                    />
                                ) : initials ? (
                                    initials
                                ) : (
                                    <UserRound className="size-8" />
                                )}
                            </div>

                            {/* Upload button */}
                            <button
                                type="button"
                                aria-label="Change profile photo"
                                onClick={() =>
                                    fileInputRef.current?.click()
                                }
                                className="
        absolute -bottom-1 -right-1
        flex size-9 items-center justify-center
        rounded-full
        border border-(--border)
        bg-(--surface)
        text-(--text-secondary)
        shadow-[0_4px_12px_rgba(30,27,46,0.12)]
        transition-all
        hover:border-(--primary)/30
        hover:bg-(--primary-bg)
        hover:text-(--primary)
        focus-visible:outline-none
        focus-visible:ring-3
        focus-visible:ring-(--primary)/20
      "
                            >
                                <Camera className="size-4" />
                            </button>

                            <input
                                ref={fileInputRef}
                                type="file"
                                accept="image/png,image/jpeg,image/webp"
                                className="hidden"
                                onChange={handleAvatarChange}
                            />
                        </div>
                    </div>

                    {/* Fields */}
                    <div className="space-y-4">
                        <Field label="Full name">
                            <Input
                                value={fullName}
                                onChange={(event) =>
                                    setFullName(
                                        event.target.value
                                    )
                                }
                            />
                        </Field>

                        <Field label="Username">
                            <Input
                                value={username}
                                onChange={(event) =>
                                    setUsername(
                                        event.target.value
                                    )
                                }
                            />
                        </Field>

                        <Field label="Job title">
                            <Input
                                value={jobTitle}
                                onChange={(event) =>
                                    setJobTitle(
                                        event.target.value
                                    )
                                }
                            />
                        </Field>

                        <Field label="Bio">
                            <Textarea
                                value={bio}
                                onChange={(event) =>
                                    setBio(
                                        event.target.value
                                    )
                                }
                                rows={3}
                                placeholder="Tell us a little about yourself..."
                            />
                        </Field>

                        <div className="flex justify-end pt-1">
                            <Button type="submit">
                                Save changes
                            </Button>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    )
}

function Field({
    label,
    children,
}: {
    label: string
    children: React.ReactNode
}) {
    return (
        <div className="space-y-1.5">
            <label className="text-[11px] font-medium text-(--text)">
                {label}
            </label>

            {children}
        </div>
    )
}