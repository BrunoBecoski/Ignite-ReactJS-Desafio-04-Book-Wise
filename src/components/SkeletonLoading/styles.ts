import { keyframes } from '@stitches/react'
import { styled } from '../../styles/stitches.config'

const animation = keyframes({
  to: { right: '-200%' },
  from: { right: '200%' },
})

export const Container = styled('div', {
  borderRadius: '$8',
  background: '$gray-700',

  overflow: 'hidden',
  position: 'relative',

  '&::before': {
    position: 'absolute',

    content: '',
    width: '100px',
    height: '100%',
    transform: 'rotateZ(15deg) scaleY(2)',

    background: 'linear-gradient(90deg, $gray-700, $gray-600, $gray-700)',

    animation: `${animation} 5s infinite linear`,
  },
})

export const BookReview = styled(Container, {
  width: '$608',
  height: '$280',

  padding: '$24',

  '.user': {
    '.avatar': {
      width: '$50',
      height: '$50',
      borderRadius: '$full',

      background: '$gray-600',
    },

    '.name': {
      width: '$128',
      height: '$16',
      borderRadius: '$6',

      background: '$gray-600',
    },

    '.date': {
      width: '$64',
      height: '$16',
      borderRadius: '$6',

      background: '$gray-600',
    },

    '.rate': {
      width: '$100',
      height: '$16',
      borderRadius: '$6',

      background: '$gray-600',
    },
  },
})
