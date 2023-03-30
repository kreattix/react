import { createGlobalStyle, css } from 'styled-components'

const GlobalStyle = createGlobalStyle(({ theme }) => {
  return css`
    ${theme.uses ? theme.uses.map((url) => `@import(${url})`) : ''}
    body {
      font-family: ${theme.font.fontFamily.base};
    }
  `
})

export default GlobalStyle
