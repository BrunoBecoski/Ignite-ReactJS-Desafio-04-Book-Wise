import { styled } from '../../styles/stitches.config'

const Container = styled('button', {
  height: 'fit-content',

  cursor: 'pointer',

  fontFamily: '$default',
  lineHeight: '$160',

  transition: '$background, $color, $borderColor',
})

export const Default = styled(Container, {
  width: 'fit-content',
  padding: '$10 $16',

  fontSize: '$16',
  borderRadius: '$full',
  background: 'transparent',
  color: '$purple-100',
  border: '1px solid $purple-100',

  '&:hover': {
    fontWeight: '$medium',
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

  textDecoration: 'none',
  fontSize: '$18',
  fontWeight: '$bold',
  borderRadius: '$8',
  border: 'none',
  background: '$gray-600',
  color: '$gray-200',

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
