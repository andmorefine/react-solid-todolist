export interface Todo {
  id: string
  title: string
  completed: boolean
}

export interface TodoExt extends Todo {
  dueDate: string
}

export interface CustomListItemProvider<T> {
  (
    todo: T,
    deleteTodoHandler: DeleteTodoHandler,
    toggleTodoCompletedHandler: ToggleTodoCompletedHandler
  ): ReactNode
}

export interface TodoListItemsProps {
  todos: Todo[]
  deleteTodoHandler: DeleteTodoHandler
  toggleTodoCompletedHandler: toggleTodoCompletedHandler
  customListItemProvider: CustomListItemProvider
}

export interface TodoListWidgetProps {
  title: string
  fetchCallback: FetchCallback
  todoFactory: TodoFactory
  customListItemProvider: CustomListItemProvider
}

export type DeleteTodoHandler = (id: string) => void

export type toggleTodoCompletedHandler = (id: string) => void

export type FetchCallback = (signal: AbortSignal) => Todo[]

export type TodoFactory = (title: string) => Todo

export type AddTodoHandler = (newTodo: Todo) => void
