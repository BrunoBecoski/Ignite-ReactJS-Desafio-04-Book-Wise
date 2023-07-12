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
        book: true,
      },
      take: max,
    })

    return response.json(ratings)
  }
}
