import { Container, BookReview, BookCard } from './styles'

interface SkeletonLoadingProps {
  type?: 'bookReview' | 'bookCard'
}

export function SkeletonLoading({ type }: SkeletonLoadingProps) {
  if (type === 'bookReview') {
    return (
      <BookReview>
        <div className="avatar" />
        <div className="user" />
        <div className="date" />
        <div className="rate" />

        <div className="cover" />
        <div className="name" />
        <div className="author" />
        <div className="description">
          <div />
          <div />
          <div />
          <div />
        </div>
      </BookReview>
    )
  }

  if (type === 'bookCard') {
    return (
      <BookCard>
        <div className="cover" />
        <div className="name" />
        <div className="author" />
        <div className="rate" />
      </BookCard>
    )
  }

  return <Container />
}
