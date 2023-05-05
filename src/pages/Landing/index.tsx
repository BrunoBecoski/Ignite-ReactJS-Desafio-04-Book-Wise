import Head from 'next/head'
import Image from 'next/image'
import { RocketLaunch } from '@phosphor-icons/react'

import { Container, Banner, Login, Header, Options } from './styles'

import logoImg from '../../assets/logo.svg'
import googleIconImg from '../../assets/google-icon.svg'
import githubIconImg from '../../assets/github-icon.svg'

export default function Landing() {
  return (
    <>
      <Head>
        <title>BookWise</title>
      </Head>
      <Container>
        <Banner>
          <Image alt="Logo BookWise" src={logoImg} />
        </Banner>

        <Login>
          <Header>
            <h2>Boas vindas!</h2>
            <p>Faça seu login ou acesse como visitante.</p>
          </Header>

          <Options>
            <button>
              <Image alt="Google icon" src={googleIconImg} />
              Entrar com Google
            </button>

            <button>
              <Image alt="Github icon" src={githubIconImg} />
              Entrar com Github
            </button>

            <button>
              <RocketLaunch />
              Acessar como visitante
            </button>
          </Options>
        </Login>
      </Container>
    </>
  )
}
