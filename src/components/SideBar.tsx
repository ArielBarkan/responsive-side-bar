// React imports
import React from "react"
import { myLinks } from "./links"

// Custom imports
import { SideBarWrapper, SideBarHeader, SideBarContent, UlLink, LiLink, SideBarFooter } from "./SideBarWrappers"

const SideBar = (props: any) => {

  const { isOpen } = props;

  return (
    <SideBarWrapper {...{ isOpen }}>
      <SideBarHeader>Header</SideBarHeader>
      <SideBarContent>
        <UlLink>
          {myLinks.links.map((item: any, index: number) => {
            return <LiLink key={index}>{item.label}</LiLink>

          })

          }
        </UlLink>
      </SideBarContent>
      <SideBarFooter>Footer</SideBarFooter>

    </SideBarWrapper>
  )

}

export { SideBar }