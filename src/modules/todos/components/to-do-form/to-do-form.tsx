import { useState } from "react"
import { v4 as uuidv4 } from "uuid"

import { setSessionStorage } from "@src/utilities"

import { useTodoContext } from "../../context"

export const TodoForm = () => {
	const key = "todos"
	const { todosContextValue, setTodosContextValue } = useTodoContext()
	const [inputValue, setInputValue] = useState("")

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value)
	}

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		const value = inputValue.trim()
		if (value !== "") {
			create(value)
			setInputValue("")
		}
	}

	const create = (title: string) => {
		const newTodo = {
			id: uuidv4(),
			title,
			complete: false
		}
		const newTodos = [...todosContextValue, newTodo]
		setTodosContextValue(newTodos)
		setSessionStorage(key, newTodos)
	}

	return (
		<form
			onSubmit={handleSubmit}
			className="mb-4">
			<label
				htmlFor="default-search"
				className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
				Search
			</label>
			<div className="relative">
				<input
					type="text"
					className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					placeholder="What do you want to do?"
					required
					value={inputValue}
					onChange={handleChange}
				/>
				<button
					type="submit"
					className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
					Add
				</button>
			</div>
		</form>
	)
}
