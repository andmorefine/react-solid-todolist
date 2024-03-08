import React from 'react'
import { TodoApiItem } from '@widgets/components/TodoApiItem'
import { TodoApi, CustomListItemProvider } from '@widgets/type'

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
