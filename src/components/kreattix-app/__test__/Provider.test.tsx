import { render } from '@testing-library/react'

import { defaultAppConfig } from '../../../configs'
import { KreattixApp } from '../KreattixApp'
import { createComponent, useComponent } from '../Provider'
import { ComponentConfig } from '../types'

describe('check Kreattix Context', () => {
  it('should provide default app config', async () => {
    const Component = () => {
      const config = useComponent()
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

describe('check createComponent', () => {
  it('should return the provided configuration', async () => {
    const config: ComponentConfig = {
      typography: {
        size: 'medium',
      },
    }

    expect(createComponent(config)).toEqual(config)
  })
})
