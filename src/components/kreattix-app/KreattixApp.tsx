import _ from 'lodash'
import { FC } from 'react'
import { ThemeProvider } from 'styled-components'

import { defaultComponentConfig } from '../../configs'
import { getThemeConfig } from '../../utils'
import { GlobalStyle } from './GlobalStyle'
import { Provider } from './Provider'
import { KreattixAppProps } from './types'

export const KreattixApp: FC<KreattixAppProps> = ({ children, theme = {}, components = {} }) => {
  return (
    <Provider value={_.merge(defaultComponentConfig, components)}>
      <ThemeProvider theme={_.merge(getThemeConfig(), theme)}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </Provider>
  )
}
