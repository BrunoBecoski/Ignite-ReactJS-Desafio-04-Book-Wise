import { ReactNode } from 'react'
import Link from 'next/link'

import { Default, Option } from './styles'

interface ButtonProps {
  href?: string
  variant?: 'option'
  children: ReactNode
}

export function Button({ variant, href, children }: ButtonProps) {
  if (variant === 'option') {
    if (href) {
      return (
        <Option as={Link} href={href}>
          {children}
        </Option>
      )
    }
    return <Option>{children}</Option>
  }

  return <Default>{children}</Default>
}
