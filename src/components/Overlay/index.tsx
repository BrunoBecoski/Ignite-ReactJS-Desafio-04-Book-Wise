import { ReactNode } from 'react'
import { createPortal } from 'react-dom'

import { Container, Background } from './styles'

interface OverlayProps {
  children: ReactNode
  setClose: (value: boolean) => void
}

export function Overlay({ children, setClose }: OverlayProps) {
  return (
    <>
      {createPortal(
        <Container>
          <Background onClick={() => setClose(true)}>CU</Background>
          {children}
        </Container>,
        document.body,
      )}
    </>
  )
}
