import styled from "styled-components";

export const Btn = styled.button`
    margin: 40px auto;
    padding: 10px;
    display: block;
    width: 180px;
    border: 1px solid #00A698;;
    outline: none;
    box-shadow: rgba(24, 39, 75, 0.12) 0px 8px 18px -6px, rgba(24, 39, 75, 0.12) 0px 12px 42px -4px;
    border-radius: 5px;
    background-color: transparent;
    color: #000;
    font-size: 20px;
    font-weight: 600;
    cursor: pointer;

    transition: color 300ms ease-in, background-color 300ms ease-in;

    &:hover,
    &:focus {
        background-color: #00A698;
        color: #fff;
    }




`