import { nanoid } from 'nanoid'

const getRandomInt = (): number => {
  return Math.floor(Math.random() * 100) + 1
}

const futureDate = (): string => {
  const result = new Date(new Date().getTime())

  const daysLater = getRandomInt()
  result.setDate(result.getDate() + daysLater)

  return result.toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export const todoExtFactory = (title: string) => {
  return {
    id: nanoid(8),
    title: title,
    completed: false,
    dueDate: futureDate(),
  }
}
