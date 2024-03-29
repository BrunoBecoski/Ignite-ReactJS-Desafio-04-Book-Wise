import { useEffect, useState } from 'react'
import { CaretRight } from '@phosphor-icons/react'

import {
  GetTrendingBooks,
  TrendingBooksProps,
} from '../../utils/getTrendingBooks'

import { SkeletonLoading } from '../SkeletonLoading'
import { BookCard } from '../BookCard'

import { Container, Title } from './styles'

export function Trending() {
  const [trendingBooks, setTrendingBooks] = useState<TrendingBooksProps[]>([])

  useEffect(() => {
    async function apiRequest() {
      const trendingBooksData = await GetTrendingBooks()
      setTrendingBooks(trendingBooksData)
    }

    apiRequest()
  })

  return (
    <Container className="trending_component">
      <Title>
        <p>Livros populares</p>

        <span>
          Ver todos
          <CaretRight weight="bold" />
        </span>
      </Title>

      {trendingBooks.length === 0 ? (
        <>
          <SkeletonLoading type="bookCard" />
          <SkeletonLoading type="bookCard" />
          <SkeletonLoading type="bookCard" />
        </>
      ) : (
        trendingBooks.map((book) => <BookCard key={book.id} bookInfo={book} />)
      )}
    </Container>
  )
}
