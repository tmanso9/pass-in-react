import { Search } from 'lucide-react'

export function AttendeeList() {
	return (
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
	)
}
