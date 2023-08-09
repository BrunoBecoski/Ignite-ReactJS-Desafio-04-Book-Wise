import { styled } from '../../styles/stitches.config'

export const Container = styled('div', {
  width: '$54',
  height: '$54',

  padding: '$2',
  borderRadius: '$full',
  background: '$gradient-vertical',

  div: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    width: '$50',
    height: '$50',

    overflow: 'hidden',

    borderRadius: '$full',

    img: {
      width: 'auto',
      height: 'auto',
    },
  },
})
