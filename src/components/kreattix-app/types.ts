import { TextProps } from 'components/text/types'
import { ReactNode } from 'react'
import { DefaultThemeConfig } from 'theme/types'
import { DeepPartial } from 'utils/types'

export interface KreattixAppProps {
  children: ReactNode
  theme?: DeepPartial<DefaultThemeConfig>
  appConfig?: KreattixConfig
}

export interface KreattixConfig {
  text?: Pick<TextProps, 'weight' | 'size'>
}
