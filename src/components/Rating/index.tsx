import { Star, StarHalf } from '@phosphor-icons/react'

import { Container } from './styles'

interface RatingProps {
  rate: number
}

export function Rating({ rate }: RatingProps) {
  return (
    <Container title={`Nota: ${rate}`}>
      {rate <= 0 ? (
        <Star />
      ) : rate > 0 && rate < 1 ? (
        <StarHalf weight="fill" />
      ) : (
        <Star weight="fill" />
      )}

      {rate <= 1 ? (
        <Star />
      ) : rate > 1 && rate < 2 ? (
        <StarHalf weight="fill" />
      ) : (
        <Star weight="fill" />
      )}

      {rate <= 2 ? (
        <Star />
      ) : rate > 2 && rate < 3 ? (
        <StarHalf weight="fill" />
      ) : (
        <Star weight="fill" />
      )}

      {rate <= 3 ? (
        <Star />
      ) : rate > 3 && rate < 4 ? (
        <StarHalf weight="fill" />
      ) : (
        <Star weight="fill" />
      )}

      {rate <= 4 ? (
        <Star />
      ) : rate > 4 && rate < 5 ? (
        <StarHalf weight="fill" />
      ) : (
        <Star weight="fill" />
      )}
    </Container>
  )
}
