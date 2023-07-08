import { styled } from '../../styles/stitches.config'

export const Container = styled('div', {
  display: 'flex',
  gap: '$4',

  svg: {
    width: '$16',
    height: '$16',
    fill: '$purple-100',
  },

  '.cover': {
    overflow: 'hidden',
  },

  '.star': {
    '&.empty': {
      position: 'absolute',
    },
  },
})
