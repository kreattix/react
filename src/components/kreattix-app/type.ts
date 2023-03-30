import { DeepPartial, DefaultThemeConfig, TextProps } from '@app/types'
import { ReactNode } from 'react'

export interface KreattixAppProps {
  children: ReactNode
  theme?: DeepPartial<DefaultThemeConfig>
}

export interface KreattixConfig {
  text: Pick<TextProps, 'weight' | 'size'>
}
