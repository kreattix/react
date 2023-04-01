import { TypographyStyles, TypographyVariantMapping } from '../components/typography/types'

export interface DefaultThemeConfig {
  global: {
    fontFamily: string
    fontSize: number
  }
  components: {
    typography: Record<keyof TypographyVariantMapping, TypographyStyles>
  }
}
