import { styled } from '../../styles/stitches.config'

export const Container = styled('div', {
  maxHeight: '100%',
  minHeight: '100vh',

  maxWidth: '100%',
  minWidth: '100vw',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  background: '$gray-800',
})

export const Content = styled('div', {
  width: '100%',
  maxWidth: '1440px',
  marginInline: 'auto',
})

export const Scrolls = styled('div', {
  display: 'flex',
  alignItems: 'start',
  flexDirection: 'column',

  marginInline: '$348 $484',

  '@xxl': {
    marginInline: '25vw 30vw',
  },

  '@lg': {
    marginInline: '300px $20',
  },

  '@md': {
    marginInline: '$20',
  },
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
