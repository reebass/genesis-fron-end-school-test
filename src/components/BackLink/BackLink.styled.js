import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
    box-sizing: border-box;
    display:flex;
    align-items: center;
    justify-content: flex-end;
    gap: 5px;
    width: 100px;
    border: 1px solid #00A698;;
    outline: none;
    box-shadow: rgba(24, 39, 75, 0.12) 0px 8px 18px -6px, rgba(24, 39, 75, 0.12) 0px 12px 42px -4px;
    border-radius: 5px;
    background-color: transparent;
    text-decoration: none;
    color: #000;
    font-size: 18px;
    font-weight: 600;
    padding: 5px 10px;

    
    transition: color 300ms ease-in, background-color 300ms ease-in;

    & > span {
        transform: translateX(0);
        transition: transform 300ms ease-in;
    }

    & > svg {
        transform: translateX(0);
        transition: transform 300ms ease-in;
    }

    &:hover,
    &:focus {
        background-color: #00A698;
        color: #fff;
    }

    &:hover > span,
    &:hover > svg  {
        transform: translateX(-17px);
    }


    
`