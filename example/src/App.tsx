import { KreattixApp, Text, defineThemeConfig } from '@kreattix/react'

const theme = defineThemeConfig({
  font: {
    fontFamily: {
      base: 'Montserrat, sans-serif',
    },
  },
})

const App = () => {
  return (
    <KreattixApp theme={theme}>
      <Text>Typography Span Text</Text>
    </KreattixApp>
  )
}

export default App
