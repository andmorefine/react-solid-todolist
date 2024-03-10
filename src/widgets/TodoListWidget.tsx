import React, { useEffect, useState } from 'react'
import { TodoListAddForm } from '@widgets/components/TodoAddForm'
import { TodoListItems } from '@widgets/components/TodoListItems'
import { Todo, TodoExt, TodoApi, TodoListWidgetProps } from '@widgets/type'

export const TodoListWidget = <
  T extends Todo | TodoExt | TodoApi = Todo,
  U extends Todo[] | TodoExt[] | Promise<TodoApi[]> = Todo[]
>({
  title,
  fetchCallback,
  todoFactory,
  customListItemProvider,
}: TodoListWidgetProps<T, U>) => {
  const [todos, setTodos] = useState<(Todo | TodoExt | TodoApi)[]>([])

  const fetchTodos = async (signal: AbortSignal) => {
    try {
      return await fetchCallback(signal)
    } catch (error: any) {
      throw new Error(error.message)
    }
  }

  const handleAddTodo = (newTodo: Todo | TodoExt | TodoApi) => {
    setTodos([...todos, newTodo])
  }
  const handleDeleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const handleToggleCompleted = (id: string) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed }
        }
        return todo
      })
    )
  }

  useEffect(() => {
    const abortController = new AbortController()
    fetchTodos(abortController.signal)
      .then((data) => {
        const todo = data as (Todo | TodoExt | TodoApi)[]
        setTodos(todo)
      })
      .catch((error) => {
        console.error(error)
      })

    return () => {
      abortController.abort()
    }
  }, [])

  return (
    <div
      className={
        'border-2 border-slate-500 shadow-lg shadow-slate-800 p-4 text-slate-50 rounded mb-10'
      }
    >
      <h1 className="text-4xl text-slate-100 mb-4">{title}</h1>
      <hr />
      <TodoListAddForm
        addTodoHandler={handleAddTodo}
        todoFactory={todoFactory}
      />
      <hr />
      {todos.length === 0 && (
        <h2 className={'text-center mt-4 text-2xl'}>🌀 読み込み中...</h2>
      )}
      {todos.length > 0 && (
        <TodoListItems
          todos={todos}
          deleteTodoHandler={handleDeleteTodo}
          toggleTodoCompletedHandler={handleToggleCompleted}
          customListItemProvider={customListItemProvider}
        />
      )}
    </div>
  )
}
