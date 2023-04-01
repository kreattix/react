import { createGlobalStyle, css } from 'styled-components'

import { addSizeRatioWithPixel } from '../../utils'

export const GlobalStyle = createGlobalStyle(({ theme }) => {
  const { global } = theme

  return css`
    :root {
      font-family: ${global.fontFamily};
      font-size: ${addSizeRatioWithPixel(global.fontSize)};
    }
  `
})
