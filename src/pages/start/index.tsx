import { useState } from 'react'
import Head from 'next/head'

import { Sidebar } from '../../components/Sidebar'
import { Overlay } from '../../components/Overlay'

import { Timeline } from '../../components/Timeline'
import { Trending } from '../../components/Trending'

import { Container, Content } from './styles'

export default function Start() {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false)

  return (
    <Container className={sidebarIsOpen ? 'open' : 'close'}>
      <Head>
        <title>Início | BookWise</title>
      </Head>

      <Content>
        <Overlay
          isOpen={sidebarIsOpen}
          setIsOpen={setSidebarIsOpen}
          background={sidebarIsOpen}
        >
          <Sidebar optionSelected="start" sidebarIsOpen={sidebarIsOpen} />
        </Overlay>

        <Timeline />

        <Trending />
      </Content>
    </Container>
  )
}
