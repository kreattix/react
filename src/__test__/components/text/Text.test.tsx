import { render } from '@app/setupTests'
import { Display, Heading, Label, Paragraph, Span, Title } from '@components/text/Text'

describe('components', () => {
  describe('Span', () => {
    it('renders children', () => {
      const { getByText } = render(<Span>test</Span>)
      expect(getByText('test')).toBeInTheDocument()
    })
  })

  describe('Label', () => {
    it('renders children', () => {
      const { getByText } = render(<Label>test</Label>)
      expect(getByText('test')).toBeInTheDocument()
    })
  })

  describe('Paragraph', () => {
    it('renders children', () => {
      const { getByText } = render(<Paragraph>test</Paragraph>)
      expect(getByText('test')).toBeInTheDocument()
    })
  })

  describe('Title', () => {
    it('renders children', () => {
      const { getByText } = render(<Title>test</Title>)
      expect(getByText('test')).toBeInTheDocument()
    })
  })

  describe('Heading', () => {
    it('renders children', () => {
      const { getByText } = render(<Heading>test</Heading>)
      expect(getByText('test')).toBeInTheDocument()
    })
  })

  describe('Display', () => {
    it('renders children', () => {
      const { getByText } = render(<Display>test</Display>)
      expect(getByText('test')).toBeInTheDocument()
    })
  })
})
