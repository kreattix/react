import { KreattixApp, Typography, createTheme } from '@kreattix/react'

const theme = createTheme({
  global: {
    fontSize: 14,
  },
})

const App = () => {
  return (
    <KreattixApp theme={theme}>
      <Typography.Label ellipsis>Label Typography Text Make it long</Typography.Label>
      <Typography ellipsis>Default Typography Text</Typography>
      <Typography.Span>Span Typography Text</Typography.Span>
      <Typography.Paragraph ellipsis>Paragraph Typography Text</Typography.Paragraph>
      <Typography.Title ellipsis>Title Typography Text</Typography.Title>
      <Typography.Heading ellipsis>Heading Typography Text</Typography.Heading>
      <Typography.Display ellipsis size="small">
        Display Typography Text
      </Typography.Display>
    </KreattixApp>
  )
}

export default App
