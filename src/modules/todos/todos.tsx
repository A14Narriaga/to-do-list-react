import { TodoForm, TodosList } from "./components"
import { TodoProvider } from "./context"

export const Todos = () => {
	return (
		<TodoProvider>
			<div className="max-w-md mx-auto p-4">
				<h2 className="mt-5 mb-5 text-3xl font-semibold text-gray-900 dark:text-white">
					To Do List
				</h2>
				<TodoForm />
				<TodosList />
			</div>
		</TodoProvider>
	)
}
