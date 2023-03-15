import styled from "styled-components";


export const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    flex-wrap: wrap;
`

export const Item = styled.li`
    flex-basis: calc((100% - 60px) / 3);
    height: 390px;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: rgba(24, 39, 75, 0.12) 0px 8px 18px -6px, rgba(24, 39, 75, 0.12) 0px 12px 42px -4px;
    position: relative;

    transition: transform 300ms ease-in-out;

    &:hover {
        transform: scale(1.05);
    }
`