import { useEffect, useState } from 'react'
import Head from 'next/head'
import { CaretRight } from '@phosphor-icons/react'

import {
  GetBooksTrending,
  BooksTrendingProps,
} from '../../utils/getBooksTrending'

import { Sidebar } from '../../components/Sidebar'
import { BookCard } from '../../components/BookCard'
import { Overlay } from '../../components/Overlay'
import { SkeletonLoading } from '../../components/SkeletonLoading'

import { Timeline } from '../../components/Timeline'

import { Container, Content, TrendingBooks } from './styles'

export default function Start() {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false)
  const [booksTrending, setBooksTrending] = useState<BooksTrendingProps[]>([])

  useEffect(() => {
    async function apiRequest() {
      const booksTrendingData = await GetBooksTrending()
      setBooksTrending(booksTrendingData)
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

        <Timeline />

        <TrendingBooks>
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
      </Content>
    </Container>
  )
}
