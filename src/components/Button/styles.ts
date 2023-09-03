import { styled } from '../../styles/stitches.config'

const Container = styled('button', {
  height: 'fit-content',
  padding: '$20 $24',

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

export const Default = styled(Container, {
  width: 'fit-content',
})

export const Option = styled(Container, {
  width: '$384',

  display: 'flex',
  alignItems: 'center',
  gap: '$20',

  'img, svg': {
    width: '$32',
    height: '$32',

    color: '$purple-100',
  },

  '@sm': {
    width: '100%',
  },
})
