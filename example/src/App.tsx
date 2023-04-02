import { KreattixApp, Typography, createTheme } from '@kreattix/react'
import { useRef } from 'react'

const theme = createTheme({
  global: {
    fontSize: 14,
  },
})

const App = () => {
  const textRef = useRef<HTMLLabelElement>(null)

  return (
    <KreattixApp theme={theme}>
      <Typography.Label ref={textRef} color="primary">
        Label Typography Text Make it long
      </Typography.Label>
      <Typography color="primary">Default Typography Text</Typography>
      <Typography.Span color="secondary">Span Typography Text</Typography.Span>
      <Typography.Paragraph color="primary">Paragraph Typography Text</Typography.Paragraph>
      <Typography.Title color="primary">Title Typography Text</Typography.Title>
      <Typography.Heading color="primary">Heading Typography Text</Typography.Heading>
      <Typography.Display color="primary">Display Typography Text</Typography.Display>
    </KreattixApp>
  )
}

export default App
