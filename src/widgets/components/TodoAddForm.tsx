import React from 'react'
import { useState } from 'react'
import { AddTodoHandler, TodoFactory } from '../../widgets'
interface TodoListAddFormProps {
  addTodoHandler: AddTodoHandler
  todoFactory: TodoFactory
}

export const TodoListAddForm = ({
  addTodoHandler,
  todoFactory,
}: TodoListAddFormProps) => {
  const [hasError, setHasError] = useState(false)

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value.trim()
    if (hasError && newTitle !== '') setHasError(false)
  }

  const handleAddTodo = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.target
    const formData = new FormData(form)
    const newTodoTitle = formData.get('new-todo-item')
    const title = newTodoTitle !== null ? newTodoTitle.toString().trim() : ''

    if (title === '') {
      setHasError(true)
      return
    }
    setHasError(false)

    const newTodo = todoFactory(title)

    addTodoHandler(newTodo)

    form.reset()
  }

  return (
    <form className={'mt-4'} onSubmit={handleAddTodo}>
      <label htmlFor="new-todo-item">追加タスク</label>
      {hasError && (
        <p className={'text-red-500 text-sm'}>
          タスクのタイトルを入力してください
        </p>
      )}
      <div className={'flex items-center gap-1 mb-4'}>
        <input
          type="text"
          id={'new-todo-item'}
          name={'new-todo-item'}
          className={
            'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          }
          placeholder="New Todo"
          onChange={handleTitleChange}
          defaultValue={''}
        />
        <button
          className={
            'mt-1 py-3 px-2 bg-gray-950 text-zinc-200 rounded min-w-[115px] hover:bg-slate-600 transition-colors duration-300 ease-in-out'
          }
        >
          追加
        </button>
      </div>
    </form>
  )
}
