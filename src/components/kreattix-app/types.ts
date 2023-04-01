import { ReactNode } from 'react'

import { DefaultThemeConfig, TypographyProps } from '../../types'
import { DeepPartial } from '../../utils/types'

export interface ComponentConfig {
  typography?: Pick<TypographyProps, 'weight' | 'size'>
}

export interface KreattixAppProps {
  children: ReactNode
  theme?: DeepPartial<DefaultThemeConfig>
  components?: ComponentConfig
}
