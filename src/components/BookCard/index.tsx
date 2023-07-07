import { Star, StarHalf } from '@phosphor-icons/react'

import { Container, Cover, BookDetails, Title, Rating } from './styles'

interface BookCardProps {
  bookInfo: {
    name: string
    author: string
    coverUrl: string
    rate: number
    count: number
    sum: number
  }
}

export function BookCard({ bookInfo }: BookCardProps) {
  const { name, author, coverUrl, count, sum } = bookInfo

  const rate = sum / count

  return (
    <Container title={`Avaliação média: ${rate}`}>
      <Cover
        alt={`Capa do livro ${name}`}
        src={coverUrl}
        width="64"
        height="94"
      />

      <BookDetails>
        <Title>
          <p>{name}</p>
          <span>{author}</span>
        </Title>

        <Rating>
          {/* <Star weight={rate >= 1 ? 'fill' : 'regular'} />
          {rate === 1.5 ? (
            <StarHalf weight="fill" />
          ) : (
            <Star weight={rate >= 2 ? 'fill' : 'regular'} />
          )}
          {rate === 2.5 ? (
            <StarHalf weight="fill" />
          ) : (
            <Star weight={rate >= 3 ? 'fill' : 'regular'} />
          )}
          {rate === 3.5 ? (
            <StarHalf weight="fill" />
          ) : (
            <Star weight={rate >= 4 ? 'fill' : 'regular'} />
          )}
          {rate === 4.5 ? (
            <StarHalf weight="fill" />
          ) : (
            <Star weight={rate === 5 ? 'fill' : 'regular'} />
          )} */}

          <Star className="star empty" weight="duotone" />
          <div
            className="cover"
            style={{ width: `${rate.toString().split('.')[1]}0%` }}
          >
            <Star className="star" weight="fill" />
          </div>
        </Rating>
      </BookDetails>
    </Container>
  )
}
