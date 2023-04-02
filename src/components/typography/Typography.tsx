import * as React from 'react'

import StyledTypography from './StyledTypography'
import { TypographyProps, TypographySpanProps } from './types'

export const TypographySpan = React.forwardRef<
  HTMLSpanElement,
  TypographySpanProps & React.HTMLAttributes<HTMLSpanElement>
>((props, ref) => {
  return <StyledTypography ref={ref} as="span" variant="span" {...props} />
})
TypographySpan.displayName = 'TypographySpan'

export const TypographyLabel = React.forwardRef<
  HTMLLabelElement,
  TypographyProps & React.LabelHTMLAttributes<HTMLLabelElement>
>((props, ref) => {
  return <StyledTypography ref={ref} as="label" variant="label" {...props} />
})
TypographyLabel.displayName = 'TypographyLabel'

export const TypographyParagraph = React.forwardRef<
  HTMLParagraphElement,
  TypographyProps & React.HTMLAttributes<HTMLParagraphElement>
>((props, ref) => {
  return <StyledTypography ref={ref} as="p" variant="paragraph" {...props} />
})
TypographyParagraph.displayName = 'TypographyParagraph'

export const TypographyTitle = React.forwardRef<
  HTMLHeadingElement,
  TypographyProps & React.HTMLAttributes<HTMLHeadingElement>
>((props, ref) => {
  return <StyledTypography ref={ref} as="h5" variant="title" {...props} />
})
TypographyTitle.displayName = 'TypographyTitle'

export const TypographyHeading = React.forwardRef<
  HTMLHeadingElement,
  TypographyProps & React.HTMLAttributes<HTMLHeadingElement>
>((props, ref) => {
  return <StyledTypography ref={ref} as="h3" variant="heading" {...props} />
})
TypographyHeading.displayName = 'TypographyHeading'

export const TypographyDisplay = React.forwardRef<
  HTMLHeadingElement,
  TypographyProps & React.HTMLAttributes<HTMLHeadingElement>
>((props, ref) => {
  return <StyledTypography ref={ref} as="h1" variant="display" {...props} />
})
TypographyDisplay.displayName = 'TypographyDisplay'
