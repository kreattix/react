import { DefaultTheme } from 'styled-components'

export const defaultTheme: DefaultTheme = {
  font: {
    fontFamily: {
      base: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif`,
    },
    weights: {
      light: 300,
      normal: 400,
      bold: 600,
    },
  },
  text: {
    label: {
      small: {
        fontSize: '10px',
        lineHeight: '16px',
      },
      medium: {
        fontSize: '12px',
        lineHeight: '16px',
      },
      large: {
        fontSize: '14px',
        lineHeight: '20px',
      },
    },
    paragraph: {
      small: {
        fontSize: '12px',
        lineHeight: '16px',
      },
      medium: {
        fontSize: '14px',
        lineHeight: '20px',
      },
      large: {
        fontSize: '16px',
        lineHeight: '24px',
      },
    },
    title: {
      small: {
        fontSize: '16px',
        lineHeight: '24px',
      },
      medium: {
        fontSize: '20px',
        lineHeight: '24px',
      },
      large: {
        fontSize: '22px',
        lineHeight: '28px',
      },
    },
    heading: {
      small: {
        fontSize: '24px',
        lineHeight: '32px',
      },
      medium: {
        fontSize: '28px',
        lineHeight: '36px',
      },
      large: {
        fontSize: '32px',
        lineHeight: '40px',
      },
    },
    display: {
      small: {
        fontSize: '36px',
        lineHeight: '44px',
      },
      medium: {
        fontSize: '45px',
        lineHeight: '52px',
      },
      large: {
        fontSize: '57px',
        lineHeight: '64px',
      },
    },
  },
}
