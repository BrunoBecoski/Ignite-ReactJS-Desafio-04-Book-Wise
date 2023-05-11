import { styled } from '../../styles/stitches.config'

export const Container = styled('div', {
  position: 'absolute',

  width: '100vw',
  height: '100vh',

  background: '$gray-800',
})

export const Content = styled('div', {
  position: 'relative',
  top: '35%',
  left: '50%',
  transform: 'translate(-50%, -50%)',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '$32',
  width: 'fit-content',
  height: 'fit-content',

  textAlign: 'center',

  h2: {
    color: '$gray-100',
    fontFamily: '$default',
    fontSize: '$128',
    fontWeight: '$bold',
  },

  h1: {
    color: '$gray-100',
    fontFamily: '$default',
  },

  a: {
    padding: '$20 $24',
    borderRadius: '$8',
    color: '$white',
    background: '$gray-600',

    fontFamily: '$default',
    textDecoration: 'none',
    textTransform: 'uppercase',
    fontWeight: '$bold',
    fontSize: '$18',

    transition: '$background',

    '&:hover': {
      background: '$gray-500',
    },
  },
})
