import { Colors } from '@kreattix/colors'

import { DefaultThemeConfig } from '../types'

export const defaultThemeConfig: DefaultThemeConfig = {
  global: {
    fontSize: 16,
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
  palette: {
    primary: {
      main: Colors.blue[500],
      light: Colors.blue[400],
      dark: Colors.blue[600],
      contrastTextColor: Colors.white,
    },
    secondary: {
      main: Colors.purple[500],
      light: Colors.purple[400],
      dark: Colors.purple[600],
      contrastTextColor: Colors.white,
    },
  },
  components: {
    typography: {
      display: {
        tagName: 'h1',
        fontSize: 45,
        lineHeight: 56,
        fontWeight: 'normal',
      },
      heading: {
        tagName: 'h3',
        fontSize: 28,
        lineHeight: 36,
        fontWeight: 'normal',
      },
      title: {
        tagName: 'h5',
        fontSize: 20,
        lineHeight: 28,
        fontWeight: 'normal',
      },
      paragraph: {
        tagName: 'p',
        fontSize: 16,
        lineHeight: 20,
      },
      label: {
        tagName: 'label',
        fontSize: 14,
        lineHeight: 16,
      },
      span: {
        tagName: 'span',
      },
    },
  },
}
