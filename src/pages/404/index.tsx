import Head from 'next/head'
import Link from 'next/link'

import { Container, Content } from './styles'

export default function Custom404() {
  return (
    <Container>
      <Head>
        <title>Página não encontrada | BookWise</title>
      </Head>

      <Content>
        <h2>404</h2>

        <h1>Página não encontrada</h1>

        <Link href="/start">Voltar ao Inicío</Link>
      </Content>
    </Container>
  )
}
