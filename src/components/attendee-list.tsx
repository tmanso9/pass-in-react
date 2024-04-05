import {
	Search,
	MoreHorizontal,
	ChevronLeft,
	ChevronsLeft,
	ChevronRight,
	ChevronsRight
} from 'lucide-react'
import { IconButton } from './icon-button'

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
			<div className="border border-white/10 rounded-lg">
				<table className="w-full">
					<thead>
						<tr className="border-b border-white/10">
							<th
								style={{ width: 48 }}
								className="py-3 px-4 text-sm font-semibold text-left"
							>
								<input
									className="bg-black/20 size-4 rounded border border-white/10 checked:bg-orange-400"
									type="checkbox"
								/>
							</th>
							<th className="py-3 px-4 text-sm font-semibold text-left">Id</th>
							<th className="py-3 px-4 text-sm font-semibold text-left">Attendee</th>
							<th className="py-3 px-4 text-sm font-semibold text-left">
								Registered at
							</th>
							<th className="py-3 px-4 text-sm font-semibold text-left">
								Checked in at
							</th>
							<th
								style={{ width: 64 }}
								className="py-3 px-4 text-sm font-semibold text-left"
							></th>
						</tr>
					</thead>
					<tbody>
						{Array.from({ length: 6 }).map((_, i) => {
							return (
								<tr key={i} className="border-b border-white/10 hover:bg-white/5">
									<td className="py-3 px-4 text-sm text-zinc-300">
										<input
											className="bg-black/20 size-4 rounded border border-white/10 checked:bg-orange-400"
											type="checkbox"
										/>
									</td>
									<td className="py-3 px-4 text-sm text-zinc-300">7687</td>
									<td className="py-3 px-4 text-sm text-zinc-300">
										<div className="flex flex-col gap-1">
											<span className="text-white font-semibold">
												Teresa Manso
											</span>
											<span>tmanso92@gmail.com</span>
										</div>
									</td>
									<td className="py-3 px-4 text-sm text-zinc-300">7 days ago</td>
									<td className="py-3 px-4 text-sm text-zinc-300">7 days ago</td>
									<td className="py-3 px-4 text-sm text-zinc-300">
										<IconButton transparent>
											<MoreHorizontal className="size-4" />
										</IconButton>
									</td>
								</tr>
							)
						})}
					</tbody>
					<tfoot>
						<tr>
							<td className="py-3 px-4 text-sm text-zinc-300" colSpan={3}>
								Showing 10 of 228 items
							</td>
							<td className="py-3 px-4 text-sm text-zinc-300 text-right" colSpan={3}>
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
							</td>
						</tr>
					</tfoot>
				</table>
			</div>
		</div>
	)
}
