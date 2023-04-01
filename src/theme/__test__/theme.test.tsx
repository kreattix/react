import { createTheme } from '..'
import { DeepPartial } from '../../utils/types'
import { DefaultThemeConfig } from '../types'

describe('check defineThemeConfig', () => {
  it('returns the input config', () => {
    const config: DeepPartial<DefaultThemeConfig> = {
      components: {
        typography: {
          span: {
            tagName: 'span',
          },
        },
      },
    }
    const result = createTheme(config)
    expect(result).toEqual(config)
  })
})
