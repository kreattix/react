import _ from 'lodash'
import { FC, ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'

import { DefaultThemeConfig } from '../../styled'
import GlobalStyle from './GlobalStyle'
import { defaultTheme } from './defaultTheme'

interface KreattixAppProps {
  children: ReactNode
  theme: DefaultThemeConfig
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
