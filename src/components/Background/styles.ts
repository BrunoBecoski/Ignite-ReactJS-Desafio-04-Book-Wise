import { styled } from '../../styles/stitches.config'

export const Container = styled('div', {
  position: 'fixed',
  top: '-100vh',
  right: '-100vw',
  bottom: '-100vh',
  left: '-100vw',
  zIndex: '-10',

  background: '$gray-800',
})
