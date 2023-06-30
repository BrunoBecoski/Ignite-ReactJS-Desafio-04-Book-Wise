import { NextApiRequest, NextApiResponse } from 'next'

import { prisma } from '../../../libs/prisma'

type ratingWithBookProps = {
  id: string
  name: string
  author: string
  cover_url: string
  count: number
  sum: number
}

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  if (request.method !== 'GET') {
    return response.status(405).end()
  }

  const max = Number(request.query.max)

  const ratingWithBook: ratingWithBookProps[] = await prisma.$queryRaw`
    SELECT
      books.id,
      books.name,
      books.author,
      books.cover_url,
      COUNT(ratings.book_id) as count,
      SUM(ratings.rate) as sum
    FROM
      ratings
    INNER JOIN books
        ON books.id = ratings.book_id
    GROUP BY
      ratings.book_id
    ORDER BY
      count DESC
    LIMIT 
      ${max}
  `

  const ratingWithBookFormat = ratingWithBook.map((rating) => {
    return {
      id: rating.id,
      name: rating.name,
      author: rating.author,
      cover_url: rating.cover_url,
      rate: rating.sum / rating.count,
    }
  })

  return response.json(ratingWithBookFormat)
}
