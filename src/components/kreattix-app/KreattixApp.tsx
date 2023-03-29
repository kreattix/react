import _ from 'lodash'
import { FC, ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'

import { DeepPartial } from '../../types'
import GlobalStyle from './GlobalStyle'
import { defaultTheme } from './defaultTheme'
import { DefaultThemeConfig } from './types'

interface KreattixAppProps {
  children: ReactNode
  theme?: DeepPartial<DefaultThemeConfig>
}

const KreattixApp: FC<KreattixAppProps> = ({ children, theme }) => {
  return (
    <ThemeProvider theme={_.merge(defaultTheme, theme)}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}

export default KreattixApp
