import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  height: 70px;
  margin: 0 auto;
  border-bottom: 1px solid grey;
  background-color: #FEFEFE;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
`;

export const NavList = styled.nav`
  margin: 0 auto;
  max-width: 1160px;
  padding: 0 20px;
  height: 100%;
  display: flex;
  align-items: baseline;
  justify-content: flex-start;
`
export const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  font-size: 20px;
  font-weight: 600;
  padding: 20px 0;
  text-decoration: none;
  color: black;
  transition: color 300ms ease;
  
  &.active::after {
    content: '';
    width: 100%;
    height: 2px;
    background-color: black;

    transition: background-color 300ms ease;

  }
  &:hover {
    color: #00A698;
  }

  &:hover::after {
    background-color: #00A698;
  }
`;
export const Container = styled.div`
  max-width: 1160px;
  margin: 100px auto 0 auto;
  padding: 20px;
`;