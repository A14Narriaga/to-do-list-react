import { createContext, ReactNode, useContext, useState } from "react"

import todosData from "@src/data/todos.json"
import { ITodo } from "@src/interfaces"
import { getSessionStorage } from "@src/utilities"

interface TodosContextType {
	todosContextValue: ITodo[]
	setTodosContextValue: React.Dispatch<React.SetStateAction<ITodo[]>>
}

export const TodoContext = createContext<TodosContextType>({
	todosContextValue: [],
	setTodosContextValue: () => {}
})

export const TodoProvider = ({ children }: { children: ReactNode }) => {
	const key = "todos"
	const [todosContextValue, setTodosContextValue] = useState(
		getSessionStorage(key, todosData) as ITodo[]
	)
	return (
		<TodoContext.Provider
			value={{
				todosContextValue,
				setTodosContextValue
			}}>
			{children}
		</TodoContext.Provider>
	)
}

export const useTodoContext = () => {
	const context = useContext(TodoContext)
	if (context == undefined) {
		throw new Error("useTodoContext must be used within a TodoProvider")
	}
	return context
}
