import { DeepPartial } from '../utils/types'
import { DefaultThemeConfig } from './types'

export function createTheme(config: DeepPartial<DefaultThemeConfig>) {
  return config
}
