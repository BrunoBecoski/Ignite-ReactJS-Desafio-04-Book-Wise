import { styled } from '../../styles/stitches.config'

export const Container = styled('button', {
  padding: '$20 $24',
  height: 'fit-content',
  width: 'fit-content',

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

  '&:hover': {
    background: '$gray-500',
  },
})
