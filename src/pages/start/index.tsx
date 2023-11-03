import Head from 'next/head'

import { Timeline } from '../../components/Timeline'
import { Trending } from '../../components/Trending'
import { Navigate } from '../../components/Navigate'

import { Container, Content } from './styles'

export default function Start() {
  return (
    <Container>
      <Head>
        <title>Início | BookWise</title>
      </Head>

      <Content>
        <Navigate page="start" />

        <Timeline />

        <Trending />
      </Content>
    </Container>
  )
}
