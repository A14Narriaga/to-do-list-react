export interface ITodo {
	id: string
	title: string
	complete: boolean
}

export type IUpdateTodo = Partial<ITodo>
