import Image from 'next/image'
import { ChartLineUp, Binoculars, SignIn, X } from '@phosphor-icons/react'

import { Container, Menu, Navigation, Login } from './styles'

import logoImg from '../../assets/logo.svg'

interface sidebarProps {
  selected: 'start' | 'explore'
  setSidebarIsOpen: (value: boolean) => void
  sidebarIsOpen: boolean
}

export function Sidebar({
  selected,
  sidebarIsOpen,
  setSidebarIsOpen,
}: sidebarProps) {
  function handleCloseSidebar() {
    setSidebarIsOpen(false)
  }

  return (
    <Container isOpen={{ '@lg': 'true', '@md': sidebarIsOpen }}>
      <button onClick={handleCloseSidebar}>
        <X />
      </button>
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
