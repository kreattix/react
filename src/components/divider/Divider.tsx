import * as React from 'react'

import StyledDivider from './StyledDivider'
import { DividerProps } from './types'

export const Divider = React.forwardRef<
  HTMLDivElement,
  DividerProps & React.HTMLAttributes<HTMLDivElement>
>(({ children, ...props }, ref) => {
  return (
    <StyledDivider ref={ref} {...props}>
      {children && <div className="divider-content">{children}</div>}
    </StyledDivider>
  )
})
Divider.displayName = 'Divider'
