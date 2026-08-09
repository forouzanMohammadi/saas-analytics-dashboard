import { useState } from "react"
import { Search, Plus } from "lucide-react"

import { Tabs } from "@/components/shared/navigation/Tabs"
import { Pagination, SimplePagination } from "@/components/shared/data-display/Pagination"
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/shared/data-display/Table"
import { Badge } from "@/components/shared/feedback/Badge"
import { SearchInput } from "@/components/shared/forms/SearchInput"
import { Button } from "@/components/shared/buttons/Button"

const users = [
    { name: "Sarah Nolan", email: "sarah@nexus.io", plan: "Scale", role: "Admin", status: "Active" },
    { name: "David Okafor", email: "david@acme.com", plan: "Starter", role: "Member", status: "Active" },
    { name: "Mina Park", email: "mina@globaltech.com", plan: "Growth", role: "Member", status: "Invited" },
]

export function UsersPage() {
    const [filter, setFilter] = useState("all")
    const [page, setPage] = useState(1)

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-xl font-semibold">Users</h1>
                    <p className="text-sm text-(--text-secondary)">2,480 users across all plans.</p>
                </div>
                <Button variant="primary"><Plus />Invite user</Button>
            </div>

            <div className="flex items-center gap-2">
                <SearchInput className="max-w-55" />
                <Tabs
                    items={[
                        { value: "all", label: "All plans" },
                        { value: "active", label: "Active" },
                        { value: "invited", label: "Invited" },
                    ]}
                    value={filter}
                    onChange={setFilter}
                />
            </div>

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Plan</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead>Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {users.map((u) => (
                        <TableRow key={u.email}>
                            <TableCell className="font-medium">{u.name}</TableCell>
                            <TableCell className="text-(--text-secondary)">{u.email}</TableCell>
                            <TableCell>{u.plan}</TableCell>
                            <TableCell>{u.role}</TableCell>
                            <TableCell>
                                <Badge variant={u.status === "Active" ? "success" : "warning"}>{u.status}</Badge>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            <Pagination page={page} totalPages={12} onPageChange={setPage} />

            <SimplePagination
                from={1}
                to={10}
                total={248}
                hasPrevious={page > 1}
                hasNext={page < 12}
                onPrevious={() => setPage((p) => p - 1)}
                onNext={() => setPage((p) => p + 1)}
            />
        </div>
    )
}