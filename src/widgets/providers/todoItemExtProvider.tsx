import React from 'react'
import { TodoItemExt } from '../components/TodoItemExt'
import { TodoExt, CustomListItemProvider } from '../../widgets'

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
