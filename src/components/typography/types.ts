import * as React from 'react'

import { PaletteItems } from '../../theme/types'
import { Sizes, Weights } from '../../utils/types'
import {
  TypographyDisplay,
  TypographyHeading,
  TypographyLabel,
  TypographyParagraph,
  TypographySpan,
  TypographyTitle,
} from './Typography'

export interface TypographyVariantMapping {
  span: string
  label: string
  paragraph: string
  title: string
  heading: string
  display: string
}

export interface TypographyStyles {
  fontFamily?: string
  fontSize?: number
  fontWeight?: Weights
  lineHeight?: number
  marginTop?: number
  marginBottom?: number
}

export interface TypographyProps {
  size?: Sizes
  weight?: Weights
  ellipsis?: boolean
  color?: PaletteItems
}

export type TypographySpanProps = Omit<TypographyProps, 'ellipsis' | 'size'>

export interface StyledTypographyProps extends TypographyProps {
  variant: keyof TypographyVariantMapping
}

export interface CompoundTypographyProps
  extends React.ForwardRefExoticComponent<
    TypographyProps &
      React.HTMLAttributes<HTMLParagraphElement> &
      React.RefAttributes<HTMLHeadingElement>
  > {
  Span: typeof TypographySpan
  Label: typeof TypographyLabel
  Paragraph: typeof TypographyParagraph
  Title: typeof TypographyTitle
  Heading: typeof TypographyHeading
  Display: typeof TypographyDisplay
}
