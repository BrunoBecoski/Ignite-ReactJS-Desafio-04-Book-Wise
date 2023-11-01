import { styled } from '../../styles/stitches.config'

export const Container = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '$12',

  '.title': {
    marginBottom: '$4',
    textAlign: 'left',

    fontFamily: '$default',
    color: '$gray-100',
    fontSize: '$14',
    lineHeight: '$160',
  },
})
