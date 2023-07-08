import { Star } from '@phosphor-icons/react'

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
          <Star weight="fill" />
          {rate <= 1.1 && rate >= 1.9 ? (
            <>
              <Star className="star empty" weight="duotone" />
              <div
                className="cover"
                style={{ width: `${rate.toString().split('.')[1]}0%` }}
              >
                <Star className="star" weight="fill" />
              </div>
            </>
          ) : (
            <Star weight="fill" />
          )}
          {rate <= 2.1 && rate >= 2.9 ? (
            <>
              <Star className="star empty" weight="duotone" />
              <div
                className="cover"
                style={{ width: `${rate.toString().split('.')[1]}0%` }}
              >
                <Star className="star" weight="fill" />
              </div>
            </>
          ) : (
            <Star weight="fill" />
          )}
          {rate <= 3.1 && rate >= 3.9 ? (
            <>
              <Star className="star empty" weight="duotone" />
              <div
                className="cover"
                style={{ width: `${rate.toString().split('.')[1]}0%` }}
              >
                <Star className="star" weight="fill" />
              </div>
            </>
          ) : (
            <Star weight="fill" />
          )}
          {rate <= 4.1 && rate >= 4.9 ? (
            <>
              <Star className="star empty" weight="duotone" />
              <div
                className="cover"
                style={{ width: `${rate.toString().split('.')[1]}0%` }}
              >
                <Star className="star" weight="fill" />
              </div>
            </>
          ) : (
            <Star weight={rate === 5 ? 'fill' : 'regular'} />
          )}
        </Rating>
      </BookDetails>
    </Container>
  )
}
