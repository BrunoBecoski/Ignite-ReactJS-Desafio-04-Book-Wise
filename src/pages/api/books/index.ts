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

  if (orderBy === 'name') {
    const books = await prisma.book.findMany({
      orderBy: [
        {
          name: 'asc',
        },
      ],
    })

    return response.json(books)
  }

  if (orderBy === 'author') {
    const books = await prisma.book.findMany({
      orderBy: [
        {
          author: 'asc',
        },
      ],
    })

    return response.json(books)
  }
}
