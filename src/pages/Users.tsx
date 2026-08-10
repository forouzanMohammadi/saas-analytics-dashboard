import {
    useEffect,
    useMemo,
    useState,
} from "react"

import {
    Upload,
    UserPlus,
} from "lucide-react"

import { Button } from "@/components/shared/buttons/Button"
import { MetricCard } from "@/components/shared/cards/MetricCard"
import { Pagination } from "@/components/shared/data-display/Pagination"
import { SearchInput } from "@/components/shared/forms/SearchInput"
import { Select } from "@/components/shared/forms/Select"
import { Tabs } from "@/components/shared/navigation/Tabs"

import { UsersBulkActions } from "@/features/users/components/UsersBulkActions"
import { UsersTable } from "@/features/users/components/UsersTable"
import { InviteUserDialog } from "@/features/users/components/InviteUserDialog"
import { ImportUsersDialog } from "@/features/users/components/ImportUsersDialog"

import { useToastStore } from "@/store/toastStore"

import {
    userMetrics,
    users as initialUsers,
    type User,
    type UserPlan,
    type UserRole,
    type UserStatus,
} from "@/features/users/data/usersData"

type UserTab =
    | "all"
    | "active"
    | "trial"
    | "churned"
    | "suspended"

type SortValue =
    | "last-seen"
    | "joined"
    | "spend"
    | "name"

const PAGE_SIZE = 10

const userTabs = [
    {
        value: "all",
        label: "All users",
    },
    {
        value: "active",
        label: "Active",
    },
    {
        value: "trial",
        label: "Trial",
    },
    {
        value: "churned",
        label: "Churned",
    },
    {
        value: "suspended",
        label: "Suspended",
    },
]

const tabStatus: Partial<
    Record<UserTab, UserStatus>
> = {
    active: "Active",
    trial: "Trial",
    churned: "Churned",
    suspended: "Suspended",
}

export default function Users() {
    const [users, setUsers] = useState<User[]>(initialUsers)
    const [inviteOpen, setInviteOpen] = useState(false)
    const [importOpen, setImportOpen] = useState(false)
    const [tab, setTab] = useState<UserTab>("all")

    const [query, setQuery] = useState("")
    const [role, setRole] = useState("all")
    const [plan, setPlan] = useState("all")

    const [sort, setSort] =
        useState<SortValue>("last-seen")

    const [page, setPage] = useState(1)

    const [selectedIds, setSelectedIds] =
        useState<Set<number>>(new Set())

    const addToast = useToastStore(
        (state) => state.addToast
    )

    const filteredUsers = useMemo(() => {
        const normalizedQuery =
            query.trim().toLowerCase()

        const requiredStatus =
            tabStatus[tab]

        const result = users.filter((user) => {
            const matchesQuery =
                !normalizedQuery ||
                user.name
                    .toLowerCase()
                    .includes(normalizedQuery) ||
                user.email
                    .toLowerCase()
                    .includes(normalizedQuery)

            const matchesRole =
                role === "all" ||
                user.role === role

            const matchesPlan =
                plan === "all" ||
                user.plan === plan

            const matchesStatus =
                !requiredStatus ||
                user.status === requiredStatus

            return (
                matchesQuery &&
                matchesRole &&
                matchesPlan &&
                matchesStatus
            )
        })

        return [...result].sort((a, b) => {
            switch (sort) {
                case "joined":
                    return b.joinedAt - a.joinedAt

                case "spend":
                    return b.mrr - a.mrr

                case "name":
                    return a.name.localeCompare(b.name)

                case "last-seen":
                default:
                    return (
                        a.lastSeenMinutes -
                        b.lastSeenMinutes
                    )
            }
        })
    }, [
        users,
        query,
        role,
        plan,
        tab,
        sort,
    ])

    useEffect(() => {
        setPage(1)
    }, [
        query,
        role,
        plan,
        tab,
        sort,
    ])

    const totalPages = Math.max(
        1,
        Math.ceil(
            filteredUsers.length / PAGE_SIZE
        )
    )

    const visibleUsers =
        filteredUsers.slice(
            (page - 1) * PAGE_SIZE,
            page * PAGE_SIZE
        )

    function toggleUser(id: number) {
        setSelectedIds((current) => {
            const next = new Set(current)

            if (next.has(id)) {
                next.delete(id)
            } else {
                next.add(id)
            }

            return next
        })
    }

    function toggleAllOnPage(
        checked: boolean
    ) {
        setSelectedIds((current) => {
            const next = new Set(current)

            visibleUsers.forEach((user) => {
                if (checked) {
                    next.add(user.id)
                } else {
                    next.delete(user.id)
                }
            })

            return next
        })
    }

    function updateSelectedUsers(
        updater: (user: User) => User
    ) {
        setUsers((current) =>
            current.map((user) =>
                selectedIds.has(user.id)
                    ? updater(user)
                    : user
            )
        )

        setSelectedIds(new Set())
    }

    function changeRole(
        nextRole: UserRole
    ) {
        updateSelectedUsers((user) => ({
            ...user,
            role: nextRole,
        }))
    }

    function changePlan(
        nextPlan: UserPlan
    ) {
        updateSelectedUsers((user) => ({
            ...user,
            plan: nextPlan,
        }))
    }

    function suspendSelected() {
        updateSelectedUsers((user) => ({
            ...user,
            status: "Suspended",
        }))
    }

    function deleteSelected() {
        setUsers((current) =>
            current.filter(
                (user) =>
                    !selectedIds.has(user.id)
            )
        )

        setSelectedIds(new Set())
    }

    function handleInviteUser(
        newUser: User
    ) {
        setUsers((current) => [
            newUser,
            ...current,
        ])

        setTab("all")
        setPage(1)

        addToast({
            variant: "success",
            title: "Invitation sent",
            description: `${newUser.email} has been invited successfully.`,
        })
    }

    function handleImportUsers(
        importedUsers: User[],
        invalidCount: number
    ) {
        setUsers((current) => [
            ...importedUsers,
            ...current,
        ])

        setTab("all")
        setPage(1)

        addToast({
            variant: "success",
            title: "Users imported",
            description:
                invalidCount > 0
                    ? `${importedUsers.length} users were imported successfully. ${invalidCount} invalid rows were skipped.`
                    : `${importedUsers.length} users were imported successfully.`,
        })
    }

    return (
        <div className="mx-auto w-full max-w-[1600px] space-y-5">
            {/* Header */}
            <section className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div>
                    <h1 className="text-2xl font-semibold tracking-tight text-(--text)">
                        Users
                    </h1>

                    <p className="mt-1 text-sm text-(--text-secondary)">
                        Manage your users, roles,
                        access, and account status.
                    </p>
                </div>

                <div className="flex flex-wrap gap-2">
                    <Button
                        variant="secondary"
                        onClick={() =>
                            setImportOpen(true)
                        }
                    >
                        <Upload className="size-4" />
                        Import CSV
                    </Button>

                    <Button
                        onClick={() =>
                            setInviteOpen(true)
                        }
                    >
                        <UserPlus className="size-4" />
                        Invite user
                    </Button>
                </div>
            </section>

            {/* Metrics */}
            <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {userMetrics.map((metric) => (
                    <MetricCard
                        key={metric.title}
                        title={metric.title}
                        value={metric.value}
                        trend={{
                            value: metric.trend,
                            isPositive:
                                metric.positive,
                        }}
                        sparklineData={
                            metric.sparkline
                        }
                        variant="sparkline"
                        className="min-h-34"
                    />
                ))}
            </section>

            {/* Users management */}
            <section className="overflow-hidden rounded-2xl border border-(--border) bg-(--surface) shadow-[0_1px_12px_rgba(30,27,46,0.03)]">
                {/* Tabs */}
                <div className="border-b border-(--border) px-4 pt-4">
                    <Tabs
                        items={userTabs}
                        value={tab}
                        onChange={(value) =>
                            setTab(value as UserTab)
                        }
                    />
                </div>

                {/* Toolbar */}
                <div className="flex flex-col gap-3 border-b border-(--border) p-4 xl:flex-row xl:items-center xl:justify-between">
                    <SearchInput
                        value={query}
                        onChange={(event) =>
                            setQuery(event.target.value)
                        }
                        placeholder="Search users by name or email..."
                        className="w-full xl:w-80"
                    />

                    <div className="flex flex-wrap gap-2">
                        <Select
                            value={role}
                            onChange={(event) =>
                                setRole(
                                    event.target.value
                                )
                            }
                            className="min-w-32"
                            aria-label="Filter users by role"
                        >
                            <option value="all">
                                All roles
                            </option>
                            <option value="Admin">
                                Admin
                            </option>
                            <option value="Member">
                                Member
                            </option>
                            <option value="Viewer">
                                Viewer
                            </option>
                        </Select>

                        <Select
                            value={plan}
                            onChange={(event) =>
                                setPlan(
                                    event.target.value
                                )
                            }
                            className="min-w-32"
                            aria-label="Filter users by plan"
                        >
                            <option value="all">
                                All plans
                            </option>
                            <option value="Starter">
                                Starter
                            </option>
                            <option value="Growth">
                                Growth
                            </option>
                            <option value="Scale">
                                Scale
                            </option>
                            <option value="Enterprise">
                                Enterprise
                            </option>
                        </Select>

                        <Select
                            value={sort}
                            onChange={(event) =>
                                setSort(
                                    event.target
                                        .value as SortValue
                                )
                            }
                            className="min-w-39"
                            aria-label="Sort users"
                        >
                            <option value="last-seen">
                                Last seen
                            </option>
                            <option value="joined">
                                Newest joined
                            </option>
                            <option value="spend">
                                Highest MRR
                            </option>
                            <option value="name">
                                Name A–Z
                            </option>
                        </Select>
                    </div>
                </div>

                {/* Table */}
                <div className="p-4">
                    <UsersTable
                        users={visibleUsers}
                        selectedIds={selectedIds}
                        onToggleUser={toggleUser}
                        onToggleAll={
                            toggleAllOnPage
                        }
                    />
                </div>

                {/* Bulk actions */}
                <UsersBulkActions
                    selectedCount={
                        selectedIds.size
                    }
                    onChangeRole={changeRole}
                    onChangePlan={changePlan}
                    onSuspend={
                        suspendSelected
                    }
                    onDelete={deleteSelected}
                    onClear={() =>
                        setSelectedIds(
                            new Set()
                        )
                    }
                />

                {/* Pagination */}
                <div className="flex flex-col gap-3 border-t border-(--border) px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-[11px] text-(--text-muted)">
                        Showing{" "}
                        {filteredUsers.length
                            ? (page - 1) *
                            PAGE_SIZE +
                            1
                            : 0}
                        –
                        {Math.min(
                            page * PAGE_SIZE,
                            filteredUsers.length
                        )}{" "}
                        of {filteredUsers.length}{" "}
                        users
                    </p>

                    <Pagination
                        page={page}
                        totalPages={
                            totalPages
                        }
                        onPageChange={setPage}
                    />
                </div>
            </section>

            {/* Invite user dialog */}
            <InviteUserDialog
                open={inviteOpen}
                onOpenChange={setInviteOpen}
                onInvite={handleInviteUser}
            />

            <ImportUsersDialog
                open={importOpen}
                onOpenChange={setImportOpen}
                existingEmails={users.map(
                    (user) => user.email
                )}
                onImport={handleImportUsers}
            />
        </div>
    )
}