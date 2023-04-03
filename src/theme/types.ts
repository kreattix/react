import { DividerStyles } from '../components/divider/types'
import { TypographyStyles, TypographyVariantMapping } from '../components/typography/types'

export interface PaletteValues {
  main: string
  light: string
  dark: string
  contrastTextColor: string
}

export type PaletteItems = 'primary' | 'secondary'

export interface DefaultThemeConfig {
  global: {
    color: string
    fontFamily: string
    fontSize: number
    spacing: number
  }
  palette: Record<PaletteItems, PaletteValues>
  components: {
    typography: Record<keyof TypographyVariantMapping, TypographyStyles>
    divider: DividerStyles
  }
}
