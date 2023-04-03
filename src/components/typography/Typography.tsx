import * as React from 'react'

import { useComponent } from '../kreattix-app'
import StyledTypography from './StyledTypography'
import { TypographyProps, TypographySpanProps } from './types'

export const TypographySpan = React.forwardRef<
  HTMLSpanElement,
  TypographySpanProps & React.HTMLAttributes<HTMLSpanElement>
>((props, ref) => {
  const defaultProps = { ...useComponent().typography.span, ...props }
  return <StyledTypography ref={ref} as="span" variant="span" {...defaultProps} />
})
TypographySpan.displayName = 'TypographySpan'

export const TypographyLabel = React.forwardRef<
  HTMLLabelElement,
  TypographyProps & React.LabelHTMLAttributes<HTMLLabelElement>
>((props, ref) => {
  const defaultProps = { ...useComponent().typography.label, ...props }
  return <StyledTypography ref={ref} as="label" variant="label" {...defaultProps} />
})
TypographyLabel.displayName = 'TypographyLabel'

export const TypographyParagraph = React.forwardRef<
  HTMLParagraphElement,
  TypographyProps & React.HTMLAttributes<HTMLParagraphElement>
>((props, ref) => {
  const defaultProps = { ...useComponent().typography.paragraph, ...props }
  return <StyledTypography ref={ref} as="p" variant="paragraph" {...defaultProps} />
})
TypographyParagraph.displayName = 'TypographyParagraph'

export const TypographyTitle = React.forwardRef<
  HTMLHeadingElement,
  TypographyProps & React.HTMLAttributes<HTMLHeadingElement>
>((props, ref) => {
  const defaultProps = { ...useComponent().typography.title, ...props }
  return <StyledTypography ref={ref} as="h5" variant="title" {...defaultProps} />
})
TypographyTitle.displayName = 'TypographyTitle'

export const TypographyHeading = React.forwardRef<
  HTMLHeadingElement,
  TypographyProps & React.HTMLAttributes<HTMLHeadingElement>
>((props, ref) => {
  const defaultProps = { ...useComponent().typography.heading, ...props }
  return <StyledTypography ref={ref} as="h3" variant="heading" {...defaultProps} />
})
TypographyHeading.displayName = 'TypographyHeading'

export const TypographyDisplay = React.forwardRef<
  HTMLHeadingElement,
  TypographyProps & React.HTMLAttributes<HTMLHeadingElement>
>((props, ref) => {
  const defaultProps = { ...useComponent().typography.display, ...props }
  return <StyledTypography ref={ref} as="h1" variant="display" {...defaultProps} />
})
TypographyDisplay.displayName = 'TypographyDisplay'
