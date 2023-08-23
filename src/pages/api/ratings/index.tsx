import { NextApiRequest, NextApiResponse } from 'next'

import { prisma } from '../../../libs/prisma'

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  if (request.method !== 'GET') {
    return response.status(405).end()
  }

  const max = Number(request.query.max)

  const page = Number(request.query.page)

  let skip = 0

  if (page) {
    skip = (page - 1) * max
  }

  const ratings = await prisma.rating.findMany({
    orderBy: [
      {
        created_at: 'desc',
      },
    ],
    include: {
      user: true,
      book: true,
    },
    take: max,
    skip,
  })

  const ratingsFormated = ratings.map((rating) => {
    return {
      id: rating.id,
      rate: rating.rate,
      date: rating.created_at,
      description: rating.description,
      user: {
        name: rating.user.name,
        avatarUrl: rating.user.avatar_url,
      },
      book: {
        coverUrl: rating.book.cover_url,
        name: rating.book.name,
        author: rating.book.author,
      },
    }
  })

  return response.json(ratingsFormated)
}
