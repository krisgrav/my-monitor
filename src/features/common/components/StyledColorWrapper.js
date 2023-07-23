import { styled, css } from "styled-components"

export const StyledColorWrapper =  styled.div`
    ${props => props.color ? css`
          color: ${props.color} 2px solid;             
    `: ''}
`