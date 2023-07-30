import { styled } from '../../styles/stitches.config'

export const Container = styled('div', {
  width: '$52',
  height: '$52',

  padding: '$2',
  borderRadius: '$full',
  background: '$gradient-vertical',

  div: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    overflow: 'hidden',

    borderRadius: '$full',

    img: {
      width: 'auto',
      height: 'auto',
    },
  },
})
