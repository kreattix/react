import { createGlobalStyle, css } from 'styled-components'

import { appendPixels } from '../../utils/functions'

export const GlobalStyle = createGlobalStyle(({ theme }) => {
  const { global } = theme

  return css`
    :root {
      font-family: ${global.fontFamily};
      font-size: ${appendPixels(global.fontSize)};
    }
  `
})
