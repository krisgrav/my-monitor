import { styled, css } from "styled-components";

export const StyledH2 = styled.h2`
    font-weight:${(props) => (props.bold) ?  "bold" : null};
    color: ${(props) => (props.yellow ? "#F3D250" : null)};
    color: ${(props) => (props.white ? "#ECECEC" : null)};
    color: ${(props) => (props.lightblue ? "#90CCf4" : null)};
    color: ${(props) => (props.blue ? "#5DA2d5" : null)};
    color: ${(props) => (props.pink ? "#F78888" : null)};
    color: ${(props) => (props.green ? "#32a852" : null)};

    ${props => props.color ? css`
          color: ${props.color};             
    `: ''}
`