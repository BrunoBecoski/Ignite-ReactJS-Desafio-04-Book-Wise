import { styled } from '../../styles/stitches.config'

export const Container = styled('div', {
  width: '100%',
  padding: '$24',

  borderRadius: '$8',
  background: '$gray-700',

  display: 'grid',
  gridTemplateColumns: '$54 $48 auto $96',
  gridTemplateRows: '$20 $20 auto $20 auto',

  gap: '$16',

  gridTemplateAreas: `
    'avatar user user rating'
    'avatar date date .'
    '. . . .'
    'cover cover name .'
    'cover cover author .'
    'cover cover description description'
  `,

  '.avatar_component': {
    gridArea: 'avatar',
  },

  '.user': {
    gridArea: 'user',

    fontFamily: '$default',
    color: '$gray-100',
    lineHeight: '$160',
    fontSize: '$16',
  },

  '.date_component': {
    gridArea: 'date',

    marginTop: '-$10',
  },

  '.rating_component': {
    gridArea: 'rating',
  },

  '.cover': {
    gridArea: 'cover',

    width: '$108',
    height: '$152',
    borderRadius: '$4',
  },

  '.name': {
    gridArea: 'name',

    fontFamily: '$default',
    color: '$gray-100',
    lineHeight: '$140',
    fontWeight: '$bold',
    fontSize: '$16',
  },

  '.author': {
    gridArea: 'author',

    fontFamily: '$default',
    color: '$gray-400',
    lineHeight: '$160',
    fontSize: '$14',

    marginTop: '-$10',
  },

  '.description': {
    gridArea: 'description',

    overflow: 'hidden',
    display: '-webkit-box',
    '-webkit-line-clamp': '4',
    '-webkit-box-orient': 'vertical',

    fontFamily: '$default',
    color: '$gray-300',
    lineHeight: '$160',
    fontSize: '$14',
  },

  '@sm': {
    display: 'grid',
    gridTemplateColumns: '$54 $48 auto',
    gridTemplateRows: '$20 $20 auto $20 $20 $20 auto auto',

    gap: '$16',

    gridTemplateAreas: `
      'avatar user user'
      'avatar date date'
      '. . .'
      'cover cover rating'
      'cover cover name'
      'cover cover author'
      'cover cover .'
      'description description description'
    `,
  },
})
