import { KreattixApp, Text, configureTheme } from '@kreattix/react'

const theme = configureTheme({
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
