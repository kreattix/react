import { createThemeConfig } from '..'
import { DeepPartial } from '../../utils/types'
import { DefaultThemeConfig } from '../types'

describe('check defineThemeConfig', () => {
  it('returns the input config', () => {
    const config: DeepPartial<DefaultThemeConfig> = {
      components: {
        typography: {
          paragraph: {
            fontSize: 20,
          },
        },
      },
    }
    const result = createThemeConfig(config)
    expect(result).toEqual(config)
  })
})
