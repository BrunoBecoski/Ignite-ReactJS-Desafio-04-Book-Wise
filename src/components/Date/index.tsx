import dayjs from '../../libs/dayjs'

import { Container } from './styles'

interface DateProps {
  date: string
}

export function Date({ date }: DateProps) {
  const dateFormat = dayjs(date).format('DD/MM/YYYY')
  const dateToNow = dayjs(date).fromNow()

  return <Container title={dateFormat}>{dateToNow}</Container>
}
