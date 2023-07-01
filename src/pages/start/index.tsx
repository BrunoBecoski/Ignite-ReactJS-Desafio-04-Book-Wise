import { useEffect, useState } from 'react'
import Head from 'next/head'
import { ChartLineUp, CaretRight, List } from '@phosphor-icons/react'

import { api } from '../../libs/axios'

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
  Scroll,
  MyBooks,
  TrendingBooks,
} from './styles'

interface BooksTrendingProps {
  id: string
  name: string
  author: string
  cover_url: string
  rate: number
}

export default function start() {
  const [selected, setSelected] = useState('avaliations')
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false)
  const [booksTrending, setBooksTrending] = useState<BooksTrendingProps[]>([])

  useEffect(() => {
    async function apiRequest() {
      const { data } = await api.get('/books/trending?max=4')

      setBooksTrending(data)
    }

    apiRequest()
  }, [])

  return (
    <Container className={sidebarIsOpen ? 'open' : 'close'}>
      <Head>
        <title>Início | BookWise</title>
      </Head>

      <Content>
        <Overlay
          isOpen={sidebarIsOpen}
          setIsOpen={setSidebarIsOpen}
          background={sidebarIsOpen}
        >
          <Sidebar optionSelected="start" sidebarIsOpen={sidebarIsOpen} />
        </Overlay>

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

              {booksTrending.map((book) => (
                <BookCard key={book.id} bookInfo={book} />
              ))}
            </TrendingBooks>
          </div>
        </Scroll>
      </Content>
    </Container>
  )
}
