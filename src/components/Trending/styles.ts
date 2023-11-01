import { styled } from '../../styles/stitches.config'

export const Container = styled('aside', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$12',
  alignItems: 'center',

  position: 'fixed',
  bottom: 0,
  right: 0,

  '.title': {
    width: '100%',
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
})
