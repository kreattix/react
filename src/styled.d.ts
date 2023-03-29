import 'styled-components'

interface ThemeFontFamilies {
  base: string
}

interface ThemeFontWeights {
  light: number | string
  normal: number | string
  bold: number | string
}

interface ThemeTextStyles {
  fontSize: string
  lineHeight: string
}

interface ThemeTextSizes {
  small: ThemeTextStyles
  medium: ThemeTextStyles
  large: ThemeTextStyles
}

interface ThemeTextTypes {
  label: ThemeTextSizes
  paragraph: ThemeTextSizes
  title: ThemeTextSizes
  heading: ThemeTextSizes
  display: ThemeTextSizes
}

export interface DefaultThemeConfig {
  font: {
    fontFamily: ThemeFontFamilies
    weights: ThemeFontWeights
  }
  text: ThemeTextTypes
}

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends DefaultThemeConfig {}
}
