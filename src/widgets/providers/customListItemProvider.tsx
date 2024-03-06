import React from 'react'
import { TodoItem } from '../components/TodoItem'
import { CustomListItemProvider } from '../../widgets'

export const customListItemProvider: CustomListItemProvider = (
  todo,
  deleteTodoHandler,
  toggleTodoCompletedHandler
) => {
  return (
    <TodoItem
      item={todo}
      deleteTodoHandler={deleteTodoHandler}
      toggleTodoCompletedHandler={toggleTodoCompletedHandler}
    />
  )
}
