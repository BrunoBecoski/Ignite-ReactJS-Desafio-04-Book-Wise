import { globalCss, createStitches } from '@stitches/react'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
})

export const { styled, getCssText } = createStitches({
  media: {
    sm: '(max-width: 480px)',
    md: '(max-width: 768px)',
    lg: '(max-width: 976px)',
    xl: '(max-width: 1200px)',
    xxl: '(max-width: 1440px)',
  },

  theme: {
    sizes: {
      0: '0px', //          0px
      1: '1px', //          1px
      2: '0.125rem', //     2px
      3: '0.1875rem', //    3px
      4: '0.25rem', //      4px
      6: '0.375rem', //     6px
      8: '0.5rem', //       8px
      10: '0.625rem', //   10px
      12: '0.75rem', //    12px
      14: '0.875rem', //   14px
      16: '1rem', //       16px
      20: '1.25rem', //    20px
      24: '1.5rem', //     24px
      28: '1.75rem', //    28px
      32: '2rem', //       32px
      36: '2.25rem', //    36px
      40: '2.5rem', //     40px
      44: '2.75rem', //    44px
      48: '3rem', //       48px
      56: '3.5rem', //     56px
      64: '4rem', //       64px
      80: '5rem', //       80px
      94: '5.875rem', //   64px
      96: '6rem', //       96px
      108: '6.75rem', //  108px
      112: '7rem', //     112px
      128: '8rem', //     128px
      144: '9rem', //     144px
      152: '9.5rem', //   152px
      160: '10rem', //    160px
      176: '11rem', //    176px
      192: '12rem', //    192px
      208: '13rem', //    208px
      224: '14rem', //    224px
      232: '14.5rem', //  232px
      240: '15rem', //    240px
      256: '16rem', //    256px
      288: '18rem', //    288px
      320: '20rem', //    320px
      324: '20.25rem', // 324px
      384: '24rem', //    384px
      608: '32rem', //    608px
    },

    space: {
      0: '0px', //         0px
      1: '1px', //         1px
      4: '0.25rem', //     4px
      8: '0.5rem', //      8px
      12: '0.75rem', //   12px
      16: '1rem', //      16px
      18: '1.125rem', //  18px
      20: '1.25rem', //   20px
      24: '1.5rem', //    24px
      28: '1.75rem', //   28px
      32: '2rem', //      32px
      40: '2.5rem', //    40px
      44: '2.75rem', //   44px
      48: '3rem', //      48px
      52: '3.25rem', //   52px
      56: '3.5rem', //    56px
      64: '4rem', //      64px
      76: '4.75rem', //   76px
      80: '5rem', //      80px
      96: '6rem', //      96px
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
      328: '20.5rem', // 328px
      384: '24rem', //   384px
    },

    radii: {
      0: '0px', //        0px
      2: '0.125rem', //   2px
      4: '0.25rem', //    4px
      6: '0.375rem', //   6px
      8: '0.5rem', //     8px
      10: '0.625rem', // 10px
      12: '0.75rem', //  12px
      16: '1rem', //     16px
      24: '1.5rem', //   24px
      9999: '9999px',
    },

    fontSizes: {
      12: '0.75rem', //   12px
      14: '0.875rem', //  14px
      16: '1rem', //      16px
      18: '1.125rem', //  18px
      20: '1.25rem', //   20px
      24: '1.5rem', //    24px
      30: '1.875rem', //  30px
      36: '2.25rem', //   36px
      48: '3rem', //      48px
      60: '3.75rem', //   60px
      72: '4.5rem', //    72px
      96: '6rem', //      96px
      128: '8rem', //    128px
    },

    fonts: {
      default: 'Nunito, sans-serif',
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
      color: 'color .2s',
      fill: 'fill .2s',
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
      overlay: '#00000099',
    },
  },
})
