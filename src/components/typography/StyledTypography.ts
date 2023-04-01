import styled, { css } from 'styled-components'

import { addSizeRatioWithPixel, getThemeConfig } from '../../utils'
import { WEIGHTS } from '../../utils/maps'
import { BaseTypographyProps } from './types'

const TypographySizeRatio = new Map([
  ['paragraph', 2],
  ['label', 2],
  ['span', 2],
  ['title', 2],
  ['heading', 4],
  ['display', 9],
])

const StyledTypography = styled.div<BaseTypographyProps>(({ variant, weight, size, ellipsis }) => {
  const { typography } = getThemeConfig().components
  const styles = typography[variant]

  return css`
    font-size: ${addSizeRatioWithPixel(styles.fontSize, size, TypographySizeRatio.get(variant))};
    line-height: ${addSizeRatioWithPixel(
      styles.lineHeight,
      size,
      TypographySizeRatio.get(variant),
    )};
    margin-top: ${addSizeRatioWithPixel(styles.marginTop) ?? 0};
    margin-bottom: ${addSizeRatioWithPixel(styles.marginBottom) ?? 0};

    font-weight: ${(weight && WEIGHTS.get(weight)) ??
    (styles.fontWeight && WEIGHTS.get(styles.fontWeight))};

    ${ellipsis &&
    `
      ${variant === 'label' && `display: block`};
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `}
  `
})

export default StyledTypography
