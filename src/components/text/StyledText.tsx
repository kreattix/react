import { BaseTextProps } from '@components/text/types'
import styled, { css } from 'styled-components'

const StyledText = styled.div<BaseTextProps>(({ theme, tagType, weight, size = 'medium' }) => {
  const styles = theme.text[tagType][size]
  return css`
    font-size: ${styles.fontSize};
    line-height: ${styles.lineHeight};
    font-weight: ${weight && theme.font.weights[weight]
      ? theme.font.weights[weight]
      : theme.font.weights.normal};
  `
})

export default StyledText
