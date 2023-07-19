import { styled } from '../../styles/stitches.config'

export const Container = styled('div', {
  background: '$gray-700',
  borderRadius: '$8',

  variants: {
    component: {
      bookReview: {
        width: '$608',
        height: '$280',
      },
    },
  },
})
