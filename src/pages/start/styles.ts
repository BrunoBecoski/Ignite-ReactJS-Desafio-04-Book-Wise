import { styled } from '../../styles/stitches.config'

export const Container = styled('div', {
  display: 'flex',
  padding: '$20',
  maxHeight: 'fit-content',
  minHeight: '100vh',

  background: '$gray-800',
})

export const Content = styled('div', {
  width: '1440px',
  marginInline: 'auto',
})

export const Fixed = styled('div', {
  position: 'fixed',

  '@md': {
    display: 'none',
  },
})

export const Scroll = styled('div', {
  marginLeft: '$328',

  '@xxl': {
    marginLeft: '$288',
  },

  '@xl': {
    marginLeft: '$240',
  },

  '@md': {
    marginLeft: '$0',
  },

  '> div': {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: '$64',

    '@xxl': {
      gap: '$32',
    },
  },
})

export const PageTitle = styled('h2', {
  display: 'flex',
  alignItems: 'center',
  gap: '$12',
  marginBlock: '$52 $40',

  svg: {
    fill: '$green-100',
    width: '$32',
    height: '$32',
  },

  strong: {
    fontFamily: '$default',
    color: '$gray-100',
    fontWeight: '@bold',
    fontSize: '$24',
    lineHeight: '$140',
  },

  '@md': {
    justifyContent: 'center',
    marginBlock: '$8 $24',
  },
})

export const Options = styled('div', {
  visibility: 'hidden',

  button: {
    marginBottom: '$16',

    fontFamily: '$default',
    color: '$gray-100',
    fontSize: '$14',
    lineHeight: '$160',

    border: 'none',
    background: 'none',

    cursor: 'pointer',

    '&.selected': {
      fontWeight: '$bold',
      borderBottom: '2px solid $green-100',
    },
  },

  '@lg': {
    visibility: 'visible',
  },
})

export const MyBooks = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$12',

  '> p': {
    marginBottom: '$4',

    fontFamily: '$default',
    color: '$gray-100',
    fontSize: '$14',
    lineHeight: '$160',
  },

  '@lg': {
    display: 'none',

    '> p': {
      display: 'none',
    },

    '&.active': {
      display: 'flex',
    },
  },
})

export const TrendingBooks = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$12',

  '> div:first-child': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    marginBottom: '$4',

    '> p': {
      fontFamily: '@default',
      color: '$gray-100',
      fontSize: '$14',
      lineHeight: '$140',
    },

    '> span': {
      display: 'flex',
      alignItems: 'center',
      gap: '$8',

      fontFamily: '@default',
      color: '$purple-100',
      fontWeight: '$bold',
      fontSize: '$14',
      lineHeight: '$160',

      svg: {
        fill: '$purple-100',
        width: '$16',
        height: '$16',
      },
    },
  },

  '@lg': {
    display: 'none',

    '> div:first-child': {
      display: 'none',
    },

    '&.active': {
      display: 'flex',
    },
  },
})
