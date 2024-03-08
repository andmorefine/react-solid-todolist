import { nanoid } from 'nanoid'
import { TodoExt } from '@widgets/type'

const getRandomDate = (startDate: Date, endDate: Date): string => {
  const start = startDate.getTime()
  const end = endDate.getTime()
  const randomTime = start + Math.random() * (end - start)
  return new Date(randomTime).toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

const startDate = new Date(1984, 1, 1)
const endDate = new Date(2024, 12, 31)

const createTodo = (index: number): TodoExt => ({
  id: nanoid(8),
  title: `タスク ${index + 1}`,
  completed: false,
  dueDate: getRandomDate(startDate, endDate), //'2023年4月7日'
})

export const getData = (): TodoExt[] =>
  Array.from({ length: 5 }, (_, index) => createTodo(index))
