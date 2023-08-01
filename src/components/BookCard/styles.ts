import Image from 'next/image'

import { styled } from '../../styles/stitches.config'

export const Container = styled('div', {
  display: 'flex',
  gap: '$20',

  padding: '$20 $18',
  maxWidth: '$324',
  minwidth: 'min-content',

  background: '$gray-700',
  borderRadius: '$8',
})

export const Cover = styled(Image, {
  width: '$64',
  height: '$94',
  borderRadius: '$4',
})

export const BookDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
})

export const Title = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  p: {
    overflow: 'hidden',
    display: '-webkit-box',
    '-webkit-line-clamp': '2',
    '-webkit-box-orient': 'vertical',

    fontFamily: '$default',
    color: '$gray-100',
    fontSize: '$16',
    fontWeight: '$bold',
    lineHeight: '$140',
  },

  span: {
    fontFamily: '$default',
    color: '$gray-400',
    fontSize: '$14',
    lineHeight: '$160',
  },
})
