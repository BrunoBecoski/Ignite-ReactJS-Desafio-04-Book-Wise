import { styled } from '../../styles/stitches.config'

export const Container = styled('div', {
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
