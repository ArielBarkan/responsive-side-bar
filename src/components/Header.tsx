// React imports
import React, { useState } from "react"

// Custom imports
import { HeaderWrapper, MenuButton } from "./HeaderWrappers";
import { SideBar } from "./SideBar";

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);

  }

  return (
    <>
      <HeaderWrapper>
        <MenuButton toggleFunction={toggleMenu} />
      </HeaderWrapper>

      <SideBar {...{ isOpen }} />

    </>
  )

}

export { Header }