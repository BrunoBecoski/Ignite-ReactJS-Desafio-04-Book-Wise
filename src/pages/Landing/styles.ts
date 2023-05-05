import { styled } from '../../styles/stitches.config'

import bannerImg from '../../assets/banner.png'

export const Container = styled('div', {
  display: 'flex',
  padding: '$5',

  width: '100vw',
  height: '100vh',

  background: '$gray800',
})

export const Banner = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: '600px',
  borderRadius: '$md',

  backgroundImage: `url(${bannerImg.src})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
})

export const Login = styled('div', {})

export const Header = styled('div', {})

export const Options = styled('div', {})
