// src/components/shared/FileUpload.tsx
import * as React from "react"
import { Upload } from "lucide-react"

import { cn } from "@/lib/utils"

export interface FileUploadProps {
  onFilesSelected: (files: FileList) => void
  accept?: string
  label?: string
  className?: string
  disabled?: boolean
}

function FileUpload({
  onFilesSelected,
  accept = ".csv",
  label = "Drop a CSV or click to browse",
  className,
  disabled,
}: FileUploadProps) {
  const inputRef = React.useRef<HTMLInputElement>(null)
  const [isDragging, setIsDragging] = React.useState(false)

  function handleDrop(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault()
    setIsDragging(false)
    if (disabled) return
    if (e.dataTransfer.files?.length) {
      onFilesSelected(e.dataTransfer.files)
    }
  }

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => !disabled && inputRef.current?.click()}
      onKeyDown={(e) => e.key === "Enter" && inputRef.current?.click()}
      onDragOver={(e) => {
        e.preventDefault()
        if (!disabled) setIsDragging(true)
      }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={handleDrop}
      data-slot="file-upload"
      className={cn(
        "flex cursor-pointer items-center gap-2 rounded-[9px] border-[1.5px] border-dashed px-3.5 py-2.5 transition-colors",
        "bg-[var(--search-bg)] border-[var(--border)]",
        isDragging && "border-[var(--primary)] bg-[var(--primary-bg)]",
        disabled && "cursor-not-allowed opacity-60",
        className
      )}
    >
      <Upload size={16} className="text-[var(--text-secondary)]" />
      <span className="text-[13px] text-[var(--text-secondary)]">{label}</span>
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        disabled={disabled}
        className="hidden"
        onChange={(e) => e.target.files && onFilesSelected(e.target.files)}
      />
    </div>
  )
}

export { FileUpload }
