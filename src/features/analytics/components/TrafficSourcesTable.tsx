import { useEffect, useMemo, useState } from "react"

import { Badge } from "@/components/shared/feedback/Badge"
import { SearchInput } from "@/components/shared/forms/SearchInput"
import { Pagination } from "@/components/shared/data-display/Pagination"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/shared/data-display/Table"

import { trafficSources } from "@/features/analytics/data/analyticsData"

const PAGE_SIZE = 5

export function TrafficSourcesTable({
  channel,
}: {
  channel: string
}) {
  const [query, setQuery] = useState("")
  const [page, setPage] = useState(1)

  const filteredSources = useMemo(() => {
    const normalizedQuery = query
      .trim()
      .toLowerCase()

    return trafficSources.filter((source) => {
      const matchesChannel =
        channel === "all" ||
        source.channel.toLowerCase() ===
          channel.toLowerCase()

      const matchesSearch =
        !normalizedQuery ||
        source.source
          .toLowerCase()
          .includes(normalizedQuery) ||
        source.channel
          .toLowerCase()
          .includes(normalizedQuery)

      return matchesChannel && matchesSearch
    })
  }, [channel, query])

  useEffect(() => {
    setPage(1)
  }, [query, channel])

  const totalPages = Math.max(
    1,
    Math.ceil(filteredSources.length / PAGE_SIZE)
  )

  const pageItems = filteredSources.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE
  )

  return (
    <section className="rounded-2xl border border-(--border) bg-(--surface) shadow-[0_1px_12px_rgba(30,27,46,0.03)]">
      <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-[15px] font-semibold text-(--text)">
            Traffic sources
          </h2>

          <p className="mt-0.5 text-xs text-(--text-secondary)">
            Detailed acquisition performance.
          </p>
        </div>

        <SearchInput
          value={query}
          onChange={(event) =>
            setQuery(event.target.value)
          }
          placeholder="Search sources..."
          className="sm:w-56"
        />
      </div>

      <div className="px-5">
        <Table className="min-w-190">
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead>Source</TableHead>
              <TableHead>Sessions</TableHead>
              <TableHead>Users</TableHead>
              <TableHead>Conversion</TableHead>
              <TableHead>Revenue</TableHead>
              <TableHead>Change</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {pageItems.length > 0 ? (
              pageItems.map((source) => (
                <TableRow key={source.id}>
                  <TableCell>
                    <div>
                      <p className="font-medium text-(--text)">
                        {source.source}
                      </p>

                      <p className="mt-0.5 text-[10px] text-(--text-muted)">
                        {source.channel}
                      </p>
                    </div>
                  </TableCell>

                  <TableCell>
                    {source.sessions.toLocaleString(
                      "en-US"
                    )}
                  </TableCell>

                  <TableCell>
                    {source.users.toLocaleString(
                      "en-US"
                    )}
                  </TableCell>

                  <TableCell>
                    {source.conversion.toFixed(1)}%
                  </TableCell>

                  <TableCell>
                    $
                    {source.revenue.toLocaleString(
                      "en-US"
                    )}
                  </TableCell>

                  <TableCell>
                    <Badge
                      variant={
                        source.change >= 0
                          ? "success"
                          : "danger"
                      }
                      className="px-2 py-0.5 text-[10px]"
                    >
                      {source.change >= 0 ? "↗" : "↘"}{" "}
                      {Math.abs(source.change)}%
                    </Badge>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={6}
                  className="py-12 text-center text-(--text-secondary)"
                >
                  No traffic sources found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[11px] text-(--text-muted)">
          Showing{" "}
          {filteredSources.length === 0
            ? 0
            : (page - 1) * PAGE_SIZE + 1}
          –
          {Math.min(
            page * PAGE_SIZE,
            filteredSources.length
          )}{" "}
          of {filteredSources.length} results
        </p>

        <Pagination
          page={page}
          totalPages={totalPages}
          onPageChange={setPage}
        />
      </div>
    </section>
  )
}