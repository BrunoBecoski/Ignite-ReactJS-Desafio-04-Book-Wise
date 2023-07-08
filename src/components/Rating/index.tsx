import { Star } from '@phosphor-icons/react'

import { Container } from './styles'

interface RatingProps {
  rate: number
}

export function Rating({ rate }: RatingProps) {
  return (
    <Container>
      <Star weight="fill" />
      {rate <= 1.1 && rate >= 1.9 ? (
        <>
          <Star className="star empty" weight="duotone" />
          <div
            className="cover"
            style={{ width: `${rate.toString().split('.')[1]}0%` }}
          >
            <Star className="star" weight="fill" />
          </div>
        </>
      ) : (
        <Star weight="fill" />
      )}
      {rate <= 2.1 && rate >= 2.9 ? (
        <>
          <Star className="star empty" weight="duotone" />
          <div
            className="cover"
            style={{ width: `${rate.toString().split('.')[1]}0%` }}
          >
            <Star className="star" weight="fill" />
          </div>
        </>
      ) : (
        <Star weight="fill" />
      )}
      {rate <= 3.1 && rate >= 3.9 ? (
        <>
          <Star className="star empty" weight="duotone" />
          <div
            className="cover"
            style={{ width: `${rate.toString().split('.')[1]}0%` }}
          >
            <Star className="star" weight="fill" />
          </div>
        </>
      ) : (
        <Star weight="fill" />
      )}
      {rate <= 4.1 && rate >= 4.9 ? (
        <>
          <Star className="star empty" weight="duotone" />
          <div
            className="cover"
            style={{ width: `${rate.toString().split('.')[1]}0%` }}
          >
            <Star className="star" weight="fill" />
          </div>
        </>
      ) : (
        <Star weight={rate === 5 ? 'fill' : 'regular'} />
      )}
    </Container>
  )
}
