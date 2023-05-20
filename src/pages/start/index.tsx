import Head from 'next/head'

import { ChartLineUp, CaretRight } from '@phosphor-icons/react'

import { Sidebar } from '../../components/Sidebar'
import { BookReview } from '../../components/BookReview'
import { BookCard } from '../../components/BookCard'

import {
  Container,
  PageTitle,
  Content,
  Fixed,
  Scroll,
  MyBooks,
  TrendingBooks,
} from './styles'

export default function start() {
  return (
    <Container>
      <Head>
        <title>Início | BookWise</title>
      </Head>

      <Content>
        <Fixed>
          <Sidebar selected="start" />
        </Fixed>

        <Scroll>
          <PageTitle>
            <ChartLineUp />
            <strong>Início</strong>
          </PageTitle>

          <div>
            <MyBooks>
              <p>Avaliações mais recentes</p>

              <BookReview />
              <BookReview />
              <BookReview />
            </MyBooks>

            <TrendingBooks>
              <div>
                <p>Livros populares</p>

                <span>
                  Ver todos
                  <CaretRight weight="bold" />
                </span>
              </div>

              <BookCard />
              <BookCard />
              <BookCard />
              <BookCard />
            </TrendingBooks>
          </div>
        </Scroll>
      </Content>
    </Container>
  )
}
