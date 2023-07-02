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
  const { id, name, author, cover_url, rate } = bookInfo

  return (
    <Container>
      <Cover
        alt={`Capa do livro ${name}`}
        src={cover_url}
        width="64"
        height="94"
      />

      <BookDetails>
        <Title>
          <p>{name}</p>
          <span>{author}</span>
        </Title>

        <Rating>
          <Star weight={rate >= 1 ? 'fill' : 'regular'} />
          <Star weight={rate >= 2 ? 'fill' : 'regular'} />
          <Star weight={rate >= 3 ? 'fill' : 'regular'} />
          <Star weight={rate >= 4 ? 'fill' : 'regular'} />
          <Star weight={rate >= 5 ? 'fill' : 'regular'} />
        </Rating>
      </BookDetails>
    </Container>
  )
}
