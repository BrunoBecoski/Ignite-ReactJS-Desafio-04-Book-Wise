import Image from 'next/image'
import { ChartLineUp, Binoculars, SignIn, X } from '@phosphor-icons/react'

import { Container, Menu, Navigation, Login } from './styles'

import logoImg from '../../assets/logo.svg'

type SidebarOptions = 'start' | 'explore'

interface sidebarProps {
  optionSelected: SidebarOptions
  sidebarIsOpen: boolean
}

export function Sidebar({ optionSelected, sidebarIsOpen }: sidebarProps) {
  return (
    <Container
      className="sidebar_component"
      isOpen={{ '@lg': 'true', '@md': sidebarIsOpen }}
    >
      <div>
        <Image alt="Logo BookWise" src={logoImg} />

        <Menu>
          <Navigation href="/start" selected={optionSelected === 'start'}>
            <ChartLineUp
              weight={optionSelected === 'start' ? 'bold' : 'regular'}
            />
            Início
          </Navigation>

          <Navigation href="/explore" selected={optionSelected === 'explore'}>
            <Binoculars
              weight={optionSelected === 'explore' ? 'bold' : 'regular'}
            />
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
