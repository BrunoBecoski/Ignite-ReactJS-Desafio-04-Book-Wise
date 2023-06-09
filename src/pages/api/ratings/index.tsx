import { NextApiRequest, NextApiResponse } from 'next'

import { prisma } from '../../../libs/prisma'

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  if (request.method !== 'GET') {
    return response.status(405).end()
  }

  const orderBy = request.query.orderBy

  const max = Number(request.query.max)

  if (orderBy === 'latest') {
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
}
