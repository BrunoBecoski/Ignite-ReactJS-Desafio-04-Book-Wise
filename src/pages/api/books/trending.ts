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
    by: ['book_id', 'rate'],
    _count: {
      book_id: true,
    },

    _sum: {
      rate: true,
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

  const ratingsFormat = ratings.map((rating) => {
    return {
      id: rating.book_id,
      rate: rating._sum.rate / rating._count.book_id,
    }
  })

  const booksFormat = ratings.map((rating) =>
    books.find((book) => {
      if (book.id === rating.book_id) {
        return {
          book,
        }
      } else {
        return null
      }
    }),
  )

  const ratingWithBook = ratingsFormat.map((rating, index) => {
    const book = booksFormat[index]

    return {
      id: rating.id,
      rate: rating.rate,
      name: book?.name,
      author: book?.author,
      cover_url: book?.cover_url,
    }
  })

  return response.json(ratingWithBook)
}
