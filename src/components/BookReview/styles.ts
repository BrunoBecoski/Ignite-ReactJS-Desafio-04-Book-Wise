import { styled } from '../../styles/stitches.config'

export const Container = styled('div', {
  width: '100%',
  padding: '$24',

  borderRadius: '$8',
  background: '$gray-700',

  '.header': {
    display: 'flex',
    justifyContent: 'space-between',

    marginBottom: '$32',
  },

  '.userInfo': {
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
    },
  },

  '.book': {
    display: 'flex',
    gap: '$20',

    img: {
      width: '$108',
      height: '$152',
      borderRadius: '$4',
    },
  },

  '.details': {
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
  },
})
