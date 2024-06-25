import { ChangeEvent, useState } from "react"

export const TodoFilters = ({
	currentFilter,
	onCurrentFilter
}: {
	currentFilter: string
	onCurrentFilter: (filter: string) => void
}) => {
	const [selectedValue, setSelectedValue] = useState<string>(currentFilter)

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setSelectedValue(event.target.value)
		onCurrentFilter(event.target.value)
	}

	return (
		<ul className="mb-2 items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
			<li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
				<div className="flex items-center ps-3">
					<input
						id="horizontal-list-radio-all"
						type="radio"
						value="all"
						name="list-radio"
						checked={selectedValue === "all"}
						onChange={handleChange}
						className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
					/>
					<label
						htmlFor="horizontal-list-radio-all"
						className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
						All
					</label>
				</div>
			</li>
			<li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
				<div className="flex items-center ps-3">
					<input
						id="horizontal-list-radio-active"
						type="radio"
						value="active"
						name="list-radio"
						checked={selectedValue === "active"}
						onChange={handleChange}
						className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
					/>
					<label
						htmlFor="horizontal-list-radio-active"
						className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
						Active
					</label>
				</div>
			</li>
			<li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
				<div className="flex items-center ps-3">
					<input
						id="horizontal-list-radio-completed"
						type="radio"
						value="completed"
						name="list-radio"
						checked={selectedValue === "completed"}
						onChange={handleChange}
						className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
					/>
					<label
						htmlFor="horizontal-list-radio-completed"
						className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
						Completed
					</label>
				</div>
			</li>
		</ul>
	)
}
