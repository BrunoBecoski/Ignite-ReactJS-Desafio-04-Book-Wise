import { Star } from '@phosphor-icons/react'

import { Container, Cover, BookDetails, Title, Rating } from './styles'

interface BookCardProps {
  bookInfo: {
    id: string
    name: string
    author: string
    cover_url: string
    rate: number
  }
}

export function BookCard({ bookInfo }: BookCardProps) {
  return (
    <Container>
      <Cover
        alt={`Capa do livro ${bookInfo.name}`}
        src={bookInfo.cover_url}
        width="64"
        height="94"
      />

      <BookDetails>
        <Title>
          <p>{bookInfo.name}</p>
          <span>{bookInfo.author}</span>
        </Title>

        <Rating>
          <Star weight="fill" />
          <Star weight="fill" />
          <Star weight="fill" />
          <Star />
          <Star />
        </Rating>
      </BookDetails>
    </Container>
  )
}
