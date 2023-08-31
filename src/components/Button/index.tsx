import { ReactNode } from 'react'
import Link from 'next/link'

import { Container } from './styles'

interface ButtonProps {
  children: ReactNode
  href?: string
}

export function Button({ children, href }: ButtonProps) {
  if (href) {
    return (
      <Container as={Link} href={href}>
        {children}
      </Container>
    )
  }

  return <Container>{children}</Container>
}
