import { render } from '../../../setupTests'
import { Display, Heading, Label, Paragraph, Span, Title } from '../Text'

describe('check Text components', () => {
  describe('check Span', () => {
    it('renders children', () => {
      const { getByText } = render(<Span>test</Span>)
      expect(getByText('test')).toBeInTheDocument()
    })
  })

  describe('check Label', () => {
    it('renders children', () => {
      const { getByText } = render(<Label>test</Label>)
      expect(getByText('test')).toBeInTheDocument()
    })
  })

  describe('check Paragraph', () => {
    it('renders children', () => {
      const { getByText } = render(<Paragraph>test</Paragraph>)
      expect(getByText('test')).toBeInTheDocument()
    })
  })

  describe('check Title', () => {
    it('renders children', () => {
      const { getByText } = render(<Title>test</Title>)
      expect(getByText('test')).toBeInTheDocument()
    })
  })

  describe('check Heading', () => {
    it('renders children', () => {
      const { getByText } = render(<Heading>test</Heading>)
      expect(getByText('test')).toBeInTheDocument()
    })
  })

  describe('check Display', () => {
    it('renders children', () => {
      const { getByText } = render(<Display>test</Display>)
      expect(getByText('test')).toBeInTheDocument()
    })
  })
})
