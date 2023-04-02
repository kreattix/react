import { useTheme } from 'styled-components'

import { defaultThemeConfig } from '../configs'
import { Sizes } from './types'

export function getThemeConfig() {
  return useTheme() ?? defaultThemeConfig
}

export function appendPixels(value: number | null | undefined) {
  return value ? value + 'px' : value
}

export function getSizedPixels(value?: number, size?: Sizes) {
  if (!value) return value
  const amount = Math.ceil(value / 20)
  const nearestEvenNumber = (amount > 1 ? 2 * Math.ceil(amount / 2) : amount) * 2
  if (size === 'large') return appendPixels(value + nearestEvenNumber)
  if (size === 'small') return appendPixels(value - nearestEvenNumber)
  return appendPixels(value)
}
