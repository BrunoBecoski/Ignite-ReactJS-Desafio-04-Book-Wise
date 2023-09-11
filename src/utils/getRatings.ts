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

interface GetRatingsProps {
  page?: number
}

export async function GetRatings({ page = 1 }: GetRatingsProps) {
  const response = await api.get<RatingsProps[]>(`/ratings?page=${page}`)

  if (response.status === 200) {
    return response.data
  }

  return []
}
