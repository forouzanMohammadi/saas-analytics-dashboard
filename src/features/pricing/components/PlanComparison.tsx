import { Check } from "lucide-react"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/shared/data-display/Table"

import { cn } from "@/lib/utils"

import {
  comparisonRows,
  type PlanId,
} from "@/features/pricing/data/pricingData"

interface PlanComparisonProps {
  currentPlanId: PlanId
}

const planColumns: {
  id: PlanId
  label: string
}[] = [
  {
    id: "starter",
    label: "Starter",
  },
  {
    id: "growth",
    label: "Growth",
  },
  {
    id: "scale",
    label: "Scale",
  },
  {
    id: "enterprise",
    label: "Enterprise",
  },
]

export function PlanComparison({
  currentPlanId,
}: PlanComparisonProps) {
  return (
    <section className="overflow-hidden rounded-2xl border border-(--border) bg-(--surface)">
      <div className="px-5 pt-5">
        <h2 className="text-[15px] font-semibold text-(--text)">
          Compare plans
        </h2>

        <p className="mt-1 text-[11px] text-(--text-secondary)">
          See how our plans compare side by side.
        </p>
      </div>

      <div className="p-4">
        <Table className="min-w-175">
          <TableHeader>
            <TableRow>
              <TableHead className="min-w-44">
                Feature
              </TableHead>

              {planColumns.map(
                (column) => (
                  <TableHead
                    key={column.id}
                    className={cn(
                      "text-center",
                      column.id ===
                        currentPlanId &&
                        "bg-(--primary-bg)/45 text-(--primary-dark)"
                    )}
                  >
                    {column.label}
                  </TableHead>
                )
              )}
            </TableRow>
          </TableHeader>

          <TableBody>
            {comparisonRows.map(
              (row) => (
                <TableRow key={row.feature}>
                  <TableCell className="text-[11px] font-medium">
                    {row.feature}
                  </TableCell>

                  {planColumns.map(
                    (column) => {
                      const value =
                        row[column.id]

                      return (
                        <TableCell
                          key={
                            column.id
                          }
                          className={cn(
                            "text-center text-[11px]",
                            column.id ===
                              currentPlanId &&
                              "bg-(--primary-bg)/25"
                          )}
                        >
                          {typeof value ===
                          "boolean" ? (
                            value ? (
                              <Check className="mx-auto size-4 text-(--success)" />
                            ) : (
                              <span className="text-(--text-muted)">
                                —
                              </span>
                            )
                          ) : (
                            value
                          )}
                        </TableCell>
                      )
                    }
                  )}
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </div>
    </section>
  )
}