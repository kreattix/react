import styled, { css } from 'styled-components'

import { WEIGHTS, appendPixels, getThemeConfig } from '../../utils'
import { DividerProps } from './types'

const StyledDivider = styled.div<DividerProps>(({ children, color, weight, alignment }) => {
  const { components, global, palette } = getThemeConfig()
  const styles = components.divider
  return css`
    display: flex;
    flex-wrap: nowrap;
    align-items: center;

    ${children &&
    css`
      gap: ${appendPixels(global.spacing / 2)};

      & > div {
        max-width: calc(100% - ${appendPixels(global.spacing * 3)});
      }
    `}

    margin-top: ${appendPixels(styles.marginTop ?? global.spacing)};
    margin-bottom: ${appendPixels(styles.marginBottom ?? global.spacing)};

    color: ${color ? palette[color].main : styles.color};
    font-weight: ${(weight && WEIGHTS.get(weight)) ??
    (styles.fontWeight && WEIGHTS.get(styles.fontWeight))};

    &:after,
    &:before {
      display: block;
      border-top: ${appendPixels(styles.borderWidth)} solid ${styles.borderColor};
      border-color: ${color && palette[color].light};
      min-width: ${appendPixels(global.spacing)};
    }

    ${alignment !== 'sharp-left' &&
    css`
      &:before {
        content: '';
        flex: ${alignment === 'left' ? appendPixels(global.spacing) : 1};
      }
    `}

    ${alignment !== 'sharp-right' &&
    css`
      &:after {
        content: '';
        flex: ${alignment === 'right' ? appendPixels(global.spacing) : 1};
      }
    `}
  `
})

export default StyledDivider
