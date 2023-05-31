import { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'

import { ChartLineUp, CaretRight, List } from '@phosphor-icons/react'

import { Sidebar } from '../../components/Sidebar'
import { BookReview } from '../../components/BookReview'
import { BookCard } from '../../components/BookCard'
import { Overlay } from '../../components/Overlay'

import {
  Container,
  Header,
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
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false)

  useEffect(() => {
    sidebarIsOpen
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'unset')
  }, [sidebarIsOpen])

  return (
    <Container className={sidebarIsOpen ? 'open' : 'close'}>
      <Head>
        <title>Início | BookWise</title>
      </Head>

      <Content>
        <Fixed>
          <div className="desktop">
            <Sidebar selected="start" />
          </div>

          {sidebarIsOpen && (
            <Overlay setClose={() => console.log('setClose()')}>
              <Sidebar selected="start" setSidebarIsOpen={setSidebarIsOpen} />
            </Overlay>
          )}
        </Fixed>

        <Scroll>
          <Header>
            <button onClick={() => setSidebarIsOpen(true)}>
              <List />
            </button>

            <PageTitle>
              <ChartLineUp />
              <strong>Início</strong>
            </PageTitle>

            <div />
          </Header>

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
