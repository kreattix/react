import { Display, Heading, Label, Paragraph, Span, Title } from '@components/text/Text'
import { TextCompoundProps } from '@components/text/types'

export const Text = Span as TextCompoundProps
Text.Paragraph = Paragraph
Text.Label = Label
Text.Title = Title
Text.Heading = Heading
Text.Display = Display
