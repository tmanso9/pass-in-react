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
import { ChangeEvent, useState } from 'react'
import { attendees } from '../mock-data/attendees'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

export function AttendeeList() {
	const [searchValue, setSearchValue] = useState('')
	const [page, setPage] = useState(1)

	const filteredAttendees = attendees.filter((attendee) => {
		return (
			attendee.name.toLowerCase().includes(searchValue.toLowerCase()) ||
			attendee.email.toLowerCase().includes(searchValue.toLowerCase())
		)
	})

	const lastPage = Math.ceil(filteredAttendees.length / 10)
	const pageQuantity = filteredAttendees.slice((page - 1) * 10, page * 10).reduce((acc) => {
		acc++
		return acc
	}, 0)

	function onSearchInputChanged(e: ChangeEvent<HTMLInputElement>) {
		setSearchValue(e.target.value)
		setPage(1)
	}

	function goToFirstPage() {
		setPage(1)
	}

	function goToPreviousPage() {
		if (page > 1) setPage(page - 1)
	}

	function goToNextPage() {
		if (page < lastPage) setPage(page + 1)
	}

	function goToLastPage() {
		setPage(lastPage)
	}

	return (
		<div className="flex flex-col gap-4">
			<div className="flex gap-3 items-center">
				<h1 className="font-bold text-2xl">Attendees</h1>
				<div className="px-3 py-1.5 text-sm border border-white/10 rounded-lg w-72 flex items-center gap-3">
					<Search className="size-4 text-emerald-300" />
					<input
						onChange={onSearchInputChanged}
						className="bg-transparent flex-1 p-0 border-0 text-sm ring-0"
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
					{filteredAttendees.slice((page - 1) * 10, page * 10).map((attendee) => {
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
								<TableCell>{dayjs().to(attendee.checkedInAt)}</TableCell>
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
							Showing {pageQuantity} of {filteredAttendees.length} items
						</TableCell>
						<TableCell className="text-right" colSpan={3}>
							<div className="inline-flex gap-8 items-center">
								<span>
									Page {page} of {lastPage}
								</span>
								<div className="flex gap-1.5">
									<IconButton onClick={goToFirstPage} disabled={page === 1}>
										<ChevronsLeft className="size-4" />
									</IconButton>
									<IconButton onClick={goToPreviousPage} disabled={page === 1}>
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
