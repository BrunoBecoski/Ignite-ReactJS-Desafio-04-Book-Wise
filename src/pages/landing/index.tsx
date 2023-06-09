import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { RocketLaunch } from '@phosphor-icons/react'

import {
  Container,
  Banner,
  Content,
  Login,
  Header,
  Options,
  Button,
} from './styles'

import logoImg from '../../assets/logo.svg'
import googleIconImg from '../../assets/google-icon.svg'
import githubIconImg from '../../assets/github-icon.svg'

export default function Landing() {
  return (
    <Container>
      <Head>
        <title>BookWise</title>
      </Head>

      <Banner>
        <Image alt="Logo BookWise" src={logoImg} />
      </Banner>

      <Content>
        <Login>
          <Header>
            <h2>Boas vindas!</h2>
            <p>Faça seu login ou acesse como visitante.</p>
          </Header>

          <Options>
            <Button>
              <Image alt="Google icon" src={googleIconImg} />
              Entrar com Google
            </Button>

            <Button>
              <Image alt="Github icon" src={githubIconImg} />
              Entrar com Github
            </Button>

            <Button as={Link} href="/start">
              <RocketLaunch />
              Acessar como visitante
            </Button>
          </Options>
        </Login>
      </Content>
    </Container>
  )
}
