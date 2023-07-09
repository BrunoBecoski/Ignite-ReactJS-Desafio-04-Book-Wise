import { styled } from '../../styles/stitches.config'

export const Container = styled('div', {
  display: 'flex',
  gap: '$4',

  svg: {
    width: '$16',
    height: '$16',

    path: {
      fill: '$purple-100',
    },
  },
})
