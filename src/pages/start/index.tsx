import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import {
  ChartLineUp,
  Binoculars,
  SignIn,
  CaretRight,
} from '@phosphor-icons/react'

import { Container, SideBar, PageTitle, MyBooks, TrendingBooks } from './styles'

import logoImg from '../../assets/logo.svg'

export default function start() {
  return (
    <Container>
      <Head>
        <title>Início | BookWise</title>
      </Head>

      <SideBar>
        <Image alt="Logo BookWise" src={logoImg} />

        <Link href="/start">
          <ChartLineUp />
          Início
        </Link>

        <Link href="/explore">
          <Binoculars />
          Explorar
        </Link>

        <Link href="/">
          Fazer login
          <SignIn />
        </Link>
      </SideBar>

      <PageTitle>
        <ChartLineUp />
        Início
      </PageTitle>

      <MyBooks>
        <p>Avaliações mais recentes</p>
      </MyBooks>

      <TrendingBooks>
        <p>Livros populares</p>

        <span>
          Ver todos
          <CaretRight />
        </span>
      </TrendingBooks>
    </Container>
  )
}
