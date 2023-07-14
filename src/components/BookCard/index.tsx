import { Rating } from '../../components/Rating'

import { Container, Cover, BookDetails, Title } from './styles'

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
    <Container>
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

        <Rating rate={rate} />
      </BookDetails>
    </Container>
  )
}
