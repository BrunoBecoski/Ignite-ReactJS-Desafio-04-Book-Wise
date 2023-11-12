import Head from 'next/head'
import { ChartLineUp } from '@phosphor-icons/react'

import { Background } from '../../components/Background'
import { Timeline } from '../../components/Timeline'
import { Trending } from '../../components/Trending'
import { Navigate } from '../../components/Navigate'

import { Container, Content, PageTitle, Scrolls } from './styles'

export default function Start() {
  return (
    <Container>
      <Head>
        <title>Início | BookWise</title>
      </Head>

      <Background />

      <Content>
        <Navigate page="start" />

        <Scrolls>
          <PageTitle>
            <ChartLineUp />
            Início
          </PageTitle>

          <Timeline />
        </Scrolls>

        <Trending />
      </Content>
    </Container>
  )
}
