import React from 'react'
import { TodoItem } from '@widgets/components/TodoItem'
import { Todo, CustomListItemProvider } from '@widgets/type'

export const customListItemProvider: CustomListItemProvider<Todo> = (
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
