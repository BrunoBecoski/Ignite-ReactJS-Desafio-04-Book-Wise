import { styled } from '../../styles/stitches.config'

export const Container = styled('div', {
  minWidth: '$608',
  padding: '$24',

  borderRadius: '$8',
  background: '$gray-700',

  '@xl': {
    minWidth: '100%',
  },
})

export const Header = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',

  marginBottom: '$32',
})

export const UserInfo = styled('div', {
  display: 'flex',
  gap: '$16',

  '> div': {
    display: 'flex',
    flexDirection: 'column',

    p: {
      fontFamily: '$default',
      color: '$gray-100',
      lineHeight: '$160',
      fontSize: '$16',
    },

    span: {
      fontFamily: '$default',
      color: '$gray-400',
      lineHeight: '$160',
      fontSize: '$14',
    },
  },
})

export const Avatar = styled('span', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: '$40',
  height: '$40',

  background: '$gradient-vertical',
  borderRadius: '$9999',

  svg: {
    width: '$32',
    height: '$32',
    fill: '$gray-700',
  },
})

export const Rating = styled('div', {
  display: 'flex',
  gap: '$4',

  svg: {
    fill: '$purple-100',
    width: '$16',
    height: '$16',
  },
})

export const Book = styled('div', {
  display: 'flex',
  gap: '$20',

  img: {
    width: '$108',
    height: '$152',
  },
})

export const Details = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  '> div': {
    display: 'flex',
    flexDirection: 'column',

    strong: {
      fontFamily: '$default',
      color: '$gray-100',
      lineHeight: '$140',
      fontWeight: '$bold',
      fontSize: '$16',
    },

    span: {
      fontFamily: '$default',
      color: '$gray-400',
      lineHeight: '$160',
      fontSize: '$14',
    },
  },

  p: {
    overflow: 'hidden',
    display: '-webkit-box',
    '-webkit-line-clamp': '4',
    '-webkit-box-orient': 'vertical',

    fontFamily: '$default',
    color: '$gray-300',
    lineHeight: '$160',
    fontSize: '$14',

    '@sm': {
      '-webkit-line-clamp': '3',
    },
  },
})
