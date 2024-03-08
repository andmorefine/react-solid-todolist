import { nanoid } from 'nanoid'

export const todoApiFactory = (title: string) => {
  return {
    id: nanoid(8),
    todo: title,
    completed: false,
    userId: 1,
  }
}
