import { styled, css } from "styled-components";

export const StyledHeader = styled.header`
    position:sticky;
    top:0;
    opacity: 1;

    ${props => props.background ? css`
          background: ${props.background};             
    `: ''}
`