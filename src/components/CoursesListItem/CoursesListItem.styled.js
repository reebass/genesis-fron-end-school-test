import styled from "styled-components";
import { Link } from "react-router-dom"

export const LinkCourse = styled(Link)`
    display: block;
    margin: 0;
    padding: 0;
    text-decoration: none;
    color: currentColor;

`

export const Icon = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    padding: 5px 10px;
    background-color: ${props => props.locked ? "#EA552B" : "#00A698"};
    border-bottom-left-radius: 12px;

    & > svg {
        width: 12px;
        height: 12px;
        fill: #FFF;
    }

`

export const ImgWrap = styled.picture`
    width: 100%;
    height: 160px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: content-box;
`

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const InfoCourseWrap = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 3;
    flex-shrink: 0;
    flex-basis: 0%;
    padding: 30px 25px;
`

export const Title = styled.h3`
    font-size: 18px;
    font-weight: 600;
    line-height: 1.3;
    margin: 0;
    margin-bottom: 20px;
    min-height: 42px;

`

export const Desc = styled.p`
    font-size: 14px;
    line-height: 1.2;
    margin: 0;
    min-height: 60px;
    margin-bottom: 20px;
`

export const Line = styled.div`
    border-bottom: 1px solid grey;
    margin-bottom: 10px;
`

export const WrapStats = styled.div`
    
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Lessons = styled.span`
    font-weight: 600;
`

export const Tag = styled.span`
    padding: 5px;
    font-weight: 600;
    border-radius: 5px;
    
    background-color: #00A698;
    color: #fff;
    

`

export const Rating = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    margin-left: 10px;

    & > svg {
        fill: currentColor;
        min-width: 12px;
        min-height: 12px;
    }
`