// React imports
import React from "react";
import styled from "styled-components";

// Custom imports
import menuIcon from "./../assets/menu-icon.png"

const HeaderWrapper = styled.nav`
background-color: yellow;
height: 50px;
width: 100vw;
`;

const Img = styled.img`
  cursor: pointer;
  transition: all 0.2s ease-out;
 
  &:active{
    transform: rotate(360deg)
  }
 
`;

const MenuButton = (props: any) => {

  function handleMenuClick() {
    props.toggleFunction()
  }
  return (
    < Img src={menuIcon} width="30px" onMouseDown={handleMenuClick} />
  )
}

export { HeaderWrapper, MenuButton };