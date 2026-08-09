import type { ReactNode } from "react";
import { BarChart3 } from "lucide-react";
import { cn } from "@/lib/utils";

interface EmptyStateProps {
  title: string;
  description: string;
  action?: ReactNode;
  icon?: ReactNode;
  className?: string;
}

export  function EmptyState({
  title,
  description,
  action,
  icon,
  className,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex min-h-161.5 w-full flex-col items-center justify-center",
        "rounded-[42px] border border-dashed",
        "border-(--border) bg-(--surface)",
        "px-6 py-16 text-center",
        className
      )}
    >
      {/* Icon */}
      <div
        className="
          mb-10 flex size-35.5 items-center justify-center
          rounded-[38px]
          bg-(--primary-bg)
          text-(--primary)
        "
      >
        {icon ?? <BarChart3 className="size-14.5" strokeWidth={2.2} />}
      </div>

      {/* Content */}
      <div className="max-w-175">
        <h2
          className="
            text-[42px] font-semibold leading-[1.2]
            tracking-[-0.03em]
            text-(--text)
          "
        >
          {title}
        </h2>

        <p
          className="
            mt-4
            text-[30px] font-normal leading-[1.4]
            tracking-[-0.02em]
            text-(--text-secondary)
          "
        >
          {description}
        </p>
      </div>

      {/* Action */}
      {action && <div className="mt-11">{action}</div>}
    </div>
  );
}