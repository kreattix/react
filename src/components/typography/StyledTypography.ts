import styled, { css } from 'styled-components'

import { WEIGHTS, appendPixels, getSizedPixels, getThemeConfig } from '../../utils'
import { BaseTypographyProps, TypographyStyles } from './types'

const StyledTypography = styled.div<BaseTypographyProps>(
  ({ variant, weight, size, ellipsis, color }) => {
    const {
      components: { typography },
      palette,
    } = getThemeConfig()
    const styles = typography[variant] as TypographyStyles
    return css`
      font-size: ${getSizedPixels(styles.fontSize, size)};
      line-height: ${getSizedPixels(styles.lineHeight, size)};

      margin-top: ${appendPixels(styles.marginTop) ?? 0};
      margin-bottom: ${appendPixels(styles.marginBottom) ?? 0};

      font-weight: ${(weight && WEIGHTS.get(weight)) ??
      (styles.fontWeight && WEIGHTS.get(styles.fontWeight))};

      color: ${color && palette[color].main};

      ${ellipsis &&
      `${variant === 'label' && `display: block`};
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;`};
    `
  },
)

export default StyledTypography
