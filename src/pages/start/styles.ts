import { styled } from '../../styles/stitches.config'

export const Container = styled('div', {
  display: 'flex',
  padding: '$20',
  maxHeight: 'fit-content',
  minHeight: '100vh',
  flexDirection: 'column',

  background: '$gray-800',
})

export const Content = styled('div', {
  width: '100%',
  maxWidth: '1440px',
  marginInline: 'auto',
})

export const Fixed = styled('div', {
  position: 'fixed',

  '@md': {
    '.desktop': {
      display: 'none',
    },
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

export const Header = styled('header', {
  marginBottom: '$0',

  '> button': {
    display: 'none',
  },

  '@md': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    marginBottom: '$32',

    '> button': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',

      border: 'none',
      background: 'none',

      svg: {
        fill: '$green-100',

        width: '$32',
        height: '$32',
      },
    },

    '> div': {
      width: '$32',
      height: '$32',
    },
  },
})

export const PageTitle = styled('h2', {
  display: 'flex',
  alignItems: 'center',
  gap: '$12',
  paddingTop: '$52',

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
    paddingTop: '$0',
  },
})

export const Options = styled('div', {
  visibility: 'hidden',

  marginTop: '$0',

  button: {
    marginBottom: '$24',

    fontFamily: '$default',
    color: '$gray-100',
    fontSize: '$14',
    lineHeight: '$160',

    border: 'none',
    background: 'none',

    cursor: 'pointer',

    '&::after': {
      content: '',
      display: 'block',
      width: '100%',
      height: '$3',

      borderRadius: '$9999',
      marginTop: '$4',
    },

    '&.selected': {
      fontWeight: '$bold',

      '&::after': {
        background: '$green-100',
      },
    },
  },

  '@lg': {
    visibility: 'visible',

    marginTop: '$40',
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
  width: '100%',

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
