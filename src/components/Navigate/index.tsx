import { useState } from 'react'
import Image from 'next/image'
import { ChartLineUp, Binoculars, SignIn } from '@phosphor-icons/react'

import { Overlay } from '../Overlay'

import { Container, Menu, Navigation, Login } from './styles'

import logoImg from '../../assets/logo.svg'

type Pages = 'start' | 'explore'

interface NavigateProps {
  page: Pages
}

export function Navigate({ page }: NavigateProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Overlay
      isOpen={isOpen}
      setIsOpen={() => setIsOpen(!isOpen)}
      background={isOpen}
    >
      <Container
        className="sidebar_component"
        isOpen={{ '@lg': 'true', '@md': isOpen }}
      >
        <div>
          <Image alt="Logo BookWise" src={logoImg} />

          <Menu>
            <Navigation href="/start" selected={page === 'start'}>
              <ChartLineUp weight={page === 'start' ? 'bold' : 'regular'} />
              Início
            </Navigation>

            <Navigation href="/explore" selected={page === 'explore'}>
              <Binoculars weight={page === 'explore' ? 'bold' : 'regular'} />
              Explorar
            </Navigation>
          </Menu>
        </div>

        <Login href="/">
          Fazer login
          <SignIn />
        </Login>
      </Container>
    </Overlay>
  )
}
