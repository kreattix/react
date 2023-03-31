import { Display, Heading, Label, Paragraph, Span, Title } from './Text'
import { TextCompoundProps } from './types'

export * from './types'
export const Text = Paragraph as TextCompoundProps
Text.Span = Span
Text.Paragraph = Paragraph
Text.Label = Label
Text.Title = Title
Text.Heading = Heading
Text.Display = Display
