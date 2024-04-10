import {
	Search,
	MoreHorizontal,
	ChevronLeft,
	ChevronsLeft,
	ChevronRight,
	ChevronsRight
} from 'lucide-react'
import { IconButton } from './icon-button'
import { Table } from './table/table'
import { TableHeader } from './table/table-header'
import { TableCell } from './table/table-cell'
import { TableRow } from './table/table-row'
import { ChangeEvent, useEffect, useState } from 'react'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

interface Attendee {
	id: string
	name: string
	email: string
	createdAt: string
	checkedInAt: string | null
}

export function AttendeeList() {
	const [search, setSearchValue] = useState(() => {
		const url = new URL(window.location.toString())
		const search = url.searchParams.get('search')
		return search || ''
	})
	const [page, setPage] = useState(() => {
		const url = new URL(window.location.toString())
		const page = url.searchParams.get('page')
		return page ? parseInt(page) : 1
	})
	const [attendees, setAttendees] = useState<Attendee[]>([])
	const [total, setTotal] = useState(0)

	const lastPage = Math.ceil(total / 10)

	useEffect(() => {
		const url = new URL(
			'http://localhost:3000/events/1df0f5d8-066d-4c41-b016-f6ca9a241c6a/attendees'
		)

		url.searchParams.set('pageIndex', (page - 1).toString())
		if (search.length > 0) url.searchParams.set('query', search)
		fetch(url.toString())
			.then((response) => response.json())
			.then((data) => {
				setAttendees(data.attendees)
				setTotal(data.total)
			})
			.catch((error) => console.error(error))
	}, [page, search])

	const setCurrentSearch = (search: string) => {
		const url = new URL(window.location.toString())
		url.searchParams.set('search', search.toLowerCase())
		window.history.pushState({}, '', url.toString())
		setSearchValue(search.toLowerCase())
	}

	const setCurrentPage = (page: number) => {
		const url = new URL(window.location.toString())
		url.searchParams.set('page', String(page))
		window.history.pushState({}, '', url.toString())
		setPage(page)
	}

	function onSearchInputChanged(e: ChangeEvent<HTMLInputElement>) {
		setCurrentSearch(e.target.value)
		goToFirstPage()
	}

	function goToFirstPage() {
		setCurrentPage(1)
	}

	function goToPreviousPage() {
		setCurrentPage(page - 1)
	}

	function goToNextPage() {
		setCurrentPage(page + 1)
	}

	function goToLastPage() {
		setCurrentPage(lastPage)
	}

	return (
		<div className="flex flex-col gap-4">
			<div className="flex gap-3 items-center">
				<h1 className="font-bold text-2xl">Attendees</h1>
				<div className="px-3 py-1.5 text-sm border border-white/10 rounded-lg w-72 flex items-center gap-3">
					<Search className="size-4 text-emerald-300" />
					<input
						onChange={onSearchInputChanged}
						value={search}
						className="bg-transparent flex-1 p-0 border-0 text-sm focus:ring-0"
						placeholder="Search attendees..."
					/>
				</div>
			</div>
			<Table>
				<thead>
					<TableRow>
						<TableHeader style={{ width: 48 }}>
							<input
								className="bg-black/20 size-4 rounded border border-white/10 checked:bg-orange-400"
								type="checkbox"
							/>
						</TableHeader>
						<TableHeader>Id</TableHeader>
						<TableHeader>Attendee</TableHeader>
						<TableHeader>Registered at</TableHeader>
						<TableHeader>Checked in at</TableHeader>
						<TableHeader style={{ width: 64 }}></TableHeader>
					</TableRow>
				</thead>
				<tbody>
					{attendees.map((attendee: Attendee) => {
						return (
							<TableRow key={attendee.id}>
								<TableCell>
									<input
										className="bg-black/20 size-4 rounded border border-white/10 checked:bg-orange-400"
										type="checkbox"
									/>
								</TableCell>
								<TableCell>{attendee.id}</TableCell>
								<TableCell>
									<div className="flex flex-col gap-1">
										<span className="text-white font-semibold">
											{attendee.name}
										</span>
										<span>{attendee.email}</span>
									</div>
								</TableCell>
								<TableCell>{dayjs().to(attendee.createdAt)}</TableCell>
								<TableCell>
									{attendee.checkedInAt ? (
										dayjs().to(attendee.checkedInAt)
									) : (
										<span className="text-zinc-500 text-sm">
											Did not check in
										</span>
									)}
								</TableCell>
								<TableCell>
									<IconButton transparent>
										<MoreHorizontal className="size-4" />
									</IconButton>
								</TableCell>
							</TableRow>
						)
					})}
				</tbody>
				<tfoot>
					<TableRow>
						<TableCell colSpan={3}>
							Showing {attendees.length} of {total} items
						</TableCell>
						<TableCell className="text-right" colSpan={3}>
							<div className="inline-flex gap-8 items-center">
								<span>
									Page {page} of {lastPage}
								</span>
								<div className="flex gap-1.5">
									<IconButton onClick={goToFirstPage} disabled={page === 0}>
										<ChevronsLeft className="size-4" />
									</IconButton>
									<IconButton onClick={goToPreviousPage} disabled={page === 0}>
										<ChevronLeft className="size-4" />
									</IconButton>
									<IconButton onClick={goToNextPage} disabled={page === lastPage}>
										<ChevronRight className="size-4" />
									</IconButton>
									<IconButton onClick={goToLastPage} disabled={page === lastPage}>
										<ChevronsRight className="size-4" />
									</IconButton>
								</div>
							</div>
						</TableCell>
					</TableRow>
				</tfoot>
			</Table>
		</div>
	)
}
