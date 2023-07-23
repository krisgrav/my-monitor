import { styled , css } from "styled-components";

export const StyledButton = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid red
    margin: 0 1em;
    padding: 0.25em 1em;
    cursor: pointer;
    border: #5DA2D5 2px solid;

    ${(props) => 
        props.blue && `
            color: #5DA2D5; 
        `
    }
    
    ${props => props.borderColor ? css`
          border: ${props.borderColor} 2px solid;             
    `: ''}
    ${props => props.background ? css`
          background: ${props.background};             
    `: ''}
`;