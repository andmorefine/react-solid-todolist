const limit = 5
const url = `https://dummyjson.com/todos?limit=${limit}`
import { TodoApi } from '../../widgets/'

export const getData = async (signal: AbortSignal): Promise<TodoApi[]> => {
  const response = await fetch(url, { signal })
  if (!response.ok) {
    throw new Error(response.statusText)
  }
  const jsonData = await response.json()

  console.log(jsonData)
  return [...jsonData.todos]
}
