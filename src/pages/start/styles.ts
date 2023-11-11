import { styled } from '../../styles/stitches.config'

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  background: '$gray-800',
})

export const Content = styled('div', {
  maxWidth: '1440px',
  display: 'flex',
  gap: '$20',
})

export const Scrolls = styled('div', {
  display: 'flex',
  alignItems: 'start',
  flexDirection: 'column',
})

export const PageTitle = styled('h2', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$12',

  marginBlock: '$52 $40',

  fontWeight: '$bold',
  fontFamily: '$default',
  color: '$gray-100',
  fontSize: '$24',

  svg: {
    width: '$32',
    height: '$32',

    fill: '$green-100',
  },
})
