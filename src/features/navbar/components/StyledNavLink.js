import { NavLink as BaseNavLink } from "react-router-dom";
import { styled } from "styled-components";

export const StyledNavLink = styled(BaseNavLink)`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.25em 1em;
    text-decoration: none;
    color: #5DA2D5;
    border: #5DA2D5 0.125rem solid;
    border-radius: 0.5rem;
    width: 8rem;

    &:hover {
        font-weight: bold;
        border: #5DA2D5 0.2rem solid;
    }

    &.active {
        font-weight: bold;
        color: #5DA2D5;
        border: #5DA2D5 0.2rem solid;
        background: #90CCf440;
        pointer-events: none;
        user-select: none;
    }
`;