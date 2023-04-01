import { DefaultThemeConfig } from '../types'

export const defaultThemeConfig: DefaultThemeConfig = {
  global: {
    fontSize: 14,
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Montserrat',
      'Roboto',
      'Oxygen',
      'Ubuntu',
      'Cantarell',
      'Open Sans',
      'Helvetica Neue',
      'sans-serif',
    ].join(','),
  },
  components: {
    typography: {
      display: {
        tagName: 'h1',
        fontSize: 45,
        lineHeight: 56,
      },
      heading: {
        tagName: 'h3',
        fontSize: 28,
        lineHeight: 36,
      },
      title: {
        tagName: 'h5',
        fontSize: 20,
        lineHeight: 28,
      },
      paragraph: {
        tagName: 'p',
        fontSize: 14,
        lineHeight: 20,
      },
      label: {
        tagName: 'label',
        fontSize: 12,
        lineHeight: 16,
      },
      span: {
        tagName: 'span',
      },
    },
  },
}
