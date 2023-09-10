import { api } from '../libs/axios'

export interface RatingsProps {
  id: string
  rate: number
  date: string
  description: string
  user: {
    name: string
    avatarUrl: string
  }
  book: {
    coverUrl: string
    name: string
    author: string
  }
}

export async function GetRatings() {
  const response = await api.get<RatingsProps[]>('/ratings')

  if (response.status === 200) {
    return response.data
  }

  return []
}
