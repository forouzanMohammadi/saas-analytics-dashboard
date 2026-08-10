import { useState } from "react"

import { AccountSecurity } from "@/features/profile/components/AccountSecurity"
import { ChangeEmailDialog } from "@/features/profile/components/ChangeEmailDialog"
import { ChangePasswordDialog } from "@/features/profile/components/ChangePasswordDialog"
import { ProfileInformation } from "@/features/profile/components/ProfileInformation"
import { ProfilePreferences } from "@/features/profile/components/ProfilePreferences"
import { RecentActivity } from "@/features/profile/components/RecentActivity"

import {
  initialProfile,
  type ProfileData,
} from "@/features/profile/data/profileData"

import { useToastStore } from "@/store/toastStore"

export default function Profile() {
  const [profile, setProfile] =
    useState<ProfileData>(
      initialProfile
    )

  const [changeEmailOpen, setChangeEmailOpen] =
    useState(false)

  const [
    changePasswordOpen,
    setChangePasswordOpen,
  ] = useState(false)

  const [twoFactorEnabled, setTwoFactorEnabled] =
    useState(true)

  const addToast = useToastStore(
    (state) => state.addToast
  )

  function handleProfileSave(
    values: Pick<
      ProfileData,
      | "fullName"
      | "username"
      | "jobTitle"
      | "bio"
    >
  ) {
    setProfile((current) => ({
      ...current,
      ...values,
    }))

    addToast({
      variant: "success",
      title: "Profile updated",
      description:
        "Your profile information has been saved successfully.",
    })
  }

  function updatePreferences(
    changes: Partial<ProfileData>
  ) {
    setProfile((current) => ({
      ...current,
      ...changes,
    }))

    addToast({
      variant: "success",
      title: "Preference updated",
      description:
        "Your profile preferences have been saved.",
    })
  }

  function handleEmailChange(
    email: string
  ) {
    setProfile((current) => ({
      ...current,
      email,
    }))

    addToast({
      variant: "success",
      title: "Email updated",
      description: `Your email address has been changed to ${email}.`,
    })
  }

  function handlePasswordChange() {
    addToast({
      variant: "success",
      title: "Password updated",
      description:
        "Your password has been changed successfully.",
    })
  }

  function handleTwoFactor() {
    const next =
      !twoFactorEnabled

    setTwoFactorEnabled(next)

    addToast({
      variant:
        next
          ? "success"
          : "warning",

      title:
        next
          ? "Two-factor authentication enabled"
          : "Two-factor authentication disabled",

      description:
        next
          ? "Your account now has an additional layer of protection."
          : "Two-factor authentication has been disabled.",
    })
  }

  return (
    <div className="mx-auto w-full max-w-[1600px] space-y-5">
      {/* Header */}
      <section>
        <h1 className="text-2xl font-semibold tracking-tight text-(--text)">
          Profile
        </h1>

        <p className="mt-1 text-sm text-(--text-secondary)">
          Manage your personal information and account preferences.
        </p>
      </section>

      {/* Content */}
      <div className="grid items-start gap-4 xl:grid-cols-[1.02fr_.98fr]">
        {/* Left column */}
        <div className="space-y-4">
          <ProfileInformation
            profile={profile}
            onSave={
              handleProfileSave
            }
          />

          <ProfilePreferences
            profile={profile}
            onChange={
              updatePreferences
            }
          />
        </div>

        {/* Right column */}
        <div className="space-y-4">
          <AccountSecurity
            email={profile.email}
            twoFactorEnabled={
              twoFactorEnabled
            }
            onChangeEmail={() =>
              setChangeEmailOpen(true)
            }
            onChangePassword={() =>
              setChangePasswordOpen(
                true
              )
            }
            onToggleTwoFactor={
              handleTwoFactor
            }
          />

          <RecentActivity />
        </div>
      </div>

      {/* Email dialog */}
      <ChangeEmailDialog
        open={changeEmailOpen}
        onOpenChange={
          setChangeEmailOpen
        }
        currentEmail={
          profile.email
        }
        onConfirm={
          handleEmailChange
        }
      />

      {/* Password dialog */}
      <ChangePasswordDialog
        open={
          changePasswordOpen
        }
        onOpenChange={
          setChangePasswordOpen
        }
        onConfirm={
          handlePasswordChange
        }
      />
    </div>
  )
}