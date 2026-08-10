export type DashboardRange = "7d" | "30d" | "90d" | "12m"

export interface DashboardMetric {
  title: string
  value: string
  trend: string
  positive: boolean
  sparkline: number[]
}

export interface RevenuePoint {
  label: string
  revenue: number
  previous: number
}

export interface PerformanceItem {
  label: string
  value: string
  progress: number
}

export interface Transaction {
  id: number
  customer: string
  email: string
  amount: string
  status: "Completed" | "Pending" | "Failed"
  date: string
}

export const dashboardDataByRange: Record<
  DashboardRange,
  {
    metrics: DashboardMetric[]
    revenue: RevenuePoint[]
  }
> = {
  "7d": {
    metrics: [
      {
        title: "Total Revenue",
        value: "$24,860",
        trend: "12.4%",
        positive: true,
        sparkline: [18, 21, 20, 25, 23, 28, 26],
      },
      {
        title: "Total Users",
        value: "4,892",
        trend: "8.7%",
        positive: true,
        sparkline: [40, 43, 42, 46, 45, 49, 51],
      },
      {
        title: "Total Orders",
        value: "1,492",
        trend: "15.3%",
        positive: true,
        sparkline: [22, 24, 27, 25, 29, 31, 35],
      },
      {
        title: "Conversion Rate",
        value: "4.82%",
        trend: "2.1%",
        positive: true,
        sparkline: [3.9, 4.1, 4, 4.3, 4.2, 4.6, 4.82],
      },
      {
        title: "Active Now",
        value: "312",
        trend: "4.3%",
        positive: false,
        sparkline: [320, 335, 328, 341, 329, 325, 312],
      },
    ],

    revenue: [
      { label: "Mon", revenue: 2800, previous: 2200 },
      { label: "Tue", revenue: 3400, previous: 2600 },
      { label: "Wed", revenue: 3100, previous: 2800 },
      { label: "Thu", revenue: 4200, previous: 3200 },
      { label: "Fri", revenue: 3900, previous: 3000 },
      { label: "Sat", revenue: 4700, previous: 3500 },
      { label: "Sun", revenue: 4360, previous: 3300 },
    ],
  },

  "30d": {
    metrics: [
      {
        title: "Total Revenue",
        value: "$84,210",
        trend: "10.8%",
        positive: true,
        sparkline: [62, 66, 64, 71, 69, 78, 84],
      },
      {
        title: "Total Users",
        value: "12,480",
        trend: "5.6%",
        positive: true,
        sparkline: [91, 94, 93, 97, 99, 103, 108],
      },
      {
        title: "Total Orders",
        value: "4,806",
        trend: "9.2%",
        positive: true,
        sparkline: [35, 39, 38, 43, 46, 44, 51],
      },
      {
        title: "Conversion Rate",
        value: "4.61%",
        trend: "1.8%",
        positive: true,
        sparkline: [4, 4.2, 4.1, 4.3, 4.35, 4.5, 4.61],
      },
      {
        title: "Active Now",
        value: "312",
        trend: "3.1%",
        positive: true,
        sparkline: [294, 302, 298, 306, 304, 310, 312],
      },
    ],

    revenue: [
      { label: "Week 1", revenue: 14200, previous: 11200 },
      { label: "Week 2", revenue: 16800, previous: 13900 },
      { label: "Week 3", revenue: 15700, previous: 14500 },
      { label: "Week 4", revenue: 18900, previous: 15100 },
      { label: "Week 5", revenue: 18610, previous: 16400 },
    ],
  },

  "90d": {
    metrics: [
      {
        title: "Total Revenue",
        value: "$218,420",
        trend: "14.2%",
        positive: true,
        sparkline: [130, 144, 151, 168, 179, 196, 218],
      },
      {
        title: "Total Users",
        value: "18,920",
        trend: "11.1%",
        positive: true,
        sparkline: [12, 13, 14, 15, 16, 17, 19],
      },
      {
        title: "Total Orders",
        value: "7,104",
        trend: "13.7%",
        positive: true,
        sparkline: [48, 51, 56, 60, 63, 68, 71],
      },
      {
        title: "Conversion Rate",
        value: "4.73%",
        trend: "2.4%",
        positive: true,
        sparkline: [4.1, 4.2, 4.28, 4.4, 4.5, 4.61, 4.73],
      },
      {
        title: "Active Now",
        value: "312",
        trend: "1.7%",
        positive: false,
        sparkline: [330, 326, 329, 320, 318, 316, 312],
      },
    ],

    revenue: [
      { label: "Jun 1", revenue: 21000, previous: 17000 },
      { label: "Jun 15", revenue: 26000, previous: 19000 },
      { label: "Jul 1", revenue: 28000, previous: 22000 },
      { label: "Jul 15", revenue: 31000, previous: 24000 },
      { label: "Aug 1", revenue: 35000, previous: 27000 },
      { label: "Aug 15", revenue: 38400, previous: 29000 },
      { label: "Aug 30", revenue: 39420, previous: 30400 },
    ],
  },

  "12m": {
    metrics: [
      {
        title: "Total Revenue",
        value: "$624,560",
        trend: "18.4%",
        positive: true,
        sparkline: [38, 42, 47, 51, 56, 60, 65],
      },
      {
        title: "Total Users",
        value: "24,892",
        trend: "21.7%",
        positive: true,
        sparkline: [14, 16, 17, 19, 21, 23, 25],
      },
      {
        title: "Total Orders",
        value: "8,492",
        trend: "16.3%",
        positive: true,
        sparkline: [52, 55, 59, 64, 68, 74, 81],
      },
      {
        title: "Conversion Rate",
        value: "4.82%",
        trend: "3.2%",
        positive: true,
        sparkline: [3.6, 3.8, 4, 4.15, 4.3, 4.55, 4.82],
      },
      {
        title: "Active Now",
        value: "312",
        trend: "6.8%",
        positive: true,
        sparkline: [260, 276, 284, 291, 298, 305, 312],
      },
    ],

    revenue: [
      { label: "Sep", revenue: 32000, previous: 28000 },
      { label: "Oct", revenue: 36000, previous: 31000 },
      { label: "Nov", revenue: 34000, previous: 30000 },
      { label: "Dec", revenue: 42000, previous: 35000 },
      { label: "Jan", revenue: 39000, previous: 34000 },
      { label: "Feb", revenue: 48000, previous: 39000 },
      { label: "Mar", revenue: 45000, previous: 38000 },
      { label: "Apr", revenue: 52000, previous: 43000 },
      { label: "May", revenue: 49000, previous: 41000 },
      { label: "Jun", revenue: 57000, previous: 46000 },
      { label: "Jul", revenue: 61000, previous: 49000 },
      { label: "Aug", revenue: 69560, previous: 52000 },
    ],
  },
}

export const performanceData: PerformanceItem[] = [
  {
    label: "Revenue",
    value: "$42,680",
    progress: 82,
  },
  {
    label: "Orders",
    value: "1,284",
    progress: 68,
  },
  {
    label: "New Users",
    value: "842",
    progress: 74,
  },
  {
    label: "Conversion",
    value: "4.82%",
    progress: 48,
  },
]

export const trafficData = [
  { name: "Organic", value: 18200 },
  { name: "Paid", value: 9700 },
  { name: "Referral", value: 6100 },
  { name: "Social", value: 2400 },
  { name: "Email", value: 1800 },
]

export const deviceData = [
  {
    name: "Desktop",
    value: 62,
    color: "var(--primary)",
  },
  {
    name: "Mobile",
    value: 30,
    color: "var(--primary-light)",
  },
  {
    name: "Tablet",
    value: 8,
    color: "var(--primary-soft)",
  },
]

export const topPages = [
  { path: "/dashboard", views: "12.4K", value: 100 },
  { path: "/products", views: "8.7K", value: 72 },
  { path: "/pricing", views: "6.2K", value: 54 },
  { path: "/analytics", views: "4.1K", value: 38 },
  { path: "/users", views: "3.6K", value: 30 },
]

export const transactions: Transaction[] = [
  {
    id: 1,
    customer: "Olivia Martin",
    email: "olivia@example.com",
    amount: "$1,240.00",
    status: "Completed",
    date: "Aug 10, 2026",
  },
  {
    id: 2,
    customer: "Jackson Lee",
    email: "jackson@example.com",
    amount: "$860.00",
    status: "Completed",
    date: "Aug 10, 2026",
  },
  {
    id: 3,
    customer: "Sophia Wilson",
    email: "sophia@example.com",
    amount: "$420.00",
    status: "Pending",
    date: "Aug 9, 2026",
  },
  {
    id: 4,
    customer: "Noah Brown",
    email: "noah@example.com",
    amount: "$2,150.00",
    status: "Completed",
    date: "Aug 9, 2026",
  },
  {
    id: 5,
    customer: "Emma Davis",
    email: "emma@example.com",
    amount: "$320.00",
    status: "Failed",
    date: "Aug 8, 2026",
  },
]