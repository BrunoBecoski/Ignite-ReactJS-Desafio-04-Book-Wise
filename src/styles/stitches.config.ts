import { globalCss, createStitches } from '@stitches/react'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
})

export const { styled, getCssText } = createStitches({
  theme: {
    fonts: {
      default: 'Nunito, sans-serif',
    },

    sizes: {
      0: '0px', //       000px
      1: '1px', //       001px
      2: '0.125rem', //  002px
      4: '0.25rem', //   004px
      6: '0.375rem', //  006px
      8: '0.5rem', //    008px
      10: '0.625rem', // 010px
      12: '0.75rem', //  012px
      14: '0.875rem', // 014px
      16: '1rem', //     016px
      20: '1.25rem', //  020px
      24: '1.5rem', //   024px
      28: '1.75rem', //  028px
      32: '2rem', //     032px
      36: '2.25rem', //  036px
      40: '2.5rem', //   040px
      44: '2.75rem', //  044px
      48: '3rem', //     048px
      56: '3.5rem', //   056px
      64: '4rem', //     064px
      80: '5rem', //     080px
      96: '6rem', //     096px
      112: '7rem', //    112px
      128: '8rem', //    128px
      144: '9rem', //    144px
      160: '10rem', //   160px
      176: '11rem', //   176px
      192: '12rem', //   192px
      208: '13rem', //   208px
      224: '14rem', //   224px
      240: '15rem', //   240px
      256: '16rem', //   256px
      288: '18rem', //   288px
      320: '20rem', //   320px
      384: '24rem', //   384px
    },

    space: {
      0: '0px', //      00px
      1: '1px', //      01px
      4: '0.25rem', //  04px
      8: '0.5rem', //   08px
      12: '0.75rem', // 12px
      16: '1rem', //    16px
      20: '1.25rem', // 20px
      24: '1.5rem', //  24px
      28: '1.75rem', // 28px
      32: '2rem', //    32px
      40: '2.5rem', //  40px
      96: '6rem', //    96px
    },

    radii: {
      0: '0px', //       00px
      2: '0.125rem', //  02px
      4: '0.25rem', //   04px
      6: '0.375rem', //  06px
      8: '0.5rem', //    08px
      10: '0.625rem', // 10px
      12: '0.75rem', //  12px
      16: '1rem', //     16px
      24: '1.5rem', //   24px
      9999: '9999px',
    },

    fontSizes: {
      12: '0.75rem', //  12px
      14: '0.875rem', // 14px
      16: '1rem', //     16px
      18: '1.125rem', // 18px
      20: '1.25rem', //  20px
      24: '1.5rem', //   24px
    },

    fontWeights: {
      regular: '400',
      medium: '500',
      bold: '700',
    },

    lineHeights: {
      125: '125%',
      140: '140%',
      160: '160%',
      180: '180%',
    },

    transitions: {
      background: 'background .2s',
    },

    colors: {
      white: '#FFFFFF',
      black: '#000000',

      'green-100': '#50B2C0',
      'green-200': '#255D6A',
      'green-300': '#0A313C',

      'purple-100': '#8381D9',
      'purple-200': '#2A2879',

      'gray-100': '#F8F9FC',
      'gray-200': '#E6E8F2',
      'gray-300': '#D1D6E4',
      'gray-400': '#8D95AF',
      'gray-500': '#303F73',
      'gray-600': '#252D4A',
      'gray-700': '#181C2A',
      'gray-800': '#0E1116',

      'gradient-vertical': `linear-gradient(180deg, #7FD1CC 0%, #9694F5 100%)`,
      'gradient-horizontal': `linear-gradient(90deg, #7FD1CC 0%, #9694F5 100%)`,
    },
  },
})
