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
  width: '100%',

  padding: '$20',

  '.user': {
    display: 'grid',
    gap: '$10 $20',
    gridTemplateRows: '$20 $20',
    gridTemplateColumns: '$50 $125 auto $125',
    gridTemplateAreas: `
      'avatar name . rate'
      'avatar date . .'
    `,

    marginBottom: '$30',

    div: {
      borderRadius: '$6',
      background: '$gray-600',
    },

    '.avatar': {
      width: '$50',
      height: '$50',

      borderRadius: '$full',

      gridArea: 'avatar',
    },

    '.name': {
      width: '$125',
      height: '$20',

      gridArea: 'name',
    },

    '.date': {
      width: '$75',
      height: '$18',

      gridArea: 'date',
    },

    '.rate': {
      width: '$125',
      height: '$20',

      gridArea: 'rate',
    },
  },

  '.book': {
    display: 'grid',
    gap: '$10 $20',
    gridTemplateColumns: '$110 auto',
    gridTemplateRows: '$20 $18 auto',
    gridTemplateAreas: `
      'cover name .'
      'cover author .'
      'cover description description'
    `,

    div: {
      borderRadius: '$6',
      background: '$gray-600',
    },

    '.cover': {
      width: '$110',
      height: '$150',

      borderRadius: '$4',

      gridArea: 'cover',
    },

    '.name': {
      width: '$200',
      height: '$20',

      gridArea: 'name',
    },

    '.author': {
      width: '$100',
      height: '$18',

      marginTop: '-$5',

      gridArea: 'author',
    },

    '.description': {
      display: 'flex',
      gap: '$5',
      flexDirection: 'column',
      justifyContent: 'flex-end',

      background: 'none',

      gridArea: 'description',

      div: {
        width: '100%',
        height: '$18',

        '&:last-child': {
          width: '50%',
        },
      },
    },
  },
})
