export interface ParsedCsvUser {
  rowNumber: number
  name: string
  email: string
  role: string
  plan: string
}

export interface ParseUsersCsvResult {
  rows: ParsedCsvUser[]
  error?: string
}

function parseCsv(content: string): string[][] {
  const rows: string[][] = []

  let row: string[] = []
  let field = ""
  let inQuotes = false

  for (let i = 0; i < content.length; i++) {
    const char = content[i]
    const next = content[i + 1]

    if (char === '"') {
      if (inQuotes && next === '"') {
        field += '"'
        i++
      } else {
        inQuotes = !inQuotes
      }

      continue
    }

    if (char === "," && !inQuotes) {
      row.push(field.trim())
      field = ""
      continue
    }

    if (
      (char === "\n" || char === "\r") &&
      !inQuotes
    ) {
      if (char === "\r" && next === "\n") {
        i++
      }

      row.push(field.trim())

      if (row.some((value) => value.length > 0)) {
        rows.push(row)
      }

      row = []
      field = ""
      continue
    }

    field += char
  }

  row.push(field.trim())

  if (row.some((value) => value.length > 0)) {
    rows.push(row)
  }

  return rows
}

export function parseUsersCsv(
  rawContent: string
): ParseUsersCsvResult {
  const content = rawContent.replace(/^\uFEFF/, "")
  const data = parseCsv(content)

  if (data.length === 0) {
    return {
      rows: [],
      error: "The CSV file is empty.",
    }
  }

  const headers = data[0].map((header) =>
    header.trim().toLowerCase()
  )

  const requiredHeaders = [
    "name",
    "email",
    "role",
    "plan",
  ]

  const missingHeaders =
    requiredHeaders.filter(
      (header) => !headers.includes(header)
    )

  if (missingHeaders.length > 0) {
    return {
      rows: [],
      error: `Missing required columns: ${missingHeaders.join(", ")}`,
    }
  }

  const nameIndex = headers.indexOf("name")
  const emailIndex = headers.indexOf("email")
  const roleIndex = headers.indexOf("role")
  const planIndex = headers.indexOf("plan")

  const rows = data
    .slice(1)
    .filter((row) =>
      row.some((value) => value.trim())
    )
    .map((row, index) => ({
      rowNumber: index + 2,

      name:
        row[nameIndex]?.trim() ?? "",

      email:
        row[emailIndex]?.trim() ?? "",

      role:
        row[roleIndex]?.trim() ?? "",

      plan:
        row[planIndex]?.trim() ?? "",
    }))

  return {
    rows,
  }
}