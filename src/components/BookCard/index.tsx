import { Star } from '@phosphor-icons/react'

import { Container, Cover, BookDetails, Title, Rating } from './styles'

export function BookCard() {
  return (
    <Container>
      <Cover
        alt="Capa do livro"
        src="/images/books/14-habitos-de-desenvolvedores-altamente-produtivos.png"
        width="64"
        height="94"
      />

      <BookDetails>
        <Title>
          <p>14 Hábitos de Desenvolvedores Altamente Produtivos</p>
          <span>Zeno Rocha</span>
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
