import { FC } from 'react'

import StyledText from './StyledText'
import { BaseTextProps, TextProps, TextSpanProps } from './types'

const BaseText: FC<BaseTextProps> = ({ tagName, ...rest }) => {
  return <StyledText as={tagName as never} tagName={tagName} {...rest} />
}

export const Span: FC<TextSpanProps> = (props) => {
  return <BaseText tagName={'span'} tagType="paragraph" isSpan {...props} />
}

export const Label: FC<TextProps> = (props) => {
  return <BaseText tagName={'label'} tagType="label" {...props} />
}

export const Paragraph: FC<TextProps> = (props) => {
  return <BaseText tagName={'p'} tagType="paragraph" {...props} />
}

export const Title: FC<TextProps> = (props) => {
  return <BaseText tagName={'h5'} tagType="title" {...props} />
}

export const Heading: FC<TextProps> = (props) => {
  return <BaseText tagName={'h3'} tagType="heading" {...props} />
}

export const Display: FC<TextProps> = (props) => {
  return <BaseText tagName={'h1'} tagType="display" {...props} />
}
