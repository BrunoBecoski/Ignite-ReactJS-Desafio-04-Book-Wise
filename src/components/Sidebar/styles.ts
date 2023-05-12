import Link from 'next/link'

import { styled } from '../../styles/stitches.config'

import sidebarBackground from '../../assets/sidebar_background.svg'

export const Container = styled('nav', {
  backgroundImage: `url(${sidebarBackground.src})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',

  borderRadius: '$12',

  height: '100%',
  maxWidth: '$232',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',

  paddingBlock: '$40 $24',

  '> div': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '$64',
  },

  img: {
    width: '$128',
    height: 'auto',
  },
})

export const Menu = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '$16',
})

export const Navigation = styled(Link, {
  position: 'relative',

  display: 'flex',
  alignItems: 'center',
  gap: '$12',

  textDecoration: 'none',

  fontFamily: '$default',
  color: '$gray-400',
  fontSize: '$16',
  fontWeight: '$regular',

  svg: {
    width: '$24',
    height: '$24',
    fill: '$gray-400',
  },

  transtion: '$fill $color',

  '&:hover': {
    color: '$gray-100',

    svg: {
      fill: '$gray-100',
    },
  },

  variants: {
    selected: {
      true: {
        fontWeight: 'bold',
        color: '$gray-100',

        svg: {
          fill: '$gray-100',
        },

        '&::before': {
          position: 'absolute',
          left: '-$16',

          content: '',
          width: '$4',
          height: '$24',
          borderRadius: '$9999',
          background: '$gradient-vertical',
        },
      },
    },
  },
})

export const Login = styled(Link, {
  display: 'flex',
  alignItems: 'center',
  gap: '$12',

  fontFamily: '$default',

  fontWeight: '$bold',
  fontSize: '$16',
  color: '$gray-200',

  textDecoration: 'none',

  transition: '$color',

  svg: {
    width: '$20',
    height: '$20',

    fill: '$green-100',
  },

  '&:hover': {
    color: '$green-100',
  },
})