import { api } from '../libs/axios'

export interface TrendingBooksProps {
  id: string
  name: string
  author: string
  coverUrl: string
  rate: number
  count: number
  sum: number
}

export async function GetTrendingBooks() {
  const response = await api.get<TrendingBooksProps[]>('/books/trending')

  if (response.status === 200) {
    return response.data
  }

  return []
}
