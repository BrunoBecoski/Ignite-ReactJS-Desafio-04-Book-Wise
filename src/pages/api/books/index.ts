import { NextApiRequest, NextApiResponse } from 'next'

import { prisma } from '../../../libs/prisma'

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  if (request.method !== 'GET') {
    return response.status(405).end()
  }

  const books = await prisma.book.findMany({
    orderBy: [
      {
        name: 'asc',
      },
    ],
  })

  return response.json(books)
}
