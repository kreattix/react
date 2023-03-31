import _ from 'lodash'
import { FC } from 'react'
import { ThemeProvider } from 'styled-components'

import { defaultAppConfig, defaultThemeConfig } from '../../configs'
import { GlobalStyle } from './GlobalStyle'
import { Provider } from './Provider'
import { KreattixAppProps } from './types'

const KreattixApp: FC<KreattixAppProps> = ({ children, theme = {}, appConfig = {} }) => {
  return (
    <Provider value={_.merge(defaultAppConfig, appConfig)}>
      <ThemeProvider theme={_.merge(defaultThemeConfig, theme)}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </Provider>
  )
}

export default KreattixApp
