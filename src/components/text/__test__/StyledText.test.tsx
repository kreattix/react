import StyledText from '@components/text/StyledText'
import { render } from '@jest-setup'

describe('StyledText', () => {
  it('renders without error', () => {
    const { getByTestId } = render(
      <StyledText
        data-testid="styled-text-test"
        as={'span'}
        tagName={'span'}
        tagType="paragraph"
      />,
    )
    expect(getByTestId('styled-text-test')).toBeInTheDocument()
  })

  it('applies correct styles based on props', () => {
    const { getByTestId } = render(
      <StyledText
        data-testid="styled-text-test"
        as={'h3'}
        tagName={'h3'}
        tagType="heading"
        size="large"
        weight="bold"
      >
        Hello World!
      </StyledText>,
    )

    const styledText = getByTestId('styled-text-test')
    expect(styledText).toHaveStyle(`
      font-size: 32px;
      line-height: 40px;
      font-weight: 600;
    `)
  })
})
