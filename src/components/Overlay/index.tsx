import { ReactNode } from 'react'

import { Container, Background } from './styles'

interface OverlayProps {
  children: ReactNode
  setClose: (value: boolean) => void
}

export function Overlay({ children, setClose }: OverlayProps) {
  return (
    <Container>
      {children}
      <Background onClick={() => setClose(true)} />
    </Container>
  )
}
