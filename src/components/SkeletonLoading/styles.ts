import { keyframes } from '@stitches/react'
import { styled } from '../../styles/stitches.config'

const animation = keyframes({
  from: { transform: 'translateX(-100%)' },
  to: { transform: 'translateX(100%)' },
})

export const Container = styled('div', {
  width: '100%',
  padding: '$20',

  borderRadius: '$8',
  background: '$gray-700',
})

export const BookReview = styled(Container, {
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

export const BookCard = styled(Container, {
  display: 'grid',
  gap: '$10 $20',
  gridTemplateColumns: '$75 auto',
  gridTemplateRows: '$20 $18 auto $20',
  gridTemplateAreas: `
    'cover name'
    'cover author'
    'cover .'
    'cover rate'
  `,

  div: {
    borderRadius: '$6',
    background: '$gray-600',

    '&::before': {
      width: '324px',
      height: '140px',

      position: 'absolute',

      content: '',
      background: 'linear-gradient(90deg, $gray-600,  $gray-500 , $gray-600)',
      animation: `${animation} 1s infinite linear`,
    },
  },

  '.cover': {
    width: '$75',
    height: '$100',

    borderRadius: '$4',

    gridArea: 'cover',

    position: 'relative',
    overflow: 'hidden',

    '&::before': {
      top: '-20px',
      left: '-20px',
    },
  },

  '.name': {
    width: '$170',
    height: '$20',

    gridArea: 'name',

    position: 'relative',
    overflow: 'hidden',

    '&::before': {
      top: '-20px',
      left: '-115px',
    },
  },

  '.author': {
    width: '$100',
    height: '$18',

    gridArea: 'author',

    position: 'relative',
    overflow: 'hidden',

    '&::before': {
      top: '-50px',
      left: '-115px',
    },
  },

  '.rate': {
    width: '$125',
    height: '$20',

    gridArea: 'rate',

    position: 'relative',
    overflow: 'hidden',

    '&::before': {
      top: '-100px',
      left: '-115px',
    },
  },

  '@xl': {
    '.name': {
      width: '100%',
    },

    '.author': {
      width: '100%',
    },

    '.rate': {
      width: '100%',
    },
  },

  '@lg': {
    '.name': {
      width: '$170',
    },

    '.author': {
      width: '$100',
    },

    '.rate': {
      width: '$125',
    },
  },
})
