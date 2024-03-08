import React from 'react'
import { TodoItemExt } from '@widgets/components/TodoItemExt'
import { TodoExt, CustomListItemProvider } from '@widgets/type'

export const todoItemExtProvider: CustomListItemProvider<TodoExt> = (
  todo,
  deleteTodoHandler,
  toggleTodoCompletedHandler
) => {
  return (
    <TodoItemExt
      item={todo}
      deleteTodoHandler={deleteTodoHandler}
      toggleTodoCompletedHandler={toggleTodoCompletedHandler}
    />
  )
}
