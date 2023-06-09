import { styled } from '../../styles/stitches.config'

export const Container = styled('div', {
  width: 'fit-content',
  height: 'fit-content',
})

export const Background = styled('div', {
  width: '100vw',
  height: '100vh',

  position: 'fixed',
  top: '$0',
  right: '$0',
  bottom: '$0',
  left: '$0',

  background: '$overlay',

  variants: {
    isActive: {
      true: {
        display: 'block',
      },
      false: {
        display: 'none',
      },
    },
  },
})
