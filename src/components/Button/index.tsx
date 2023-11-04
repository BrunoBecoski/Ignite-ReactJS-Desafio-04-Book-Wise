import { ButtonHTMLAttributes, ReactNode } from 'react'
import Link from 'next/link'

import { Default, Option, Icon } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string
  variant?: 'option' | 'icon'
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

  if (variant === 'icon') {
    if (href) {
      return (
        <Icon as={Link} href={href}>
          {children}
        </Icon>
      )
    }
    return <Icon {...props}>{children}</Icon>
  }

  return <Default {...props}>{children}</Default>
}
