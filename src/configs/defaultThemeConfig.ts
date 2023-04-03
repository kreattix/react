import { Colors } from '@kreattix/colors'

import { DefaultThemeConfig } from '../types'

export const defaultThemeConfig: DefaultThemeConfig = {
  components: {
    typography: {
      display: {
        fontSize: 45,
        fontWeight: 'normal',
        lineHeight: 56,
      },
      heading: {
        fontSize: 28,
        fontWeight: 'normal',
        lineHeight: 36,
      },
      label: {
        fontSize: 14,
        lineHeight: 16,
      },
      paragraph: {
        fontSize: 16,
        lineHeight: 20,
      },
      span: {},
      title: {
        fontSize: 20,
        fontWeight: 'normal',
        lineHeight: 28,
      },
    },
  },
  global: {
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
    fontSize: 16,
  },
  palette: {
    primary: {
      contrastTextColor: Colors.white,
      dark: Colors.blue[600],
      light: Colors.blue[400],
      main: Colors.blue[500],
    },
    secondary: {
      contrastTextColor: Colors.white,
      dark: Colors.purple[600],
      light: Colors.purple[400],
      main: Colors.purple[500],
    },
  },
}
