import * as React from 'react'

import { getThemeConfig } from '../../utils/functions'
import StyledTypography from './StyledTypography'
import { BaseTypographyProps, TypographyProps, TypographySpanProps } from './types'

const BaseTypography: React.FC<BaseTypographyProps> = (props) => {
  const { tagName } = getThemeConfig().components.typography[props.variant]
  return <StyledTypography as={tagName as never} {...props} />
}

export const TypographySpan: React.FC<
  TypographySpanProps & React.HTMLAttributes<HTMLSpanElement>
> = (props) => {
  return <BaseTypography variant="span" {...props} />
}

export const TypographyLabel: React.FC<
  TypographyProps & React.LabelHTMLAttributes<HTMLLabelElement>
> = (props) => {
  return <BaseTypography variant="label" {...props} />
}

export const TypographyParagraph: React.FC<
  TypographyProps & React.HTMLAttributes<HTMLParagraphElement>
> = (props) => {
  return <BaseTypography variant="paragraph" {...props} />
}

export const TypographyTitle: React.FC<
  TypographyProps & React.HTMLAttributes<HTMLHeadingElement>
> = (props) => {
  return <BaseTypography variant="title" {...props} />
}

export const TypographyHeading: React.FC<
  TypographyProps & React.HTMLAttributes<HTMLHeadingElement>
> = (props) => {
  return <BaseTypography variant="heading" {...props} />
}

export const TypographyDisplay: React.FC<
  TypographyProps & React.HTMLAttributes<HTMLHeadingElement>
> = (props) => {
  return <BaseTypography variant="display" {...props} />
}
