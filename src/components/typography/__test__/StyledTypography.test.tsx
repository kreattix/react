import { render } from '@testing-library/react'

import { Weights } from '../../../utils/types'
import StyledTypography from '../StyledTypography'

describe('Test Styled Typography Component', () => {
  it('should render default styles when no props are passed', () => {
    const { container } = render(<StyledTypography variant="paragraph" />)
    expect(container.firstChild).toHaveStyle(`font-size: 16px`)
    expect(container.firstChild).toHaveStyle(`line-height: 20px`)
    expect(container.firstChild).not.toHaveStyle(`font-weight: 400`)
  })

  it('should apply weight-specific styles based on the "weight" prop', () => {
    const { container } = render(<StyledTypography variant="paragraph" weight="bold" />)
    expect(container.firstChild).toHaveStyle(`font-weight: 700`)
  })

  it('should apply default weight styles for wrong "weight" prop', () => {
    const { container } = render(<StyledTypography variant="display" weight={'wrong' as Weights} />)
    expect(container.firstChild).toHaveStyle(`font-weight: 400`)
  })

  it('should apply size-specific styles based on the "size" prop', () => {
    const { container } = render(<StyledTypography variant="label" size="small" />)
    expect(container.firstChild).toHaveStyle(`font-size: 12px`)
    expect(container.firstChild).toHaveStyle(`line-height: 14px`)
  })

  it('should apply color-specific styles based on the "color" prop', () => {
    const { container } = render(<StyledTypography variant="display" color="primary" />)
    expect(container.firstChild).toHaveStyle(`color: rgb(33, 150, 243)`)
  })

  it('should apply ellipsis styles when the "ellipsis" prop is truthy', () => {
    const { container } = render(<StyledTypography variant="label" ellipsis />)
    expect(container.firstChild).toHaveStyle(`display: block`)
    expect(container.firstChild).toHaveStyle(`white-space: nowrap`)
    expect(container.firstChild).toHaveStyle(`overflow: hidden`)
    expect(container.firstChild).toHaveStyle(`text-overflow: ellipsis`)
  })
})
