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

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '.timeline_component': {
    maxWidth: '50%',
  },
})
