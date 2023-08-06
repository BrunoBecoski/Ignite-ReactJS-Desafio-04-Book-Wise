import { ReactNode, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

import { Container, Background } from './styles'

interface OverlayProps {
  children: ReactNode
  isOpen: boolean
  setIsOpen: (value: boolean) => void
  background?: boolean
}

export function Overlay({
  children,
  isOpen,
  setIsOpen,
  background = true,
}: OverlayProps) {
  const [isBrowserSide, setIsBrowserSide] = useState(false)

  function handleClose() {
    setIsOpen(false)
  }

  useEffect(() => {
    isOpen
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'unset')
  }, [isOpen])

  useEffect(() => {
    setIsBrowserSide(typeof window === 'object')
  }, [])

  return (
    <>
      {isBrowserSide &&
        createPortal(
          <Container className="overlay_component">
            <Background onClick={handleClose} isActive={background} />
            {children}
          </Container>,
          document.body,
        )}
    </>
  )
}
