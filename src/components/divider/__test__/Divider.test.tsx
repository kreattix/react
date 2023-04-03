import { render } from '@testing-library/react'

import { Divider } from '../Divider'

describe('Divider', () => {
  it('renders with children', () => {
    const { getByText } = render(
      <Divider>
        <span>Content</span>
      </Divider>,
    )
    expect(getByText('Content')).toBeInTheDocument()
  })
})
