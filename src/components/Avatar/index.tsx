import Image from 'next/image'

import { Container } from './styles'

interface AvatarProps {
  name: string
  imgUrl: string
}

export function Avatar({ name, imgUrl }: AvatarProps) {
  return (
    <Container title={name}>
      <div>
        <Image alt={name} src={imgUrl} width="70" height="70" />
      </div>
    </Container>
  )
}
