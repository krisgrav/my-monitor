import { styled, css } from "styled-components";

export const StyledCard = styled.div`
    display: inline-flex;
    border-radius:0.25rem;
    border: 2px solid ${(props) => (props.blue ? "#5DA2d5" : null)};
    background: ${(props) => (props.blue ? "#5DA2d5" : null)};
    padding: 0.5rem;

    ${props => props.background ? css`
          background: ${props.background};
          border: 2px solid ${props.background};             
    `: ''}

`