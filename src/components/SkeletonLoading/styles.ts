import { keyframes } from '@stitches/react'
import { styled } from '../../styles/stitches.config'

const animation = keyframes({
  to: { right: '-200%' },
  from: { right: '200%' },
})

export const Container = styled('div', {
  borderRadius: '$8',
  background: '$gray-700',

  position: 'relative',
  overflow: 'hidden',

  '&::after': {
    position: 'absolute',
    content: '',
    width: '50px',
    height: '100%',
    transform: 'rotateZ(15deg) scaleY(2)',

    background: 'linear-gradient(90deg, $gray-700, $gray-600, $gray-700)',

    animation: `${animation} 5s infinite linear`,
  },
})

export const BookReview = styled(Container, {
  width: '$608',
  height: '$280',
})
