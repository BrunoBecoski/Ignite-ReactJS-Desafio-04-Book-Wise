import Image from 'next/image'
import { ChartLineUp, Binoculars, SignIn } from '@phosphor-icons/react'

import { Container, Menu, Navigation, Login } from './styles'

import logoImg from '../../assets/logo.svg'

interface sidebarProps {
  selected: 'start' | 'explore'
}

export function Sidebar({ selected }: sidebarProps) {
  return (
    <Container>
      <div>
        <Image alt="Logo BookWise" src={logoImg} />

        <Menu>
          <Navigation href="/start" selected={selected === 'start'}>
            <ChartLineUp weight={selected === 'start' ? 'bold' : 'regular'} />
            Início
          </Navigation>

          <Navigation href="/explore" selected={selected === 'explore'}>
            <Binoculars weight={selected === 'explore' ? 'bold' : 'regular'} />
            Explorar
          </Navigation>
        </Menu>
      </div>

      <Login href="/">
        Fazer login
        <SignIn />
      </Login>
    </Container>
  )
}
