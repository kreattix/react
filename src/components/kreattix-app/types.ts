import { DeepPartial, DefaultThemeConfig, TextProps } from '@types'
import { ReactNode } from 'react'

export interface KreattixAppProps {
  children: ReactNode
  theme?: DeepPartial<DefaultThemeConfig>
  appConfig?: KreattixConfig
}

export interface KreattixConfig {
  text?: Pick<TextProps, 'weight' | 'size'>
}
