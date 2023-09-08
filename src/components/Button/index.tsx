import { ButtonHTMLAttributes, ReactNode } from 'react'
import Link from 'next/link'

import { Default, Option } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string
  variant?: 'option'
  children: ReactNode
}

export function Button({ variant, href, children, ...props }: ButtonProps) {
  if (variant === 'option') {
    if (href) {
      return (
        <Option as={Link} href={href}>
          {children}
        </Option>
      )
    }
    return <Option {...props}>{children}</Option>
  }

  return <Default {...props}>{children}</Default>
}
