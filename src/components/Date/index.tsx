import dayjs from 'dayjs'

import { Container } from './styles'

interface DateProps {
  date: string
}

export function Date({ date }: DateProps) {
  const dateFormat = dayjs(date).format('DD/MM/YYYY')

  return <Container>{dateFormat}</Container>
}
