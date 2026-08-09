import { MetricCard } from "@/components/shared/MetricCard";

const stats = [
  {
    title: "Revenue",
    value: "$124,000",
  },
  {
    title: "Users",
    value: "25,340",
  },
  {
    title: "Orders",
    value: "1,240",
  },
  {
    title: "Growth",
    value: "+12%",
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="mt-1 text-gray-500">
          Welcome back! Here's an overview of your business.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="rounded-xl border bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <p className="text-sm font-medium text-gray-500">
              {stat.title}
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-900">
              {stat.value}
            </h2>
          </div>
        ))}
        <div className="grid grid-cols-1 gap-6">
          <MetricCard
            title="Simple"
            value={84210}
          />

          <MetricCard
            title="With trend badge"
            value={12480}
            variant="trend"
            trend={{ value: "5.6%", isPositive: true }}
          />

          <MetricCard
            title="With sparkline"
            value="3.9%"
            variant="sparkline"
            sparklineData={[12, 18, 15, 22, 19, 25, 23, 28, 26, 30]}
          />
        </div>
      </div>
    </div>
  );
}