import { FC } from 'react'

import { getThemeConfig } from '../../utils'
import StyledTypography from './StyledTypography'
import { BaseTypographyProps, TypographyProps, TypographySpanProps } from './types'

const BaseTypography: FC<BaseTypographyProps> = (props) => {
  const { tagName } = getThemeConfig().components.typography[props.variant]
  return <StyledTypography as={tagName as never} {...props} />
}

export const TypographySpan: FC<TypographySpanProps> = (props) => {
  return <BaseTypography variant="span" {...props} />
}

export const TypographyLabel: FC<TypographyProps> = (props) => {
  return <BaseTypography variant="label" {...props} />
}

export const TypographyParagraph: FC<TypographyProps> = (props) => {
  return <BaseTypography variant="paragraph" {...props} />
}

export const TypographyTitle: FC<TypographyProps> = (props) => {
  return <BaseTypography variant="title" {...props} />
}

export const TypographyHeading: FC<TypographyProps> = (props) => {
  return <BaseTypography variant="heading" {...props} />
}

export const TypographyDisplay: FC<TypographyProps> = (props) => {
  return <BaseTypography variant="display" {...props} />
}
