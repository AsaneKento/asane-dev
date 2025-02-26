"use client"

import { House, MenuIcon, User, X } from "lucide-react"
import { useState, type ReactElement } from "react"
import { MenuItem } from "~/contents/Layout/features/menu/components/MenuItem"
import { IconButton } from "~/lib/components/IconButton"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "~/lib/ui/dropdown-menu"

export function Menu(): ReactElement {
  const [open, setOpen] = useState(false)

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <IconButton aria-label={"menu-button"}>
          {open ? (
            <X aria-label={"close-icon"} className={"h-4 w-4"} />
          ) : (
            <MenuIcon aria-label={"open-icon"} className={"h-4 w-4"} />
          )}
        </IconButton>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align={"end"}
        className={
          "w-52 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 mt-5"
        }
      >
        <MenuItem
          title={"Home"}
          link={"/"}
          icon={<House className={"h-4 w-4"} />}
        />
        <MenuItem
          title={"About"}
          link={"/about"}
          icon={<User className={"h-4 w-4"} />}
        />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
