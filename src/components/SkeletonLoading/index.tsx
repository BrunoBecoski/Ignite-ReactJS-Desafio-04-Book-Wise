import { Container, BookReview } from './styles'

interface SkeletonLoadingProps {
  component: 'bookReview'
}

export function SkeletonLoading({ component }: SkeletonLoadingProps) {
  if (component === 'bookReview') {
    return <BookReview />
  }

  return <Container />
}
