export interface Todo {
  id: string
  title: string
  completed: boolean
}

export interface TodoExt extends Todo {
  dueDate: string
}
export interface TodoApi extends Omit<Todo, 'title'> {
  todo: string
}

export interface TodoListAddFormProps<T = Todo> {
  addTodoHandler: AddTodoHandler
  todoFactory: TodoFactory<T>
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

export interface TodoListWidgetProps<T = Todo> {
  title: string
  fetchCallback: FetchCallback
  todoFactory: TodoFactory<T>
  customListItemProvider: CustomListItemProvider
}

export type DeleteTodoHandler = (id: string) => void

export type toggleTodoCompletedHandler = (id: string) => void

export type FetchCallback = (signal: AbortSignal) => Todo[]

export type TodoFactory<T> = (title: string) => T

export type AddTodoHandler = (newTodo: Todo) => void
