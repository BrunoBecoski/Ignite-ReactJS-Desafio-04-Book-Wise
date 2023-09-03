import { ReactNode } from 'react'
import Link from 'next/link'

import { Default, Option } from './styles'

interface ButtonProps {
  href?: string
  type?: 'option'
  children: ReactNode
}

export function Button({ type, href, children }: ButtonProps) {
  if (type === 'option') {
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
