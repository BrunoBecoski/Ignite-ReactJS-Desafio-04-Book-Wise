import Image from 'next/image'

import { Avatar } from '../Avatar'
import { Rating } from '../Rating'
import { Date } from '../Date'

import { Container, Header, UserInfo, Book, Details } from './styles'

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
    <Container>
      <Header>
        <UserInfo>
          <Avatar name={user.name} imgUrl={user.avatarUrl} />

          <div>
            <p>{user.name}</p>
            <Date date={date} />
          </div>
        </UserInfo>

        <Rating rate={rate} />
      </Header>

      <Book>
        <Image
          alt={`Capa do livro ${book.name}`}
          src={book.coverUrl}
          width="108"
          height="152"
        />

        <Details>
          <div>
            <strong>{book.name}</strong>
            <span>{book.author}</span>
          </div>

          <p>{description}</p>
        </Details>
      </Book>
    </Container>
  )
}
