import { render } from '../../../setupTests'
import StyledText from '../StyledText'
import { TextTagTypes } from '../types'

describe('check StyledText Component', () => {
  const text = 'Hello World!'
  it('should apply styles based on tagType prop', () => {
    const { getByTestId } = render(
      <StyledText
        data-testid="text-component"
        as={'span'}
        tagName={'span'}
        tagType="paragraph"
        weight="bold"
      >
        {text}
      </StyledText>,
    )
    const styledText = getByTestId('text-component')
    expect(styledText).toHaveStyle(`
      font-size: 14px;
      font-weight: 600;
      line-height: 20px;
      margin-top: 0px;
      margin-bottom: 9px;
    `)
  })

  it('should apply styles with ellipses', () => {
    const { getByTestId } = render(
      <StyledText data-testid="text-component" as={'p'} tagName={'p'} tagType="paragraph" ellipsis>
        {text}
      </StyledText>,
    )
    const styledText = getByTestId('text-component')
    expect(styledText).toHaveStyle(`
      font-size: 14px;
      line-height: 20px;
      margin-top: 0px;
      margin-bottom: 9px;
    `)
  })

  it('should apply styles with ellipses for label', () => {
    const { getByTestId } = render(
      <StyledText
        data-testid="text-component"
        as={'label'}
        tagName={'label'}
        tagType="label"
        ellipsis
      >
        {text}
      </StyledText>,
    )
    const styledText = getByTestId('text-component')
    expect(styledText).toHaveStyle(`
      font-size: 12px;
      line-height: 16px;
      margin-top: 0px;
      margin-bottom: 4px;
    `)
  })

  it('should apply styles for span', () => {
    const { getByTestId } = render(
      <StyledText
        data-testid="text-component"
        as={'span'}
        tagName={'span'}
        tagType="paragraph"
        weight="bold"
        isSpan
      >
        {text}
      </StyledText>,
    )
    const styledText = getByTestId('text-component')
    expect(styledText).toHaveStyle(`
      font-weight: 600;
    `)
  })
})
