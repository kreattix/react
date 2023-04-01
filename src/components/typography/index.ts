import {
  TypographyDisplay,
  TypographyHeading,
  TypographyLabel,
  TypographyParagraph,
  TypographySpan,
  TypographyTitle,
} from './Typography'
import { CompoundTypographyProps } from './types'

export const Typography = TypographyParagraph as CompoundTypographyProps
Typography.Span = TypographySpan
Typography.Label = TypographyLabel
Typography.Paragraph = TypographyParagraph
Typography.Title = TypographyTitle
Typography.Heading = TypographyHeading
Typography.Display = TypographyDisplay
