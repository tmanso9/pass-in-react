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

export function AttendeeList() {
	return (
		<div className="flex flex-col gap-4">
			<div className="flex gap-3 items-center">
				<h1 className="font-bold text-2xl">Attendees</h1>
				<div className="px-3 py-1.5 text-sm border border-white/10 rounded-lg w-72 flex items-center gap-3">
					<Search className="size-4 text-emerald-300" />
					<input
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
					{Array.from({ length: 6 }).map((_, i) => {
						return (
							<TableRow key={i}>
								<TableCell>
									<input
										className="bg-black/20 size-4 rounded border border-white/10 checked:bg-orange-400"
										type="checkbox"
									/>
								</TableCell>
								<TableCell>7687</TableCell>
								<TableCell>
									<div className="flex flex-col gap-1">
										<span className="text-white font-semibold">
											Teresa Manso
										</span>
										<span>tmanso92@gmail.com</span>
									</div>
								</TableCell>
								<TableCell>7 days ago</TableCell>
								<TableCell>7 days ago</TableCell>
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
						<TableCell colSpan={3}>Showing 10 of 228 items</TableCell>
						<TableCell className="text-right" colSpan={3}>
							<div className="inline-flex gap-8 items-center">
								<span>Page 1 of 11</span>
								<div className="flex gap-1.5">
									<IconButton>
										<ChevronsLeft className="size-4" />
									</IconButton>
									<IconButton>
										<ChevronLeft className="size-4" />
									</IconButton>
									<IconButton>
										<ChevronRight className="size-4" />
									</IconButton>
									<IconButton>
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
