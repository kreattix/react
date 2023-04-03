import { render } from '@testing-library/react'

import StyledDivider from '../StyledDivider'

describe('StyledDivider', () => {
  it('should render a divider with default styles', () => {
    const { getByTestId } = render(<StyledDivider data-testid="divider" />)
    const divider = getByTestId('divider')

    expect(divider).toHaveStyle(`
      display: flex;
      align-items: center;
    `)
  })

  it('should render a divider with custom color and weight', () => {
    const { getByTestId } = render(
      <StyledDivider color="primary" weight="bold" data-testid="divider" />,
    )
    const divider = getByTestId('divider')

    expect(divider).toHaveStyle(`
      color: #2196F3;
      font-weight: 700;
    `)
  })

  it('should render a divider with children', () => {
    const { getByTestId } = render(
      <StyledDivider data-testid="divider">
        <div data-testid="content">Content</div>
      </StyledDivider>,
    )
    const divider = getByTestId('divider')
    const content = getByTestId('content')

    expect(divider).toContainElement(content)
    expect(divider).toHaveStyle(`
      gap: 12px;
    `)
  })

  it('should render a divider aligned to the left', () => {
    const { getByTestId } = render(<StyledDivider alignment="left" data-testid="divider" />)
    const divider = getByTestId('divider')

    expect(divider).toBeInTheDocument()
  })

  it('should render a divider aligned to the right', () => {
    const { getByTestId } = render(<StyledDivider alignment="right" data-testid="divider" />)
    const divider = getByTestId('divider')

    expect(divider).toBeInTheDocument()
  })
})
