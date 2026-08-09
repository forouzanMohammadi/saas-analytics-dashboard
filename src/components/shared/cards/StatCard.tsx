import { cva, type VariantProps } from "class-variance-authority";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const statCardVariants = cva(
  "flex items-center gap-3 rounded-2xl border p-4 shadow-[0_1px_12px_rgba(30,27,46,0.03)]",
  {
    variants: {
      variant: {
        default: "bg-(--surface) border-(--border)",
        accent: "bg-(--primary) border-transparent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const iconWrapperVariants = cva(
  "flex h-10 w-10 shrink-0 items-center justify-center rounded-[11px]",
  {
    variants: {
      variant: {
        default: "bg-(--primary-bg) text-(--primary)",
        accent: "bg-white/15 text-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface StatCardProps extends VariantProps<typeof statCardVariants> {
  icon: LucideIcon;
  label: string;
  value: string;
  className?: string;
}

export function StatCard({ icon: Icon, label, value, variant, className }: StatCardProps) {
  return (
    <div className={cn(statCardVariants({ variant }), className)}>
      <div className={iconWrapperVariants({ variant })}>
        <Icon size={20} strokeWidth={1.8} />
      </div>
      <div>
        <p
          className={cn(
            "text-[11.5px]",
            variant === "accent" ? "text-white/80" : "text-(--text-secondary)"
          )}
        >
          {label}
        </p>
        <p
          className={cn(
            "text-[18px] font-medium",
            variant === "accent" ? "text-white" : "text-(--text)"
          )}
        >
          {value}
        </p>
      </div>
    </div>
  );
}