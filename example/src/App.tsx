import { Divider, KreattixApp, Typography, createComponentConfig } from '@kreattix/react'

const componentConfig = createComponentConfig({
  divider: {
    weight: 'bold',
  },
  typography: {
    display: {
      ellipsis: true,
      weight: 'bold',
    },
  },
})

const App = () => {
  return (
    <KreattixApp components={componentConfig}>
      <Typography.Display>Display Typography Text</Typography.Display>
      <Divider alignment="left">Divider Text</Divider>
      <Typography.Display>Display Typography Text</Typography.Display>
    </KreattixApp>
  )
}

export default App
