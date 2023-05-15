import { Star } from '@phosphor-icons/react'

import { Container, Cover, BookDetails, Title, Rating } from './styles'

export function BookCard() {
  return (
    <Container>
      <Cover
        alt="Capa do livro"
        src="/images/books/a-revolucao-dos-bichos.png"
        width="64"
        height="94"
      />

      <BookDetails>
        <Title>
          <strong>A revolução dos bichos</strong>
          <span>George Orwell</span>
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
