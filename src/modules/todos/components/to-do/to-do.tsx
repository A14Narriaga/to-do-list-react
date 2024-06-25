import "./to-do.scss"

import { ChangeEvent } from "react"

import { ITodo } from "@src/interfaces"
import { setSessionStorage } from "@src/utilities"

import { useTodoContext } from "../../context"

export const Todo = ({ todo }: { todo: ITodo }) => {
	const key = "todos"
	const { todosContextValue, setTodosContextValue } = useTodoContext()

	const remove = (id: string) => {
		const newTodos = todosContextValue.filter((todo) => todo.id !== id)
		setTodosContextValue(newTodos)
		setSessionStorage(key, newTodos)
	}

	const handleComplete = (id: string, complete: boolean) => {
		const newTodos = todosContextValue.map((todo) => {
			if (todo.id === id) todo.complete = complete
			return todo
		})
		setTodosContextValue(newTodos)
		setSessionStorage(key, newTodos)
	}

	return (
		<div className="flex items-center ps-2 pe-2 border border-gray-200 rounded dark:border-gray-700">
			<input
				checked={todo.complete}
				type="checkbox"
				id={todo.id}
				onChange={(event: ChangeEvent<HTMLInputElement>) =>
					handleComplete(todo.id, event.target.checked)
				}
				className="custom-checkbox"
			/>
			<label
				htmlFor={todo.id}
				className={`w-full py-4 cursor-pointer ms-2 text-sm font-medium text-ellipsis ${todo.complete ? "line-through text-gray-400" : "text-gray-900 dark:text-gray-300"}`}>
				{todo.title}
			</label>
			<button
				type="button"
				className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
				onClick={() => remove(todo.id)}>
				<svg
					className="w-3 h-3"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 14 14">
					<path
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
					/>
				</svg>
				<span className="sr-only">Close modal</span>
			</button>
		</div>
	)
}
