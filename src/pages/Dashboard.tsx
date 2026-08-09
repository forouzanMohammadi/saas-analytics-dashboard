import { EmptyState } from "@/components/shared/cards/EmptyState";
import { MetricCard } from "@/components/shared/cards/MetricCard";
import { Button } from "@/components/shared/buttons/Button";
import { Badge } from "@/components/shared/feedback/Badge";
import { Plus, Settings, MoreHorizontal, Mail, Bell, Info, Users, TrendingUp } from "lucide-react"
import { Checkbox } from "@/components/shared/forms/Checkbox";
import { RadioGroup, RadioItem } from "@/components/shared/forms/RadioGroup";
import { Switch } from "@/components/shared/forms/Switch";
import { Input } from "@/components/shared/forms/Input";
import { FileUpload } from "@/components/shared/forms/FileUpload";
import { TagInput } from "@/components/shared/forms/TagInput";
import { SearchInput } from "@/components/shared/forms/SearchInput";
import { PasswordInput } from "@/components/shared/forms/PasswordInput";
import { Select } from "@/components/shared/forms/Select";
import { DateInput } from "@/components/shared/forms/DateInput";
import { Textarea } from "@/components/shared/forms/Textarea";
import { useState } from "react";
import { StatusDot } from "@/components/shared/feedback/StatusDot";
import { NotificationBadge } from "@/components/shared/feedback/NotificationBadge";
import { Tooltip, TooltipProvider } from "@/components/shared/feedback/Tooltip";
import { ProgressCard } from "@/components/shared/cards/ProgressCard";
import { ListCard, ListCardItem } from "@/components/shared/cards/ListCard";
import { AlertCard } from "@/components/shared/cards/AlertCard";
import { StatCard } from "@/components/shared/cards/StatCard";
import UsersPage from "./Users";


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
  const [, setQuery] = useState("")
  const [plans, setPlans] = useState<string[]>(["Growth", "Scale"])

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
      <div className="p-8">
        <EmptyState
          title="No reports yet"
          description="Create your first report to see it here."
          action={
            <Button variant="primary">Get started</Button>
          }
        />
      </div>

      <Button variant="primary">Get started</Button>
      <Button variant="primary"><Plus />New report</Button>

      <Button size="sm">Small</Button>
      <Button size="default">Medium</Button>
      <Button size="lg">Large</Button>

      <Button variant="secondary">Gradient outline</Button>
      <Button variant="soft">Soft gradient</Button>
      <Button variant="ghost">Ghost</Button>

      <Button variant="success">Confirm</Button>
      <Button variant="destructive">Delete</Button>
      <Button variant="warning">Upgrade required</Button>

      <Button variant="primary" size="icon"><Plus /></Button>
      <Button variant="soft" size="icon"><Settings /></Button>
      <Button variant="secondary" size="icon"><MoreHorizontal /></Button>

      <Button variant="primary" loading>Saving...</Button>

      <div>
        <Badge variant="success">Active</Badge>
        <Badge variant="danger">Churned</Badge>
        <Badge variant="warning">Pending</Badge>
        <Badge variant="primary">Trial</Badge>
        <Badge variant="neutral">Draft</Badge>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox defaultChecked />
        <span>Checked</span>
      </div>

      <div className="flex items-center gap-2">
        <Checkbox />
        <span>Unchecked</span>
      </div>

      <RadioGroup defaultValue="a" className="flex items-center gap-2">
        <RadioItem value="a" />
        <span>Selected</span>
      </RadioGroup>

      <div className="flex items-center gap-2">
        <Switch defaultChecked />
        <span>Enabled</span>
      </div>
      <div className="flex items-center gap-2">
        <SearchInput onChange={(e) => setQuery(e.target.value)} />
        <Input type="email" startIcon={<Mail />} placeholder="name@company.com" />
        <PasswordInput placeholder="••••••••" />
        <Select
          defaultValue="growth"
          onChange={(e) => console.log(e.target.value)}
        >
          <option value="growth">Growth plan</option>
          <option value="scale">Scale plan</option>
        </Select>
        <DateInput defaultValue="2026-08-01" />
        <Textarea placeholder="Add a note..." />
        <TagInput value={plans} onChange={setPlans} placeholder="Add plan..." />
        <FileUpload onFilesSelected={(files) => console.log(files[0])} />
      </div>
      <div>
        <Badge variant="solid-primary">NEW</Badge>
        <Badge variant="solid-dark">PRO</Badge>
        <StatusDot variant="online" label="Online" />
        <StatusDot variant="offline" label="Offline" />
        <NotificationBadge count={5}>
          <Bell size={19} />
        </NotificationBadge>
        <TooltipProvider>
          <Tooltip content="Tooltip on top" side="top">
            <button><Info /></button>
          </Tooltip>

          <Tooltip title="Account settings" content="Manage billing and team access." side="right">
            <button><Settings /></button>
          </Tooltip>
        </TooltipProvider>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <StatCard icon={Users} label="Active users" value="25,340" />
        <StatCard icon={TrendingUp} label="Growth" value="+12.4%" variant="accent" />
      </div>

      <ProgressCard label="Storage used" value={68} subtitle="6.8 GB of 10 GB" />

      <ListCard>
        <ListCardItem avatar="AC" title="Acme Corp" subtitle="Enterprise plan" value="$12,400" />
        <ListCardItem avatar="GT" title="Global Tech" subtitle="Growth plan" value="$9,250" />
      </ListCard>

      <div className="flex flex-col gap-2">
        <AlertCard
          variant="insight"
          title="Revenue increased 12% this week"
          description="Driven mostly by upgrades on the Growth plan."
        />
        <AlertCard
          variant="warning"
          title="Payment failed for Mina Park"
          description="Retry the charge or contact the customer."
        />
      </div>
      <UsersPage />
    </div>
  );
}