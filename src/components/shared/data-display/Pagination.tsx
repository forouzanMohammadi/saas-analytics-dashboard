import { ChevronLeft, ChevronRight } from "lucide-react"

import { cn } from "@/lib/utils"

export interface PaginationProps {
  page: number
  totalPages: number
  onPageChange: (page: number) => void
  className?: string
}

function getPageList(page: number, totalPages: number): (number | "ellipsis")[] {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1)
  }

  const pages: (number | "ellipsis")[] = [1]

  if (page > 3) pages.push("ellipsis")

  const start = Math.max(2, page - 1)
  const end = Math.min(totalPages - 1, page + 1)
  for (let i = start; i <= end; i++) pages.push(i)

  if (page < totalPages - 2) pages.push("ellipsis")

  pages.push(totalPages)

  return pages
}

function Pagination({ page, totalPages, onPageChange, className }: PaginationProps) {
  const pages = getPageList(page, totalPages)

  return (
    <div className={cn("flex items-center gap-1", className)}>
      <button
        type="button"
        disabled={page <= 1}
        onClick={() => onPageChange(page - 1)}
        aria-label="Previous page"
        className="flex size-8 items-center justify-center rounded-lg border-[1.5px] border-(--border) bg-(--surface) text-(--text-secondary) disabled:cursor-not-allowed disabled:opacity-40"
      >
        <ChevronLeft size={15} />
      </button>

      {pages.map((p, i) =>
        p === "ellipsis" ? (
          <span
            key={`ellipsis-${i}`}
            className="flex size-8 items-center justify-center text-[12.5px] text-(--text-muted)"
          >
            …
          </span>
        ) : (
          <button
            key={p}
            type="button"
            onClick={() => onPageChange(p)}
            aria-current={p === page ? "page" : undefined}
            className={cn(
              "flex size-8 items-center justify-center rounded-lg text-[12.5px] font-medium transition-colors",
              p === page
                ? "bg-(--primary) text-white"
                : "text-(--text-secondary) hover:bg-(--search-bg)"
            )}
          >
            {p}
          </button>
        )
      )}

      <button
        type="button"
        disabled={page >= totalPages}
        onClick={() => onPageChange(page + 1)}
        aria-label="Next page"
        className="flex size-8 items-center justify-center rounded-lg border-[1.5px] border-(--border) bg-(--surface) text-(--text-secondary) disabled:cursor-not-allowed disabled:opacity-40"
      >
        <ChevronRight size={15} />
      </button>
    </div>
  )
}

export interface SimplePaginationProps {
  from: number
  to: number
  total: number
  onPrevious: () => void
  onNext: () => void
  hasPrevious: boolean
  hasNext: boolean
  className?: string
}

function SimplePagination({
  from,
  to,
  total,
  onPrevious,
  onNext,
  hasPrevious,
  hasNext,
  className,
}: SimplePaginationProps) {
  return (
    <div className={cn("flex items-center justify-between", className)}>
      <span className="text-[12.5px] text-(--text-secondary)">
        Showing {from}–{to} of {total}
      </span>
      <div className="flex gap-1.5">
        <button
          type="button"
          disabled={!hasPrevious}
          onClick={onPrevious}
          className="rounded-lg border-[1.5px] border-(--border) bg-(--surface) px-3 py-1.5 text-[12.5px] font-medium text-(--text) disabled:cursor-not-allowed disabled:text-(--text-muted)"
        >
          Previous
        </button>
        <button
          type="button"
          disabled={!hasNext}
          onClick={onNext}
          className="rounded-lg border-[1.5px] border-(--border) bg-(--surface) px-3 py-1.5 text-[12.5px] font-medium text-(--text) disabled:cursor-not-allowed disabled:text-(--text-muted)"
        >
          Next
        </button>
      </div>
    </div>
  )
}

export { Pagination, SimplePagination }
