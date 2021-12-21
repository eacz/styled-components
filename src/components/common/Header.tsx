import { useState } from "react";
import { NavLink } from "react-router-dom"
import styled from "styled-components"

const HeaderWrapper = styled.header`
  height: 60px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  padding: 0 16px;
  position: fixed;
  top: 0;
  background-image: linear-gradient(to right, #f8048c, #fdd54f );
  border-bottom: #fdd54f 3px solid;
`;

const Menu = styled.nav<{open: boolean}>`
  display: ${({open} ) => open ? 'block' : 'none'};
  position: absolute;
  width: 100%;
  top: 60px;
  left: 0;
  padding: 8px;
  box-sizing: border-box;
  font-family: 'Open Sans';
  border-bottom: #fdd54f 3px solid;
  background: white;
  
  @media(min-width: 768px) {
    display: flex; 
    background: none;
    left: initial;
    top: initial;  
    width: initial;
    position: relative;
    border-bottom: none;
    margin: auto 0 auto auto;
  }
`;

const StyledLink = styled(NavLink)`
  padding: 4px 8px;
  display: block;
  text-align: center;
  box-sizing: border-box;
  margin: 0 auto;
  color: black;
  text-decoration: none;
  &.active {
    font-weight: bold;
  }
`

const MobileMenuICon = styled.div`
  margin: auto 0 auto auto;
  width: 25px;
  min-width: 25px;
  padding: 5px;
  >div {
    height: 3px;
    background: black;
    margin: 5px 0;
    width: 100%;
  }

  @media (min-width: 786px){
    display: none;
  }
`

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <HeaderWrapper>
      <MobileMenuICon onClick={() => setMenuOpen((s) => !s)} >
        <div />
        <div />
        <div />
      </MobileMenuICon>
      <Menu open={menuOpen}>
        <StyledLink to='/'>Home</StyledLink>
        <StyledLink to='/login'>Login</StyledLink>
      </Menu>
    </HeaderWrapper>
  )
}

