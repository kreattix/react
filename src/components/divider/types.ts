import { PaletteItems } from '../../theme/types'
import { Weights } from '../../utils/types'

export type DividerAlignments = 'center' | 'left' | 'right' | 'sharp-left' | 'sharp-right'

export interface DividerProps {
  alignment?: DividerAlignments
  color?: PaletteItems
  weight?: Weights
}

export interface DividerStyles {
  borderColor: string
  color?: string
  borderWidth: number
  fontWeight?: Weights
  marginTop?: number
  marginBottom?: number
}
