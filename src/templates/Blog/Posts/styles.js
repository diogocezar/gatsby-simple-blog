import styled from "styled-components"
import media from "styled-media-query"

export const Title = styled.h1`
  color: red;
  ${media.lessThan("large")`
    color: lime;
  `}
`