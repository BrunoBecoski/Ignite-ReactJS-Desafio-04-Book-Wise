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

  const ratings = await prisma.rating.groupBy({
    by: ['book_id'],
    _count: {
      book_id: true,
    },
    orderBy: [
      {
        _count: {
          book_id: 'desc',
        },
      },
    ],
    take: max,
  })

  return response.json(ratings)
}
