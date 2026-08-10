export type AnalyticsRange = "7d" | "30d" | "90d" | "12m"

export type PerformanceMetric =
  | "revenue"
  | "sessions"
  | "users"
  | "conversion"

export type AcquisitionMetric =
  | "sessions"
  | "conversions"
  | "revenue"

export interface PerformancePoint {
  label: string

  revenue: number
  previousRevenue: number

  sessions: number
  previousSessions: number

  users: number
  previousUsers: number

  conversion: number
  previousConversion: number
}

export interface AnalyticsKpi {
  title: string
  value: string
  trend: string
  positive: boolean
  sparkline: number[]
}

export interface TrafficSource {
  id: number
  source: string
  channel: string
  sessions: number
  users: number
  conversion: number
  revenue: number
  change: number
}

export const analyticsByRange: Record<
  AnalyticsRange,
  {
    kpis: AnalyticsKpi[]
    performance: PerformancePoint[]
  }
> = {
  "7d": {
    kpis: [
      {
        title: "Sessions",
        value: "48,290",
        trend: "12.4%",
        positive: true,
        sparkline: [35, 39, 37, 43, 41, 48, 46],
      },
      {
        title: "Unique visitors",
        value: "32,480",
        trend: "8.7%",
        positive: true,
        sparkline: [26, 28, 27, 30, 29, 33, 32],
      },
      {
        title: "Conversion rate",
        value: "4.82%",
        trend: "2.1%",
        positive: true,
        sparkline: [4.1, 4.3, 4.2, 4.5, 4.4, 4.7, 4.82],
      },
      {
        title: "Avg. session duration",
        value: "4m 32s",
        trend: "1.8%",
        positive: false,
        sparkline: [4.2, 4.4, 4.3, 4.5, 4.6, 4.55, 4.53],
      },
    ],

    performance: [
      {
        label: "May 4",
        revenue: 12000,
        previousRevenue: 7000,
        sessions: 5800,
        previousSessions: 4700,
        users: 4100,
        previousUsers: 3500,
        conversion: 4.1,
        previousConversion: 3.8,
      },
      {
        label: "May 5",
        revenue: 18000,
        previousRevenue: 10000,
        sessions: 6400,
        previousSessions: 5100,
        users: 4400,
        previousUsers: 3700,
        conversion: 4.25,
        previousConversion: 3.9,
      },
      {
        label: "May 6",
        revenue: 27000,
        previousRevenue: 13000,
        sessions: 6900,
        previousSessions: 5500,
        users: 4700,
        previousUsers: 3900,
        conversion: 4.4,
        previousConversion: 4,
      },
      {
        label: "May 7",
        revenue: 38000,
        previousRevenue: 20000,
        sessions: 7200,
        previousSessions: 5900,
        users: 4900,
        previousUsers: 4100,
        conversion: 4.55,
        previousConversion: 4.1,
      },
      {
        label: "May 8",
        revenue: 46000,
        previousRevenue: 28000,
        sessions: 7600,
        previousSessions: 6300,
        users: 5200,
        previousUsers: 4300,
        conversion: 4.62,
        previousConversion: 4.2,
      },
      {
        label: "May 9",
        revenue: 41000,
        previousRevenue: 24000,
        sessions: 6800,
        previousSessions: 5700,
        users: 4600,
        previousUsers: 4000,
        conversion: 4.68,
        previousConversion: 4.3,
      },
      {
        label: "May 10",
        revenue: 52000,
        previousRevenue: 33000,
        sessions: 6990,
        previousSessions: 6100,
        users: 4680,
        previousUsers: 4200,
        conversion: 4.82,
        previousConversion: 4.45,
      },
    ],
  },

  "30d": {
    kpis: [
      {
        title: "Sessions",
        value: "184,920",
        trend: "10.8%",
        positive: true,
        sparkline: [120, 128, 132, 139, 148, 171, 185],
      },
      {
        title: "Unique visitors",
        value: "126,340",
        trend: "7.4%",
        positive: true,
        sparkline: [84, 89, 91, 98, 106, 117, 126],
      },
      {
        title: "Conversion rate",
        value: "4.61%",
        trend: "1.7%",
        positive: true,
        sparkline: [4.1, 4.2, 4.25, 4.3, 4.4, 4.5, 4.61],
      },
      {
        title: "Avg. session duration",
        value: "4m 18s",
        trend: "2.3%",
        positive: true,
        sparkline: [4, 4.05, 4.1, 4.08, 4.2, 4.22, 4.3],
      },
    ],

    performance: [
      {
        label: "Week 1",
        revenue: 68000,
        previousRevenue: 54000,
        sessions: 41000,
        previousSessions: 36000,
        users: 28000,
        previousUsers: 25000,
        conversion: 4.2,
        previousConversion: 3.9,
      },
      {
        label: "Week 2",
        revenue: 79000,
        previousRevenue: 61000,
        sessions: 43800,
        previousSessions: 38200,
        users: 29800,
        previousUsers: 26400,
        conversion: 4.36,
        previousConversion: 4.05,
      },
      {
        label: "Week 3",
        revenue: 92000,
        previousRevenue: 71000,
        sessions: 46200,
        previousSessions: 40100,
        users: 31600,
        previousUsers: 27500,
        conversion: 4.49,
        previousConversion: 4.18,
      },
      {
        label: "Week 4",
        revenue: 106000,
        previousRevenue: 82000,
        sessions: 53920,
        previousSessions: 43600,
        users: 36940,
        previousUsers: 30100,
        conversion: 4.61,
        previousConversion: 4.25,
      },
    ],
  },

  "90d": {
    kpis: [
      {
        title: "Sessions",
        value: "528,410",
        trend: "14.2%",
        positive: true,
        sparkline: [340, 362, 391, 418, 449, 486, 528],
      },
      {
        title: "Unique visitors",
        value: "361,820",
        trend: "11.6%",
        positive: true,
        sparkline: [230, 247, 263, 287, 310, 338, 362],
      },
      {
        title: "Conversion rate",
        value: "4.73%",
        trend: "2.5%",
        positive: true,
        sparkline: [4.2, 4.3, 4.4, 4.42, 4.55, 4.65, 4.73],
      },
      {
        title: "Avg. session duration",
        value: "4m 41s",
        trend: "3.8%",
        positive: true,
        sparkline: [4.1, 4.2, 4.3, 4.35, 4.48, 4.55, 4.68],
      },
    ],

    performance: [
      {
        label: "Jun",
        revenue: 186000,
        previousRevenue: 142000,
        sessions: 158000,
        previousSessions: 134000,
        users: 109000,
        previousUsers: 92000,
        conversion: 4.36,
        previousConversion: 4.02,
      },
      {
        label: "Jul",
        revenue: 224000,
        previousRevenue: 175000,
        sessions: 174000,
        previousSessions: 148000,
        users: 118000,
        previousUsers: 101000,
        conversion: 4.58,
        previousConversion: 4.18,
      },
      {
        label: "Aug",
        revenue: 276000,
        previousRevenue: 211000,
        sessions: 196410,
        previousSessions: 164000,
        users: 134820,
        previousUsers: 112000,
        conversion: 4.73,
        previousConversion: 4.34,
      },
    ],
  },

  "12m": {
    kpis: [
      {
        title: "Sessions",
        value: "2,284,920",
        trend: "22.6%",
        positive: true,
        sparkline: [1100, 1280, 1420, 1560, 1780, 2010, 2285],
      },
      {
        title: "Unique visitors",
        value: "1,642,380",
        trend: "18.4%",
        positive: true,
        sparkline: [820, 910, 1050, 1180, 1320, 1480, 1642],
      },
      {
        title: "Conversion rate",
        value: "4.91%",
        trend: "5.2%",
        positive: true,
        sparkline: [4, 4.15, 4.3, 4.41, 4.55, 4.72, 4.91],
      },
      {
        title: "Avg. session duration",
        value: "4m 49s",
        trend: "4.1%",
        positive: true,
        sparkline: [4.1, 4.2, 4.35, 4.4, 4.52, 4.65, 4.82],
      },
    ],

    performance: [
      {
        label: "Sep",
        revenue: 132000,
        previousRevenue: 105000,
        sessions: 142000,
        previousSessions: 119000,
        users: 96000,
        previousUsers: 81000,
        conversion: 4.08,
        previousConversion: 3.74,
      },
      {
        label: "Oct",
        revenue: 148000,
        previousRevenue: 112000,
        sessions: 151000,
        previousSessions: 124000,
        users: 103000,
        previousUsers: 85000,
        conversion: 4.16,
        previousConversion: 3.81,
      },
      {
        label: "Nov",
        revenue: 156000,
        previousRevenue: 121000,
        sessions: 158000,
        previousSessions: 130000,
        users: 109000,
        previousUsers: 89000,
        conversion: 4.22,
        previousConversion: 3.9,
      },
      {
        label: "Dec",
        revenue: 171000,
        previousRevenue: 134000,
        sessions: 169000,
        previousSessions: 139000,
        users: 116000,
        previousUsers: 95000,
        conversion: 4.31,
        previousConversion: 4,
      },
      {
        label: "Jan",
        revenue: 184000,
        previousRevenue: 142000,
        sessions: 176000,
        previousSessions: 148000,
        users: 123000,
        previousUsers: 101000,
        conversion: 4.38,
        previousConversion: 4.08,
      },
      {
        label: "Feb",
        revenue: 198000,
        previousRevenue: 151000,
        sessions: 181000,
        previousSessions: 153000,
        users: 129000,
        previousUsers: 105000,
        conversion: 4.44,
        previousConversion: 4.14,
      },
      {
        label: "Mar",
        revenue: 212000,
        previousRevenue: 164000,
        sessions: 188000,
        previousSessions: 158000,
        users: 136000,
        previousUsers: 110000,
        conversion: 4.51,
        previousConversion: 4.2,
      },
      {
        label: "Apr",
        revenue: 226000,
        previousRevenue: 174000,
        sessions: 194000,
        previousSessions: 164000,
        users: 141000,
        previousUsers: 115000,
        conversion: 4.58,
        previousConversion: 4.26,
      },
      {
        label: "May",
        revenue: 241000,
        previousRevenue: 186000,
        sessions: 201000,
        previousSessions: 171000,
        users: 147000,
        previousUsers: 120000,
        conversion: 4.66,
        previousConversion: 4.32,
      },
      {
        label: "Jun",
        revenue: 258000,
        previousRevenue: 196000,
        sessions: 207000,
        previousSessions: 177000,
        users: 151000,
        previousUsers: 124000,
        conversion: 4.72,
        previousConversion: 4.38,
      },
      {
        label: "Jul",
        revenue: 274000,
        previousRevenue: 209000,
        sessions: 216000,
        previousSessions: 184000,
        users: 157000,
        previousUsers: 130000,
        conversion: 4.81,
        previousConversion: 4.44,
      },
      {
        label: "Aug",
        revenue: 298000,
        previousRevenue: 224000,
        sessions: 231920,
        previousSessions: 191000,
        users: 164380,
        previousUsers: 136000,
        conversion: 4.91,
        previousConversion: 4.52,
      },
    ],
  },
}

export const acquisitionData = [
  {
    name: "Organic",
    sessions: 18200,
    conversions: 1058,
    revenue: 32480,
  },
  {
    name: "Paid",
    sessions: 9720,
    conversions: 399,
    revenue: 18240,
  },
  {
    name: "Referral",
    sessions: 6140,
    conversions: 381,
    revenue: 14860,
  },
  {
    name: "Social",
    sessions: 2480,
    conversions: 69,
    revenue: 5820,
  },
  {
    name: "Email",
    sessions: 1860,
    conversions: 156,
    revenue: 7640,
  },
]

export const funnelData = [
  {
    name: "Visitors",
    value: 48290,
  },
  {
    name: "Signups",
    value: 30840,
  },
  {
    name: "Trials",
    value: 8640,
  },
  {
    name: "Paid customers",
    value: 3840,
  },
]

export const deviceData = [
  {
    name: "Desktop",
    value: 62,
    fill: "var(--primary)",
  },
  {
    name: "Mobile",
    value: 30,
    fill: "var(--primary-light)",
  },
  {
    name: "Tablet",
    value: 8,
    fill: "var(--primary-soft)",
  },
]

export const trafficSources: TrafficSource[] = [
  {
    id: 1,
    source: "Organic Search",
    channel: "Organic",
    sessions: 18240,
    users: 14290,
    conversion: 5.8,
    revenue: 32480,
    change: 12.4,
  },
  {
    id: 2,
    source: "Google Ads",
    channel: "Paid",
    sessions: 9720,
    users: 7840,
    conversion: 4.1,
    revenue: 18240,
    change: 8.2,
  },
  {
    id: 3,
    source: "Direct",
    channel: "Direct",
    sessions: 6140,
    users: 5220,
    conversion: 3.2,
    revenue: 14860,
    change: 5.6,
  },
  {
    id: 4,
    source: "Referral",
    channel: "Referral",
    sessions: 4280,
    users: 3610,
    conversion: 6.2,
    revenue: 9420,
    change: 14.8,
  },
  {
    id: 5,
    source: "Social Media",
    channel: "Social",
    sessions: 2480,
    users: 2140,
    conversion: 2.8,
    revenue: 5820,
    change: -3.1,
  },
  {
    id: 6,
    source: "Email Campaigns",
    channel: "Email",
    sessions: 1860,
    users: 1420,
    conversion: 8.4,
    revenue: 7640,
    change: 11.2,
  },
  {
    id: 7,
    source: "LinkedIn",
    channel: "Social",
    sessions: 1540,
    users: 1280,
    conversion: 4.9,
    revenue: 4830,
    change: 6.4,
  },
  {
    id: 8,
    source: "Partner Program",
    channel: "Referral",
    sessions: 1320,
    users: 1090,
    conversion: 7.1,
    revenue: 5240,
    change: 9.8,
  },
  {
    id: 9,
    source: "YouTube",
    channel: "Social",
    sessions: 1180,
    users: 960,
    conversion: 2.4,
    revenue: 2190,
    change: 4.2,
  },
  {
    id: 10,
    source: "Bing Ads",
    channel: "Paid",
    sessions: 980,
    users: 790,
    conversion: 3.9,
    revenue: 3010,
    change: -1.8,
  },
  {
    id: 11,
    source: "Product Hunt",
    channel: "Referral",
    sessions: 860,
    users: 740,
    conversion: 5.1,
    revenue: 2780,
    change: 16.2,
  },
  {
    id: 12,
    source: "Newsletter",
    channel: "Email",
    sessions: 740,
    users: 610,
    conversion: 9.1,
    revenue: 3420,
    change: 13.5,
  },
]

export const retentionData = [
  {
    cohort: "Jul 07",
    users: 1240,
    weeks: [100, 72, 61, 54, 48],
  },
  {
    cohort: "Jul 14",
    users: 1380,
    weeks: [100, 75, 65, 57, null],
  },
  {
    cohort: "Jul 21",
    users: 1460,
    weeks: [100, 74, 63, null, null],
  },
  {
    cohort: "Jul 28",
    users: 1520,
    weeks: [100, 79, null, null, null],
  },
  {
    cohort: "Aug 04",
    users: 1640,
    weeks: [100, null, null, null, null],
  },
]