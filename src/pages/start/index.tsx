import { useState } from 'react'
import Head from 'next/head'

import { ChartLineUp, CaretRight } from '@phosphor-icons/react'

import { Sidebar } from '../../components/Sidebar'
import { BookReview } from '../../components/BookReview'
import { BookCard } from '../../components/BookCard'

import {
  Container,
  PageTitle,
  Options,
  Content,
  Fixed,
  Scroll,
  MyBooks,
  TrendingBooks,
} from './styles'

export default function start() {
  const [selected, setSelected] = useState('avaliations')

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

          <Options>
            <button
              className={selected === 'avaliations' ? 'selected' : ''}
              onClick={() => setSelected('avaliations')}
            >
              Avaliações mais recentes
            </button>
            <button
              className={selected === 'popular' ? 'selected' : ''}
              onClick={() => setSelected('popular')}
            >
              Livros populares
            </button>
          </Options>

          <div>
            <MyBooks className={selected === 'avaliations' ? 'active' : ''}>
              <p>Avaliações mais recentes</p>

              <BookReview />
              <BookReview />
              <BookReview />
            </MyBooks>

            <TrendingBooks className={selected === 'popular' ? 'active' : ''}>
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
