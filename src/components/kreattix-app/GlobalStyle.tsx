import { createGlobalStyle, css } from 'styled-components'

const GlobalStyle = createGlobalStyle(({ theme }) => {
  return css`
    body {
      font-family: ${theme.font.fontFamily.base};
    }
  `
})

export default GlobalStyle
