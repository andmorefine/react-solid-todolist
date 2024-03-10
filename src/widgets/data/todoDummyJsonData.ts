import { TodoApi } from '@widgets/type'

const limit = 5
const url = `https://dummyjson.com/todos?limit=${limit}`

export const getData = async (signal: AbortSignal): Promise<TodoApi[]> => {
  const response = await fetch(url, { signal })
  if (!response.ok) {
    throw new Error(response.statusText)
  }
  const jsonData = await response.json()

  return [...jsonData.todos]
}
