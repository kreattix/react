import * as React from 'react'

import { useComponent } from '../kreattix-app'
import StyledDivider from './StyledDivider'
import { DividerProps } from './types'

export const Divider = React.forwardRef<
  HTMLDivElement,
  DividerProps & React.HTMLAttributes<HTMLDivElement>
>(({ children, ...props }, ref) => {
  const defaultProps = { ...useComponent().divider, ...props }
  return (
    <StyledDivider ref={ref} {...defaultProps}>
      {children && <div className="divider-content">{children}</div>}
    </StyledDivider>
  )
})
Divider.displayName = 'Divider'
