import { nanoid } from 'nanoid'
import { Todo } from '@widgets/type'

const createTodo = (index: number): Todo => ({
  id: nanoid(8),
  title: `タスク ${index + 1}`,
  completed: false,
})

export const getData = (): Todo[] =>
  Array.from({ length: 5 }, (_, index) => createTodo(index))
