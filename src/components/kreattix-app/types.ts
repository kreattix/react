import { ReactNode } from 'react'

import { DefaultThemeConfig, DividerProps, TypographyProps } from '../../types'
import { DeepPartial } from '../../utils/types'
import { TypographySpanProps } from '../typography/types'

export interface ComponentConfig {
  typography: {
    display?: Pick<TypographyProps, 'color' | 'ellipsis' | 'size' | 'weight'>
    heading?: Pick<TypographyProps, 'color' | 'ellipsis' | 'size' | 'weight'>
    label?: Pick<TypographyProps, 'color' | 'ellipsis' | 'size' | 'weight'>
    paragraph?: Pick<TypographyProps, 'color' | 'ellipsis' | 'size' | 'weight'>
    span?: Pick<TypographySpanProps, 'color' | 'weight'>
    title?: Pick<TypographyProps, 'color' | 'ellipsis' | 'size' | 'weight'>
  }
  divider: Pick<DividerProps, 'alignment' | 'color' | 'weight'>
}

export interface KreattixAppProps {
  children: ReactNode
  theme?: DeepPartial<DefaultThemeConfig>
  components?: DeepPartial<ComponentConfig>
}
