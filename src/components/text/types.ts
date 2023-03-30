import { Sizes, Weights } from '@types'
import { ForwardRefExoticComponent, HTMLAttributes, ReactNode } from 'react'

import { Display, Heading, Label, Paragraph, Title } from './Text'

export interface TextProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode
  size?: Sizes
  weight?: Weights
}

export interface BaseTextProps extends TextProps {
  tagName: string
  tagType: 'label' | 'paragraph' | 'title' | 'heading' | 'display'
}

export interface TextCompoundProps extends ForwardRefExoticComponent<TextProps> {
  Label: typeof Label
  Paragraph: typeof Paragraph
  Title: typeof Title
  Heading: typeof Heading
  Display: typeof Display
}
