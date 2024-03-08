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

export interface TodoListAddFormProps<T> {
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
  todos: (Todo | TodoApi)[]
  deleteTodoHandler: DeleteTodoHandler
  toggleTodoCompletedHandler: toggleTodoCompletedHandler
  customListItemProvider: CustomListItemProvider
}

export interface TodoListWidgetProps<T, U> {
  title: string
  fetchCallback: FetchCallback<U>
  todoFactory: TodoFactory<T>
  customListItemProvider: CustomListItemProvider
}

export type DeleteTodoHandler = (id: string) => void

export type toggleTodoCompletedHandler = (id: string) => void

export type FetchCallback<U> = (signal: AbortSignal) => U

export type TodoFactory<T extends Todo | TodoApi = Todo> = (title: string) => T

export type AddTodoHandler = (newTodo: Todo | TodoApi) => void
