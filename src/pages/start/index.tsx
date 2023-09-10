import { useEffect, useState } from 'react'
import Head from 'next/head'
import { ChartLineUp, CaretRight, List } from '@phosphor-icons/react'

import {
  GetBooksTrending,
  BooksTrendingProps,
} from '../../utils/getBooksTrending'
import { GetRatings, RatingsProps } from '../../utils/getRatings'

import { Sidebar } from '../../components/Sidebar'
import { BookReview } from '../../components/BookReview'
import { BookCard } from '../../components/BookCard'
import { Overlay } from '../../components/Overlay'
import { SkeletonLoading } from '../../components/SkeletonLoading'
import { Button } from '../../components/Button'

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

export default function Start() {
  const [selected, setSelected] = useState('avaliations')
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false)
  const [booksTrending, setBooksTrending] = useState<BooksTrendingProps[]>([])
  const [ratings, setRatings] = useState<RatingsProps[]>([])

  useEffect(() => {
    async function apiRequest() {
      const booksTrendingData = await GetBooksTrending()
      setBooksTrending(booksTrendingData)

      const ratingsData = await GetRatings()
      setRatings(ratingsData)
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

          <div className="content">
            <MyBooks className={selected === 'avaliations' ? 'active' : ''}>
              <p className="title">Avaliações mais recentes</p>

              {ratings.length === 0 ? (
                <>
                  <SkeletonLoading type="bookReview" />
                  <SkeletonLoading type="bookReview" />
                  <SkeletonLoading type="bookReview" />
                </>
              ) : (
                ratings.map((rating) => (
                  <BookReview key={rating.id} ratingInfo={rating} />
                ))
              )}

              <Button>Carregar mais avaliações</Button>
            </MyBooks>

            <TrendingBooks className={selected === 'popular' ? 'active' : ''}>
              <div className="title">
                <p>Livros populares</p>

                <span>
                  Ver todos
                  <CaretRight weight="bold" />
                </span>
              </div>

              {booksTrending.length === 0 ? (
                <>
                  <SkeletonLoading type="bookCard" />
                  <SkeletonLoading type="bookCard" />
                  <SkeletonLoading type="bookCard" />
                </>
              ) : (
                booksTrending.map((book) => (
                  <BookCard key={book.id} bookInfo={book} />
                ))
              )}
            </TrendingBooks>
          </div>
        </Scroll>
      </Content>
    </Container>
  )
}
