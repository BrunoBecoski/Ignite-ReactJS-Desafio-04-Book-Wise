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

  const books = await prisma.book.findMany({
    select: {
      id: true,
      name: true,
      author: true,
      cover_url: true,
    },
  })

  const res = ratings.map((rating) => {
    return books.filter((book) => {
      if (book.id === rating.book_id) {
        return {
          book,
        }
      }
    })
  })

  return response.json(res)
}
