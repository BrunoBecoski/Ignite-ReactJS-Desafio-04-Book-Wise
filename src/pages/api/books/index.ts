import { NextApiRequest, NextApiResponse } from 'next'

import { prisma } from '../../../libs/prisma'

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const books = await prisma.book.findMany()

  return response.json(books)
}
