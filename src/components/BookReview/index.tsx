import Image from 'next/image'

import { Avatar } from '../Avatar'
import { Rating } from '../Rating'
import { Date } from '../Date'

import { Container } from './styles'

interface BookReviewProps {
  ratingInfo: {
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
}

export function BookReview({ ratingInfo }: BookReviewProps) {
  const { rate, date, description, user, book } = ratingInfo

  return (
    <Container className="bookReview_component">
      <Avatar name={user.name} imgUrl={user.avatarUrl} />

      <p className="user">{user.name}</p>
      <Date date={date} />

      <Rating rate={rate} />

      <Image
        className="cover"
        alt={`Capa do livro ${book.name}`}
        src={book.coverUrl}
        width="108"
        height="152"
      />

      <strong className="name">{book.name}</strong>
      <span className="author">{book.author}</span>

      <p className="description">{description}</p>
    </Container>
  )
}
