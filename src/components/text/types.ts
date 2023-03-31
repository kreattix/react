import { ForwardRefExoticComponent, HTMLAttributes, ReactNode } from 'react'

import { Sizes, Weights } from '../../types'
import { Display, Heading, Label, Paragraph, Span, Title } from './Text'

export interface TextProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode
  size?: Sizes
  weight?: Weights
  ellipsis?: boolean
}

export type TextSpanProps = Omit<TextProps, 'ellipsis' | 'size'>

export type TextTagTypes = 'label' | 'paragraph' | 'title' | 'heading' | 'display'

export interface BaseTextProps extends TextProps {
  tagName: string
  tagType: TextTagTypes
  isSpan?: boolean
}

export interface TextCompoundProps extends ForwardRefExoticComponent<TextProps> {
  Span: typeof Span
  Label: typeof Label
  Paragraph: typeof Paragraph
  Title: typeof Title
  Heading: typeof Heading
  Display: typeof Display
}
