import { styled, css } from "styled-components";

export const StyledButton = styled.button`
    cursor: pointer;
    border-radius: 0.25rem;
    display:flex;
    min-height: 1rem;

    ${props => props.color ? css`
        background: ${props.color};
        border: ${props.color} 0.25rem solid;
                
    `: ''}
    ${props => props.color && props.text ? css`
        color: ${props.color};
        background: none;
        border: ${props.color} 0.0125rem solid;
        text-align: center;
    `: ''}
`;