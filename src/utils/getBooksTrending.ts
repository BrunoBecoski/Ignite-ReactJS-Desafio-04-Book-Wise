import { api } from '../libs/axios'

export interface BooksTrendingProps {
  id: string
  name: string
  author: string
  coverUrl: string
  rate: number
  count: number
  sum: number
}

export async function GetBooksTrending() {
  const response = await api.get<BooksTrendingProps[]>('/books/trending')

  if (response.status === 200) {
    return response.data
  }

  return []
}
