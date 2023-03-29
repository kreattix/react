import { Display, Heading, Label, Paragraph, Span, Title } from './Text'
import { TextCompoundProps } from './types'

const Text = Span as TextCompoundProps
Text.Paragraph = Paragraph
Text.Label = Label
Text.Title = Title
Text.Heading = Heading
Text.Display = Display

export default Text
