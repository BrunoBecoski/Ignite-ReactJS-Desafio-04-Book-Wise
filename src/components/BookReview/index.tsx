import Image from 'next/image'
import Link from 'next/link'
import { User, Star } from '@phosphor-icons/react'

import {
  Container,
  Header,
  UserInfo,
  Avatar,
  Rating,
  Book,
  Details,
} from './styles'

export function BookReview() {
  return (
    <Container>
      <Header>
        <UserInfo>
          <Avatar>
            <User />
          </Avatar>

          <div>
            <p>Bruno Becoski</p>
            <span>Hoje</span>
          </div>
        </UserInfo>

        <Rating>
          <Star weight="fill" />
          <Star weight="fill" />
          <Star weight="fill" />
          <Star />
          <Star />
        </Rating>
      </Header>

      <Book>
        <Image
          alt="Capa do livro"
          src="/images/books/o-guia-do-mochileiro-das-galaxias.png"
          width="108"
          height="152"
        />

        <Details>
          <div>
            <strong>O guia do mochileiro das galáxias</strong>
            <span>Douglas Adams</span>
          </div>

          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              assumenda nisi quidem sunt. Cum itaque sit at explicabo quae
              sequi, eaque libero nesciunt doloremque incidunt, magni a.
              Dignissimos, aperiam doloribus.
            </p>
            <Link href="/book">ver mais</Link>
          </div>
        </Details>
      </Book>
    </Container>
  )
}
