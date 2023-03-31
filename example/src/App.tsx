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
      <Text.Display ellipsis>
        Typography Label Text Typography Label Text Typography Label Text Typography Label Text
        Typography Label Text Typography Label Text Typography Label Text Typography Label Text
      </Text.Display>
      <Text.Heading ellipsis>
        Typography Label Text Typography Label Text Typography Label Text Typography Label Text
        Typography Label Text Typography Label Text Typography Label Text Typography Label Text
      </Text.Heading>
      <Text.Title ellipsis>
        Typography Label Text Typography Label Text Typography Label Text Typography Label Text
        Typography Label Text Typography Label Text Typography Label Text Typography Label Text
      </Text.Title>
      <Text.Paragraph ellipsis>
        Typography Label Text Typography Label Text Typography Label Text Typography Label Text
        Typography Label Text Typography Label Text Typography Label Text Typography Label Text
      </Text.Paragraph>
      <Text>
        Typography Label Text Typography Label Text Typography Label Text Typography Label Text
        Typography Label Text Typography Label Text Typography Label Text Typography Label Text
      </Text>

      <Text.Span>
        Typography Label Text Typography Label Text Typography Label Text Typography Label Text
        Typography Label Text Typography Label Text Typography Label Text Typography Label Text
      </Text.Span>
      <Text.Label ellipsis>
        Typography Label Text Typography Label Text Typography Label Text Typography Label Text
        Typography Label Text Typography Label Text Typography Label Text Typography Label Text
      </Text.Label>
    </KreattixApp>
  )
}

export default App
