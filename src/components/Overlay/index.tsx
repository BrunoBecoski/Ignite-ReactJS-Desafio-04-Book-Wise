import { useEffect, ReactNode } from 'react'
import { createPortal } from 'react-dom'

import { Container, Background } from './styles'

interface OverlayProps {
  children: ReactNode
  isOpen: boolean
  setIsOpen: (value: boolean) => void
  background: boolean
}

export function Overlay({
  children,
  background,
  isOpen,
  setIsOpen,
}: OverlayProps) {
  function handleClose() {
    setIsOpen(false)
  }

  useEffect(() => {
    isOpen
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'unset')
  }, [isOpen])

  if (typeof window !== 'object') {
    return <></>
  }

  return (
    <>
      {createPortal(
        <Container>
          <Background onClick={handleClose} isActive={background} />
          {children}
        </Container>,
        document.body,
      )}
    </>
  )
}
