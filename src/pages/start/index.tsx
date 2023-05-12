import Head from 'next/head'

import { ChartLineUp, CaretRight } from '@phosphor-icons/react'

import { Sidebar } from '../../components/Sidebar'

import { Container, PageTitle, MyBooks, TrendingBooks } from './styles'

export default function start() {
  return (
    <Container>
      <Head>
        <title>Início | BookWise</title>
      </Head>

      <Sidebar selected="start" />

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
