import { defaultTheme } from '@app/theme'
import { KreattixAppProps } from '@app/types'
import GlobalStyle from '@components/kreattix-app/GlobalStyle'
import _ from 'lodash'
import { FC } from 'react'
import { ThemeProvider } from 'styled-components'

const KreattixApp: FC<KreattixAppProps> = ({ children, theme }) => {
  return (
    <ThemeProvider theme={_.merge(defaultTheme, theme)}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}

export default KreattixApp
