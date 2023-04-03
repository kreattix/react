import { render } from '@testing-library/react'

import { defaultComponentConfig } from '../../../configs'
import { ComponentConfig } from '../../../types'
import { KreattixApp } from '../KreattixApp'
import { createComponentConfig, useComponent } from '../Provider'

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

    expect(wrapper.container.textContent).toBe(JSON.stringify(defaultComponentConfig))
  })
})

describe('check createComponent', () => {
  it('should return the provided configuration', async () => {
    const config: ComponentConfig = {
      typography: {
        paragraph: {
          size: 'large',
        },
      },
    }

    expect(createComponentConfig(config)).toEqual(config)
  })
})
