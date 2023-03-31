import { defaultAppConfig } from '../../../configs'
import { render } from '../../../setupTests'
import KreattixApp from '../KreattixApp'
import { Provider, defineAppConfig, useKreattix } from '../Provider'
import { KreattixConfig } from '../types'

describe('check Kreattix Context', () => {
  it('should render without error', async () => {
    const Component = () => <div>Test</div>

    const wrapper = render(
      <Provider value={{}}>
        <Component />
      </Provider>,
    )

    expect(wrapper.container.firstChild).toBeInTheDocument()
  })
  it('should provide default app config', async () => {
    const Component = () => {
      const config = useKreattix()
      return <div>{JSON.stringify(config)}</div>
    }

    const wrapper = render(
      <KreattixApp>
        <Component />
      </KreattixApp>,
    )

    expect(wrapper.container.textContent).toBe(JSON.stringify(defaultAppConfig))
  })
})

describe('defineAppConfig', () => {
  it('should return the provided configuration', async () => {
    const config: KreattixConfig = {
      text: {
        size: 'medium',
      },
    }

    expect(defineAppConfig(config)).toEqual(config)
  })
})
