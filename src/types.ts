import { ComponentConfig as _ComponentConfig } from './components/kreattix-app/types'
import { DefaultThemeConfig as _DefaultThemeConfig } from './theme/types'
import { DeepPartial } from './utils/types'

export type DefaultThemeConfig = DeepPartial<_DefaultThemeConfig>
export type ComponentConfig = DeepPartial<_ComponentConfig>

export type { KreattixAppProps } from './components/kreattix-app/types'
export type { TypographyProps } from './components/typography/types'
export type { DividerAlignments, DividerProps } from './components/divider/types'
