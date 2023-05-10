import { styled } from '../../styles/stitches.config'

import bannerImg from '../../assets/banner.png'

export const Container = styled('div', {
  display: 'flex',
  alingItems: 'center',
  jsutifyContent: 'center',

  width: '100vw',
  height: '100vh',
  padding: '$20',

  background: '$gray-800',

  '@md': {
    position: 'relative',
    padding: '$0',
  },
})

export const Banner = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: '40%',
  borderRadius: '$10',

  backgroundImage: `url(${bannerImg.src})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',

  img: {
    width: '$256',
  },

  '@md': {
    width: '100%',
    borderRadius: '$0',
    alignItems: 'flex-start',

    img: {
      marginTop: '$48',
      width: '$208',
    },
  },
})

export const Content = styled('div', {
  flex: 'auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '@md': {
    position: 'absolute',
    top: '20vh',

    display: 'inline',
    paddingInline: '$24',
    width: '100%',
  },
})

export const Login = styled('div', {
  display: 'flex',
  gap: '$40',
  flexDirection: 'column',

  marginBottom: '$96',

  '@md': {
    marginBottom: '$0',
  },
})

export const Header = styled('div', {
  h2: {
    color: '$gray-100',
    fontSize: '$24',
    fontWeight: '$bold',
    lineHeight: '$140',
  },

  p: {
    color: '$gray-200',
    lineHeight: '$160',
  },

  '@md': {
    textAlign: 'center',
  },
})

export const Options = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '$16',
})

export const Button = styled('button', {
  display: 'flex',
  alignItems: 'center',
  gap: '$20',

  padding: '$20 $24',
  width: '$384',

  cursor: 'pointer',
  border: 'none',
  borderRadius: '$8',
  background: '$gray-600',

  fontSize: '$18',
  lineHeight: '$160',
  fontWeight: '$bold',
  color: '$gray-200',

  transition: '$background',

  '&:hover': {
    background: '$gray-500',
  },

  img: {
    width: '$32',
    height: '$32',
  },

  svg: {
    width: '$32',
    height: '$32',

    color: '$purple-100',
  },

  '@sm': {
    width: '100%',
  },
})
