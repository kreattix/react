import { DefaultThemeConfig } from '@app/types'
import 'styled-components'

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends DefaultThemeConfig {}
}
