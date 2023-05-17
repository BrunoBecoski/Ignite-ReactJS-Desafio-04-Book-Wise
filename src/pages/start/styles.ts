import { styled } from '../../styles/stitches.config'

export const Container = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  gap: '$96',
  padding: '$20',

  background: '$gray-800',
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
})

export const Content = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  gap: '$64',
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
})
