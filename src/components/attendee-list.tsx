import { Search } from 'lucide-react'

export function AttendeeList() {
	return (
		<div className="flex flex-col gap-4">
			<div className="flex gap-3 items-center">
				<h1 className="font-bold text-2xl">Attendees</h1>
				<div className="px-3 py-1.5 text-sm border border-white/10 rounded-lg w-72 flex items-center gap-3">
					<Search className="size-4 text-emerald-300" />
					<input
						className="bg-transparent flex-1 outline-none"
						placeholder="Search attendees..."
					/>
				</div>
			</div>
			<div className="border border-white/10 rounded-lg">
				<table className="w-full">
					<thead>
						<tr className="border-b border-white/10">
							<th className="py-3 px-4 text-sm font-semibold text-left">
								<input type="checkbox" name="" id="" />
							</th>
							<th className="py-3 px-4 text-sm font-semibold text-left">Id</th>
							<th className="py-3 px-4 text-sm font-semibold text-left">Attendee</th>
							<th className="py-3 px-4 text-sm font-semibold text-left">
								Registered at
							</th>
							<th className="py-3 px-4 text-sm font-semibold text-left">
								Checked-in at
							</th>
							<th className="py-3 px-4 text-sm font-semibold text-left"></th>
						</tr>
					</thead>
					<tbody>
						<tr className="border-b border-white/10">
							<td className="py-3 px-4 text-sm text-zinc-300">
								<input type="checkbox" name="" id="" />
							</td>
							<td className="py-3 px-4 text-sm text-zinc-300">7687</td>
							<td className="py-3 px-4 text-sm text-zinc-300">
								<div className="flex flex-col gap-1">
									<span className="text-white font-semibold">Teresa Manso</span>
									<span>tmanso92@gmail.com</span>
								</div>
							</td>
							<td className="py-3 px-4 text-sm text-zinc-300">7 days ago</td>
							<td className="py-3 px-4 text-sm text-zinc-300">7 days ago</td>
							<td className="py-3 px-4 text-sm text-zinc-300">
								<button>...</button>
							</td>
						</tr>
					</tbody>
					<tfoot>
						<td className="py-3 px-4 text-sm text-zinc-300" colSpan={3}>
							Showing 10 of 228 items
						</td>
						<td className="py-3 px-4 text-sm text-zinc-300 text-right" colSpan={3}>
							Page 1 of 11
						</td>
					</tfoot>
				</table>
			</div>
		</div>
	)
}
