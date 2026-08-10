import type { LucideIcon } from "lucide-react"
import {
  BarChart3,
  DollarSign,
  MoreHorizontal,
  ShoppingBag,
  UserPlus,
  Zap,
} from "lucide-react"

import { Badge } from "@/components/shared/feedback/Badge"
import { Button } from "@/components/shared/buttons/Button"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/shared/data-display/Table"

import { transactions } from "../data/dashboardData"

const panelClass =
  "rounded-2xl border border-(--border) bg-(--surface) shadow-[0_1px_12px_rgba(30,27,46,0.03)]"

const statusVariant = {
  Completed: "success",
  Pending: "warning",
  Failed: "danger",
} as const

export function RecentTransactions() {
  return (
    <section className={`${panelClass} overflow-hidden`}>
      <div className="flex items-start justify-between gap-4 p-5">
        <div>
          <h2 className="text-[15px] font-semibold text-(--text)">
            Recent Transactions
          </h2>

          <p className="mt-0.5 text-xs text-(--text-secondary)">
            Latest transactions from your customers
          </p>
        </div>

        <Button variant="ghost" className="h-8 px-3 text-xs">
          View all
        </Button>
      </div>

      <div className="px-5 pb-5">
        <Table className="min-w-170">
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead>Customer</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="w-12" />
            </TableRow>
          </TableHeader>

          <TableBody>
            {transactions.map((transaction) => {
              const initials = transaction.customer
                .split(" ")
                .map((part) => part[0])
                .join("")

              return (
                <TableRow key={transaction.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-(--avatar-bg) text-[10px] font-semibold text-(--primary-dark)">
                        {initials}
                      </div>

                      <div>
                        <p className="text-xs font-medium text-(--text)">
                          {transaction.customer}
                        </p>

                        <p className="text-[11px] text-(--text-muted)">
                          {transaction.email}
                        </p>
                      </div>
                    </div>
                  </TableCell>

                  <TableCell className="font-medium">
                    {transaction.amount}
                  </TableCell>

                  <TableCell>
                    <Badge
                      variant={
                        statusVariant[transaction.status]
                      }
                      className="px-2.5 py-1 text-[10px]"
                    >
                      {transaction.status}
                    </Badge>
                  </TableCell>

                  <TableCell className="text-(--text-secondary)">
                    {transaction.date}
                  </TableCell>

                  <TableCell>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="size-8"
                      aria-label={`Actions for ${transaction.customer}`}
                    >
                      <MoreHorizontal className="size-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </div>
    </section>
  )
}

interface ActivityItem {
  title: string
  description: string
  time: string
  icon: LucideIcon
}

const activities: ActivityItem[] = [
  {
    title: "New user registered",
    description: "Sarah Johnson joined your team",
    time: "2m ago",
    icon: UserPlus,
  },
  {
    title: "Payment received",
    description: "$1,240.00 from Olivia Martin",
    time: "15m ago",
    icon: DollarSign,
  },
  {
    title: "New order placed",
    description: "Order #1234 by Jackson Lee",
    time: "1h ago",
    icon: ShoppingBag,
  },
  {
    title: "Plan upgraded",
    description: "Global Tech upgraded to Growth plan",
    time: "3h ago",
    icon: Zap,
  },
  {
    title: "Report generated",
    description: "Monthly analytics report is ready",
    time: "5h ago",
    icon: BarChart3,
  },
]

export function RecentActivity() {
  return (
    <section className={`${panelClass} p-5`}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-[15px] font-semibold text-(--text)">
            Recent Activity
          </h2>

          <p className="mt-0.5 text-xs text-(--text-secondary)">
            Latest activity in your account
          </p>
        </div>

        <Button variant="ghost" className="h-8 px-3 text-xs">
          View all
        </Button>
      </div>

      <div className="mt-5 divide-y divide-(--border)">
        {activities.map((activity) => {
          const Icon = activity.icon

          return (
            <div
              key={`${activity.title}-${activity.time}`}
              className="flex items-start gap-3 py-3 first:pt-0 last:pb-0"
            >
              <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-(--primary-bg) text-(--primary)">
                <Icon className="size-4" />
              </div>

              <div className="min-w-0 flex-1">
                <p className="truncate text-xs font-medium text-(--text)">
                  {activity.title}
                </p>

                <p className="mt-0.5 truncate text-[11px] text-(--text-secondary)">
                  {activity.description}
                </p>
              </div>

              <span className="shrink-0 pt-0.5 text-[10px] text-(--text-muted)">
                {activity.time}
              </span>
            </div>
          )
        })}
      </div>
    </section>
  )
}