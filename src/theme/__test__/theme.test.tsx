import { configureTheme } from '@app/theme'
import { DeepPartial, DefaultThemeConfig } from '@app/types'

describe('configureTheme', () => {
  it('returns the input config', () => {
    const config: DeepPartial<DefaultThemeConfig> = {
      font: {
        fontFamily: {
          base: 'Arial',
        },
      },
    }
    const result = configureTheme(config)
    expect(result).toEqual(config)
  })
})
