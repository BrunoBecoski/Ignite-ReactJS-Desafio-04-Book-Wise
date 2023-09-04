import { styled } from '../../styles/stitches.config'

const Container = styled('button', {
  height: 'fit-content',

  cursor: 'pointer',
  borderRadius: '$8',

  fontFamily: '$default',
  fontSize: '$18',
  lineHeight: '$160',

  transition: '$background, $color, $borderColor',
})

export const Default = styled(Container, {
  width: 'fit-content',
  padding: '$10 $12',

  background: 'transparent',
  color: '$purple-100',
  border: '1px solid $purple-100',

  '&:hover': {
    background: '$purple-200',
    borderColor: '$purple-200',
    color: '$gray-100',
  },
})

export const Option = styled(Container, {
  width: '$384',
  padding: '$20 $24',

  display: 'flex',
  alignItems: 'center',
  gap: '$20',

  border: 'none',
  background: '$gray-600',
  color: '$gray-200',
  fontWeight: '$bold',

  '&:hover': {
    background: '$gray-500',
  },

  'img, svg': {
    width: '$32',
    height: '$32',

    color: '$purple-100',
  },

  '@sm': {
    width: '100%',
  },
})
