import { ReactNode } from 'react'

import { DefaultThemeConfig } from '../../theme'
import { DeepPartial } from '../../types'
import { TextProps } from '../text'

export interface KreattixAppProps {
  children: ReactNode
  theme?: DeepPartial<DefaultThemeConfig>
  appConfig?: KreattixConfig
}

export interface KreattixConfig {
  text?: Pick<TextProps, 'weight' | 'size'>
}
