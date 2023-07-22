import { Container, BookReview } from './styles'

interface SkeletonLoadingProps {
  type: 'bookReview'
}

export function SkeletonLoading({ type }: SkeletonLoadingProps) {
  if (type === 'bookReview') {
    return (
      <BookReview>
        <div className="user">
          <div className="avatar" />
          <div className="name" />
          <div className="date" />
          <div className="rate" />
        </div>
      </BookReview>
    )
  }

  return <Container />
}
