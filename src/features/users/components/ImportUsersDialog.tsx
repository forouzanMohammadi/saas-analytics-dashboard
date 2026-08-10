import { useMemo, useState } from "react"
import {
  AlertTriangle,
  CheckCircle2,
  Download,
  FileSpreadsheet,
  RotateCcw,
  Upload,
} from "lucide-react"

import { Button } from "@/components/shared/buttons/Button"
import { Badge } from "@/components/shared/feedback/Badge"
import { FileUpload } from "@/components/shared/forms/FileUpload"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/shared/data-display/Table"

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

import {
  parseUsersCsv,
  type ParsedCsvUser,
} from "@/features/users/utils/parseUsersCsv"

import type {
  User,
  UserPlan,
} from "@/features/users/data/usersData"

interface ImportUsersDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void

  existingEmails: string[]

  onImport: (
    users: User[],
    invalidCount: number
  ) => void
}

interface PreviewRow extends ParsedCsvUser {
  valid: boolean
  errors: string[]
  data?: InviteUserFormValues
}

const MAX_FILE_SIZE = 5 * 1024 * 1024

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
    .map((part) =>
      part.charAt(0).toUpperCase()
    )
    .join("")
}

function formatJoinedDate(date: Date) {
  return new Intl.DateTimeFormat(
    "en-US",
    {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }
  ).format(date)
}

function normalizeRole(value: string) {
  const map: Record<string, string> = {
    admin: "Admin",
    member: "Member",
    viewer: "Viewer",
  }

  return (
    map[value.trim().toLowerCase()] ??
    value.trim()
  )
}

function normalizePlan(value: string) {
  const map: Record<string, string> = {
    starter: "Starter",
    growth: "Growth",
    scale: "Scale",
    enterprise: "Enterprise",
  }

  return (
    map[value.trim().toLowerCase()] ??
    value.trim()
  )
}

function getZodErrors(
  issues: {
    path: PropertyKey[]
    message: string
  }[]
) {
  return issues.map((issue) => {
    const field =
      issue.path[0] != null
        ? String(issue.path[0])
        : "field"

    return `${field}: ${issue.message}`
  })
}

export function ImportUsersDialog({
  open,
  onOpenChange,
  existingEmails,
  onImport,
}: ImportUsersDialogProps) {
  const [fileName, setFileName] =
    useState<string | null>(null)

  const [previewRows, setPreviewRows] =
    useState<PreviewRow[]>([])

  const [fileError, setFileError] =
    useState<string | null>(null)

  const validRows = useMemo(
    () =>
      previewRows.filter(
        (row) => row.valid && row.data
      ),
    [previewRows]
  )

  const invalidRows = useMemo(
    () =>
      previewRows.filter(
        (row) => !row.valid
      ),
    [previewRows]
  )

  function resetImport() {
    setFileName(null)
    setPreviewRows([])
    setFileError(null)
  }

  function handleOpenChange(
    nextOpen: boolean
  ) {
    if (!nextOpen) {
      resetImport()
    }

    onOpenChange(nextOpen)
  }

  function downloadTemplate() {
    const csv = [
      "name,email,role,plan",
      "Alex Morgan,alex@example.com,Member,Growth",
      "Emma Wilson,emma@example.com,Admin,Scale",
      "David Brown,david@example.com,Viewer,Starter",
    ].join("\n")

    const blob = new Blob([csv], {
      type: "text/csv;charset=utf-8",
    })

    const url =
      URL.createObjectURL(blob)

    const anchor =
      document.createElement("a")

    anchor.href = url
    anchor.download =
      "pulse-users-template.csv"

    document.body.appendChild(anchor)
    anchor.click()
    anchor.remove()

    URL.revokeObjectURL(url)
  }

  function validateRows(
    rows: ParsedCsvUser[]
  ): PreviewRow[] {
    const existing = new Set(
      existingEmails.map((email) =>
        email.trim().toLowerCase()
      )
    )

    const seenInFile = new Set<string>()

    return rows.map((row) => {
      const candidate = {
        name: row.name,
        email:
          row.email.trim().toLowerCase(),
        role: normalizeRole(row.role),
        plan: normalizePlan(row.plan),
      }

      const result =
        inviteUserSchema.safeParse(
          candidate
        )

      const errors: string[] = []

      if (!result.success) {
        errors.push(
          ...getZodErrors(
            result.error.issues
          )
        )

        return {
          ...row,
          valid: false,
          errors,
        }
      }

      const normalizedEmail =
        result.data.email.toLowerCase()

      if (
        existing.has(normalizedEmail)
      ) {
        errors.push(
          "Email already exists."
        )
      }

      if (
        seenInFile.has(normalizedEmail)
      ) {
        errors.push(
          "Duplicate email in CSV."
        )
      }

      seenInFile.add(normalizedEmail)

      if (errors.length > 0) {
        return {
          ...row,
          valid: false,
          errors,
        }
      }

      return {
        ...row,
        valid: true,
        errors: [],
        data: result.data,
      }
    })
  }

  function handleFilesSelected(
    files: FileList
  ) {
    const file = files[0]

    if (!file) return

    setFileError(null)
    setPreviewRows([])

    if (
      !file.name
        .toLowerCase()
        .endsWith(".csv")
    ) {
      setFileError(
        "Please select a CSV file."
      )
      return
    }

    if (file.size > MAX_FILE_SIZE) {
      setFileError(
        "The CSV file must be smaller than 5 MB."
      )
      return
    }

    setFileName(file.name)

    const reader = new FileReader()

    reader.onerror = () => {
      setFileError(
        "The file could not be read."
      )
    }

    reader.onload = () => {
      if (
        typeof reader.result !== "string"
      ) {
        setFileError(
          "The file could not be processed."
        )
        return
      }

      const parsed =
        parseUsersCsv(reader.result)

      if (parsed.error) {
        setFileError(parsed.error)
        return
      }

      if (parsed.rows.length === 0) {
        setFileError(
          "No users were found in the CSV file."
        )
        return
      }

      setPreviewRows(
        validateRows(parsed.rows)
      )
    }

    reader.readAsText(file)
  }

  function handleImport() {
    if (validRows.length === 0) {
      return
    }

    const now = new Date()
    const baseId = Date.now()

    const importedUsers: User[] =
      validRows.map(
        (row, index) => {
          const data = row.data!

          return {
            id: baseId + index,

            name: data.name.trim(),

            email: data.email
              .trim()
              .toLowerCase(),

            initials:
              getInitials(data.name),

            role: data.role,

            plan: data.plan,

            status: "Invited",

            joined:
              formatJoinedDate(now),

            joinedAt:
              now.getTime(),

            lastSeen: "Never",

            lastSeenMinutes:
              Number.MAX_SAFE_INTEGER,

            mrr:
              planMrr[data.plan],
          }
        }
      )

    onImport(
      importedUsers,
      invalidRows.length
    )

    resetImport()
    onOpenChange(false)
  }

  return (
    <Dialog
      open={open}
      onOpenChange={handleOpenChange}
    >
      <DialogContent className="overflow-hidden p-0 sm:max-w-190">
        {/* Header */}
        <div className="px-6 pt-6">
          <DialogHeader>
            <div className="mb-4 flex size-11 items-center justify-center rounded-xl bg-(--primary-bg) text-(--primary)">
              <Upload
                size={20}
                strokeWidth={1.8}
              />
            </div>

            <DialogTitle>
              Import users
            </DialogTitle>

            <DialogDescription className="mt-1.5">
              Add multiple users at once
              using a CSV file.
            </DialogDescription>
          </DialogHeader>

          <div className="mt-4">
            <Button
              type="button"
              variant="ghost"
              className="h-8 px-2 text-xs"
              onClick={downloadTemplate}
            >
              <Download className="size-3.5" />
              Download CSV template
            </Button>
          </div>
        </div>

        {/* Body */}
        <div className="space-y-5 px-6 py-5">
          <FileUpload
            accept=".csv,text/csv"
            onFilesSelected={
              handleFilesSelected
            }
            label={
              fileName
                ? fileName
                : "Drop a CSV or click to browse"
            }
            className="min-h-24 justify-center"
          />

          {fileError ? (
            <div className="flex gap-3 rounded-xl border border-(--danger)/20 bg-(--danger-bg) px-4 py-3">
              <AlertTriangle className="mt-0.5 size-4 shrink-0 text-(--danger)" />

              <div>
                <p className="text-xs font-medium text-(--danger)">
                  Couldn&apos;t import file
                </p>

                <p className="mt-1 text-[11px] text-(--text-secondary)">
                  {fileError}
                </p>
              </div>
            </div>
          ) : null}

          {previewRows.length > 0 ? (
            <>
              {/* File summary */}
              <div className="flex items-center justify-between gap-3 rounded-xl border border-(--border) bg-(--search-bg)/50 px-4 py-3">
                <div className="flex min-w-0 items-center gap-3">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-(--primary-bg) text-(--primary)">
                    <FileSpreadsheet className="size-4" />
                  </div>

                  <div className="min-w-0">
                    <p className="truncate text-xs font-medium text-(--text)">
                      {fileName}
                    </p>

                    <p className="mt-0.5 text-[11px] text-(--text-secondary)">
                      {previewRows.length} rows detected
                    </p>
                  </div>
                </div>

                <Button
                  type="button"
                  variant="ghost"
                  className="h-8 px-2.5 text-xs"
                  onClick={resetImport}
                >
                  <RotateCcw className="size-3.5" />
                  Replace
                </Button>
              </div>

              {/* Stats */}
              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-xl border border-(--border) px-4 py-3">
                  <p className="text-[11px] text-(--text-secondary)">
                    Total rows
                  </p>

                  <p className="mt-1 text-lg font-semibold text-(--text)">
                    {previewRows.length}
                  </p>
                </div>

                <div className="rounded-xl border border-(--success)/15 bg-(--success-bg)/50 px-4 py-3">
                  <p className="text-[11px] text-(--text-secondary)">
                    Ready to import
                  </p>

                  <p className="mt-1 text-lg font-semibold text-(--success)">
                    {validRows.length}
                  </p>
                </div>

                <div className="rounded-xl border border-(--warning)/15 bg-(--warning-bg)/50 px-4 py-3">
                  <p className="text-[11px] text-(--text-secondary)">
                    Need attention
                  </p>

                  <p className="mt-1 text-lg font-semibold text-(--warning)">
                    {invalidRows.length}
                  </p>
                </div>
              </div>

              {/* Preview */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-medium text-(--text)">
                      Preview
                    </p>

                    <p className="mt-0.5 text-[11px] text-(--text-muted)">
                      Showing the first 5 rows.
                    </p>
                  </div>
                </div>

                <Table className="min-w-155">
                  <TableHeader>
                    <TableRow className="hover:bg-transparent">
                      <TableHead className="w-12">
                        Row
                      </TableHead>
                      <TableHead>
                        User
                      </TableHead>
                      <TableHead>
                        Role
                      </TableHead>
                      <TableHead>
                        Plan
                      </TableHead>
                      <TableHead>
                        Status
                      </TableHead>
                    </TableRow>
                  </TableHeader>

                  <TableBody>
                    {previewRows
                      .slice(0, 5)
                      .map((row) => (
                        <TableRow
                          key={row.rowNumber}
                        >
                          <TableCell className="text-(--text-muted)">
                            {row.rowNumber}
                          </TableCell>

                          <TableCell>
                            <div>
                              <p className="text-xs font-medium text-(--text)">
                                {row.name ||
                                  "Missing name"}
                              </p>

                              <p className="mt-0.5 text-[10px] text-(--text-secondary)">
                                {row.email ||
                                  "Missing email"}
                              </p>

                              {!row.valid &&
                              row.errors.length ? (
                                <p className="mt-1 max-w-70 text-[10px] text-(--danger)">
                                  {row.errors.join(
                                    " • "
                                  )}
                                </p>
                              ) : null}
                            </div>
                          </TableCell>

                          <TableCell>
                            {row.role || "—"}
                          </TableCell>

                          <TableCell>
                            {row.plan || "—"}
                          </TableCell>

                          <TableCell>
                            {row.valid ? (
                              <Badge
                                variant="success"
                                className="gap-1 px-2 py-0.5 text-[10px]"
                              >
                                <CheckCircle2 className="size-3" />
                                Valid
                              </Badge>
                            ) : (
                              <Badge
                                variant="warning"
                                className="gap-1 px-2 py-0.5 text-[10px]"
                              >
                                <AlertTriangle className="size-3" />
                                Error
                              </Badge>
                            )}
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </div>

              {invalidRows.length > 0 ? (
                <div className="rounded-xl bg-(--warning-bg) px-4 py-3">
                  <p className="text-[11px] text-(--warning-text)">
                    {invalidRows.length} invalid{" "}
                    {invalidRows.length === 1
                      ? "row will"
                      : "rows will"}{" "}
                    be skipped during import.
                  </p>
                </div>
              ) : null}
            </>
          ) : null}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-2 border-t border-(--border) bg-(--surface) px-6 py-4">
          <Button
            type="button"
            variant="secondary"
            onClick={() =>
              handleOpenChange(false)
            }
          >
            Cancel
          </Button>

          <Button
            type="button"
            disabled={
              validRows.length === 0
            }
            onClick={handleImport}
          >
            <Upload className="size-4" />

            {validRows.length > 0
              ? `Import ${validRows.length} users`
              : "Import users"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}