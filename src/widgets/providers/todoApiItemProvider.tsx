import React from 'react'
import { TodoApiItem } from '../components/TodoApiItem'
import { TodoApi, CustomListItemProvider } from '../../widgets'

export const todoApiItemProvider: CustomListItemProvider<TodoApi> = (
  todo,
  deleteTodoHandler,
  toggleTodoCompletedHandler
) => {
  return (
    <TodoApiItem
      item={todo}
      deleteTodoHandler={deleteTodoHandler}
      toggleTodoCompletedHandler={toggleTodoCompletedHandler}
    />
  )
}
