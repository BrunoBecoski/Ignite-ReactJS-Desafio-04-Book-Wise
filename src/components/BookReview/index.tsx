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
      <div className="header">
        <div className="userInfo">
          <Avatar name={user.name} imgUrl={user.avatarUrl} />

          <div>
            <p>{user.name}</p>
            <Date date={date} />
          </div>
        </div>

        <Rating rate={rate} />
      </div>

      <div className="book">
        <Image
          alt={`Capa do livro ${book.name}`}
          src={book.coverUrl}
          width="108"
          height="152"
        />

        <div className="details">
          <div>
            <strong>{book.name}</strong>
            <span>{book.author}</span>
          </div>

          <p className="description">{description}</p>
        </div>
      </div>
    </Container>
  )
}
