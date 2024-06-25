import { useEffect, useState } from "react"

import { ITodo } from "@src/interfaces"
import { getSessionStorage, setSessionStorage } from "@src/utilities"

import { useTodoContext } from "../../context"
import { Todo } from "../to-do"
import { TodoFilters } from "../to-do-filters"

export const TodosList = () => {
	const { todosContextValue } = useTodoContext()
	const [filteredTodos, setFilteredTodos] = useState(todosContextValue)
	const [currentFilter, setCurrentFilter] = useState(
		getSessionStorage("filter", "all") as string
	)

	useEffect(() => {
		filterTodos(currentFilter, todosContextValue)
	}, [todosContextValue, currentFilter])

	const handleCurrentFilter = (filter: string) => {
		setCurrentFilter(filter)
		setSessionStorage("filter", filter)
	}

	const filterTodos = (filter: string, todos: ITodo[]) => {
		let completed: boolean[] = []
		if (filter === "all") completed = [true, false]
		if (filter === "active") completed = [false]
		if (filter === "completed") completed = [true]

		const newFilteredTodos = todos.filter((todo) =>
			completed.includes(todo.complete)
		)
		setFilteredTodos(newFilteredTodos)
	}

	return (
		<div>
			<TodoFilters
				currentFilter={currentFilter}
				onCurrentFilter={handleCurrentFilter}
			/>
			{filteredTodos.length === 0 && (
				<p className="flex justify-center mt-9 text-gray-400">
					No tasks founded
				</p>
			)}
			<ul className="max-h-96 overflow-y-auto text-gray-500 list-inside dark:text-gray-400">
				{filteredTodos.map((todo) => (
					<Todo
						key={todo.id}
						todo={todo}
					/>
				))}
			</ul>
		</div>
	)
}
