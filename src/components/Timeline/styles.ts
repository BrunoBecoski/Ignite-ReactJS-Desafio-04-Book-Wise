import { styled } from '../../styles/stitches.config'

export const Container = styled('main', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '$12',
})

export const Title = styled('p', {
  marginBottom: '$4',
  textAlign: 'left',

  fontFamily: '$default',
  color: '$gray-100',
  fontSize: '$14',
  lineHeight: '$160',
})
