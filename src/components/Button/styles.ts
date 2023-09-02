import { styled } from '../../styles/stitches.config'

const Container = styled('button', {
  display: 'flex',
  alignItems: 'center',
  gap: '$20',

  padding: '$20 $24',
  height: 'fit-content',
  width: '$384',

  cursor: 'pointer',
  border: 'none',
  borderRadius: '$8',
  background: '$gray-600',

  fontFamily: '$default',
  fontSize: '$18',
  lineHeight: '$160',
  fontWeight: '$bold',
  color: '$gray-200',
  textDecoration: 'none',

  transition: '$background',

  'img, svg': {
    width: '$32',
    height: '$32',

    color: '$purple-100',
  },

  '&:hover': {
    background: '$gray-500',
  },

  '@sm': {
    width: '100%',
  },
})

export const Default = styled(Container, {})

export const Option = styled(Container, {})
