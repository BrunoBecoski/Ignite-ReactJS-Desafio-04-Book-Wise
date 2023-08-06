import dayjs from '../../libs/dayjs'

import { Container } from './styles'

interface DateProps {
  date: string
}

export function Date({ date }: DateProps) {
  const dateFormat = dayjs(date).format('DD/MM/YYYY')

  const isToday = dayjs(date).isToday()
  const isYesterday = dayjs(date).isYesterday()
  const dateToNow = dayjs(date).fromNow()

  if (isToday) {
    return (
      <Container className="date_component" title={dateFormat}>
        Hoje
      </Container>
    )
  }

  if (isYesterday) {
    return (
      <Container className="date_component" title={dateFormat}>
        Ontem
      </Container>
    )
  }

  return (
    <Container className="date_component" title={dateFormat}>
      {dateToNow}
    </Container>
  )
}
