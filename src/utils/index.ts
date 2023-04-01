import { useTheme } from 'styled-components'

import { defaultThemeConfig } from '../configs'
import { Sizes } from './types'

export function addSizeRatioWithPixel(
  value: number | null | undefined,
  size: Sizes = 'medium',
  ratio = 0,
) {
  const sizeRadio = (size === 'medium' ? 0 : ratio) * (size === 'small' ? -1 : 1)
  return value && value !== 0 ? value + sizeRadio + 'px' : value
}

export function getThemeConfig() {
  return useTheme() ?? defaultThemeConfig
}
