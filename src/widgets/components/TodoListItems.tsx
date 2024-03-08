import React from 'react'
import { TodoListItemsProps } from '@widgets/type'

export const TodoListItems = ({
  todos,
  deleteTodoHandler,
  toggleTodoCompletedHandler,
  customListItemProvider,
}: TodoListItemsProps) => {
  return (
    <div className={'mt-4 min-h-[48px] h-full px-2'}>
      {todos.length === 0 && (
        <p className={'text-center'}>表示するタスクがありません</p>
      )}
      {todos.length > 0 && (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              {customListItemProvider(
                todo,
                deleteTodoHandler,
                toggleTodoCompletedHandler
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
