import { DeepPartial, DefaultThemeConfig } from '@types'

import { defineThemeConfig } from '../theme'

describe('configureTheme', () => {
  it('returns the input config', () => {
    const config: DeepPartial<DefaultThemeConfig> = {
      font: {
        fontFamily: {
          base: 'Arial',
        },
      },
    }
    const result = defineThemeConfig(config)
    expect(result).toEqual(config)
  })
})
