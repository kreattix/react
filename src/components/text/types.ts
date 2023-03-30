import { Sizes, Weights } from '@app/types'
import { Display, Heading, Label, Paragraph, Title } from '@components/text/Text'
import { ForwardRefExoticComponent, HTMLAttributes, ReactNode } from 'react'

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
