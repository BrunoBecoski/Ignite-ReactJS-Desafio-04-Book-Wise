import { styled } from '../../styles/stitches.config'

export const Container = styled('div', {
  width: '100%',
  padding: '$24',

  borderRadius: '$8',
  background: '$gray-700',

  '.avatar_component': {},

  '.user': {
    fontFamily: '$default',
    color: '$gray-100',
    lineHeight: '$160',
    fontSize: '$16',
  },

  '.date_component': {},

  '.rating_component': {},

  '.cover': {
    width: '$108',
    height: '$152',
    borderRadius: '$4',
  },

  '.name': {
    fontFamily: '$default',
    color: '$gray-100',
    lineHeight: '$140',
    fontWeight: '$bold',
    fontSize: '$16',
  },

  '.author': {
    fontFamily: '$default',
    color: '$gray-400',
    lineHeight: '$160',
    fontSize: '$14',
  },

  '.description': {
    overflow: 'hidden',
    display: '-webkit-box',
    '-webkit-line-clamp': '4',
    '-webkit-box-orient': 'vertical',

    fontFamily: '$default',
    color: '$gray-300',
    lineHeight: '$160',
    fontSize: '$14',

    '@sm': {
      '-webkit-line-clamp': '3',
    },
  },
})
