import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle(({ theme }) => {
  return css`
    body {
      font-family: ${theme.font.fontFamily.base};
      font-size: ${theme.text.paragraph.medium.fontSize};
    }
  `
})
