import { DeepPartial } from '../../types'
import { defineThemeConfig } from '../theme'
import { DefaultThemeConfig } from '../types'

describe('check defineThemeConfig', () => {
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
