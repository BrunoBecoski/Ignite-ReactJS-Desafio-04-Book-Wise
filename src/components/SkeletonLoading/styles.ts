import { keyframes, styled } from '../../styles/stitches.config'

const pulse = keyframes({
  '0%': { background: '$gray-600' },
  '50%': { background: '$gray-500' },
  '100%': { background: '$gray-600' },
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

      animation: `${pulse} 1.5s infinite linear`,
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

      animation: `${pulse} 1.5s infinite linear`,
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

      animation: 'none',

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

    animation: `${pulse} 1.5s infinite linear`,
  },

  '.cover': {
    width: '$75',
    height: '$100',

    borderRadius: '$4',

    gridArea: 'cover',
  },

  '.name': {
    width: '$170',
    height: '$20',

    gridArea: 'name',
  },

  '.author': {
    width: '$100',
    height: '$18',

    gridArea: 'author',
  },

  '.rate': {
    width: '$125',
    height: '$20',

    gridArea: 'rate',
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
