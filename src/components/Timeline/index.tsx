import { useEffect, useState } from 'react'

import { GetRatings, RatingsProps } from '../../utils/getRatings'

import { SkeletonLoading } from '../SkeletonLoading'
import { BookReview } from '../BookReview'
import { Button } from '../Button'

import { Container } from './styles'

export function Timeline() {
  const [ratings, setRatings] = useState<RatingsProps[]>([])

  async function handleLoadRatings() {
    const loadRatings = await GetRatings({
      page: 2,
    })

    console.log(loadRatings)
  }

  useEffect(() => {
    async function apiRequest() {
      const ratingsData = await GetRatings({})
      setRatings(ratingsData)
    }

    apiRequest()
  }, [])

  return (
    <Container className="timeline_component">
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

      <Button onClick={handleLoadRatings}>Carregar mais avaliações</Button>
    </Container>
  )
}
