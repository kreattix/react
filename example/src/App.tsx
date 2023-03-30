import { KreattixApp, Text, configureTheme } from '@kreattix/react'

const theme = configureTheme({
  uses: ['https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap'],
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
