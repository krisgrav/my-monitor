import { styled, css } from "styled-components";

export const StyledWrapper = styled.div`
    display: inline-flex;
    gap: 0.5rem;
    padding: 1rem;
    flex-direction: ${(props) => (props.row ? "row" : null)};
    flex-direction: ${(props) => (props.column ? "column" : null)};
    padding: ${(props) => (props.nopadding ? "0" : null)};
    align-items: ${(props) => (props.aligncenter ? "center" : null)};
    justify-content: ${(props) => (props.justifycenter ? "center" : null)};
    ${props => props.flexDirection ? css`
          flex-direction: ${props.flexDirection};             
    `: ''}
    ${props => props.background ? css`
          background: ${props.background};             
    `: ''}
`