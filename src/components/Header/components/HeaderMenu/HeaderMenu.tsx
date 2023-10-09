"use client"

import { useState, type ReactElement, useCallback } from "react"
import {
  Bars3Icon,
  XMarkIcon,
  HomeIcon,
  ArchiveBoxIcon,
  CodeBracketIcon,
  AtSymbolIcon,
} from "@heroicons/react/24/solid"
import { IconButton } from "~/libs/IconButton"
import { Menu } from "~/libs/Menu/Menu"
import { MenuItem } from "~/libs/Menu/MenuItem"
import { MenuList } from "~/libs/Menu/MenuList"

export function HeaderMenu(): ReactElement {
  const [open, setOpen] = useState(false)

  const handleMenuOpen = useCallback(() => {
    setOpen(!open)
  }, [open])

  return (
    <Menu open={open} setOpen={setOpen}>
      <IconButton
        variant={"text"}
        color={"primary"}
        size={"large"}
        onClick={handleMenuOpen}
      >
        {open ? (
          <XMarkIcon aria-label={"close-icon"} />
        ) : (
          <Bars3Icon aria-label={"open-icon"} />
        )}
      </IconButton>
      <MenuList open={open}>
        <MenuItem path={"/"}>
          <HomeIcon />
          Home
        </MenuItem>
        <MenuItem path={"#"}>
          <ArchiveBoxIcon />
          <s>TimeLine</s>
        </MenuItem>
        <MenuItem path={"#"}>
          <CodeBracketIcon />
          <s>TechBlog</s>
        </MenuItem>
        <MenuItem path={"#"}>
          <AtSymbolIcon />
          <s>Contact</s>
        </MenuItem>
      </MenuList>
    </Menu>
  )
}
