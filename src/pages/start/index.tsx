import { useEffect, useState } from 'react'
import Head from 'next/head'
import { ChartLineUp, CaretRight, List } from '@phosphor-icons/react'

import { api } from '../../libs/axios'

import { Sidebar } from '../../components/Sidebar'
import { BookReview } from '../../components/BookReview'
import { BookCard } from '../../components/BookCard'
import { Overlay } from '../../components/Overlay'
import { SkeletonLoading } from '../../components/SkeletonLoading'

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
interface BooksRatingsProps {
  id: string
  rate: number
  date: string
  description: string
  user: {
    name: string
    avatarUrl: string
  }
  book: {
    coverUrl: string
    name: string
    author: string
  }
}

export default function start() {
  const [selected, setSelected] = useState('avaliations')
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false)
  const [booksTrending, setBooksTrending] = useState<BooksTrendingProps[]>([])
  const [booksRatings, setBooksRatings] = useState<BooksRatingsProps[]>([])

  useEffect(() => {
    async function apiRequest() {
      const bookTrending = await api.get('/books/trending?max=4')

      const bookRatings = await api.get('/ratings?orderBy=latest&max=3')

      setBooksTrending(bookTrending.data)
      setBooksRatings(bookRatings.data)
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

          <Options className="options">
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

              <SkeletonLoading type="bookReview" />

              {booksRatings.map((rating) => (
                <BookReview key={rating.id} ratingInfo={rating} />
              ))}
            </MyBooks>

            <TrendingBooks className={selected === 'popular' ? 'active' : ''}>
              <div>
                <p>Livros populares</p>

                <span>
                  Ver todos
                  <CaretRight weight="bold" />
                </span>
              </div>

              <SkeletonLoading type="bookCard" />

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
