import { render } from '@testing-library/react'

import { Typography } from '..'

describe('Typography Components', () => {
  it('should render the component with the correct variant', () => {
    const { container: spanContainer } = render(<Typography.Span />)
    const { container: labelContainer } = render(<Typography.Label />)
    const { container: paragraphContainer } = render(<Typography />)
    const { container: titleContainer } = render(<Typography.Title />)
    const { container: headingContainer } = render(<Typography.Heading />)
    const { container: displayContainer } = render(<Typography.Display />)

    expect(spanContainer.querySelector('span')).toBeInTheDocument()
    expect(labelContainer.querySelector('label')).toBeInTheDocument()
    expect(paragraphContainer.querySelector('p')).toBeInTheDocument()
    expect(titleContainer.querySelector('h5')).toBeInTheDocument()
    expect(headingContainer.querySelector('h3')).toBeInTheDocument()
    expect(displayContainer.querySelector('h1')).toBeInTheDocument()
  })
})
