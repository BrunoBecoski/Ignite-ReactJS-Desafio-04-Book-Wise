import { ReactNode } from 'react'
import { createPortal } from 'react-dom'

import { Container, Background } from './styles'

interface OverlayProps {
  children: ReactNode
  setIsOpen: (value: boolean) => void
}

export function Overlay({ children, setIsOpen }: OverlayProps) {
  function handleClose() {
    setIsOpen(false)
  }

  return (
    <>
      {createPortal(
        <Container>
          <Background onClick={handleClose} />
          {children}
        </Container>,
        document.body,
      )}
    </>
  )
}
