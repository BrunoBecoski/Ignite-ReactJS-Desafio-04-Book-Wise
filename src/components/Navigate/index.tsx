import { useState } from 'react'
import Image from 'next/image'
import { ChartLineUp, Binoculars, SignIn, List, X } from '@phosphor-icons/react'

import { Overlay } from '../Overlay'

import { Header, Container, Menu, Navigation, Login } from './styles'

import logoImg from '../../assets/logo.svg'
import { Button } from '../Button'

type Pages = 'start' | 'explore'

interface NavigateProps {
  page: Pages
}

export function Navigate({ page }: NavigateProps) {
  const [isOpen, setIsOpen] = useState(false)

  function handleChangeIsOpen() {
    setIsOpen((prevState) => !prevState)
  }

  return (
    <>
      {/* <Header isOpen={isOpen}>
        <Button
          variant="icon"
          onClick={handleChangeIsOpen}
          title={isOpen ? 'Fechar navegação' : 'Abrir navegação'}
          style={{
            background: isOpen ? 'transparent' : '',
          }}
        >
          {isOpen ? <X /> : <List />}
        </Button>
      </Header> */}
      {/* <Overlay
        isOpen={isOpen}
        setIsOpen={handleChangeIsOpen}
        background={isOpen}
      > */}
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
      {/* </Overlay> */}
    </>
  )
}
