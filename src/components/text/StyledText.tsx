import styled, { css } from 'styled-components'

import { Sizes } from '../../types'
import { useKreattix } from '../kreattix-app'
import { BaseTextProps } from './types'

const StyledText = styled.div<BaseTextProps>(({ theme, tagType, isSpan, ...rest }) => {
  const { size, weight, ellipsis } = { ...useKreattix().text, ...rest }

  const styles = theme.text[tagType][size as Sizes]

  const spacingRatio = {
    label: 0.2,
    paragraph: 0.4,
    title: 0.6,
    heading: 0.8,
    display: 1,
  }

  const ellipsisStyles = ellipsis
    ? css`
        display: ${tagType === 'label' && 'block'};
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      `
    : null

  const TextStyles = !isSpan
    ? css`
        font-size: ${styles.fontSize};
        line-height: ${styles.lineHeight};
        font-weight: ${weight && theme.font.weights[weight]};
        margin-top: 0;
        margin-bottom: ${Math.floor(theme.variables.spacing * spacingRatio[tagType])}px;
        ${ellipsisStyles}
      `
    : css`
        font-weight: ${weight && theme.font.weights[weight]};
      `

  return css`
    ${TextStyles}
  `
})

export default StyledText
