"use client"
import type { ReactElement } from "react"
import { useCallback, useEffect, useRef, useState } from "react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import { MenuContent } from "../MenuContent"

export function DropDownMenu(): ReactElement {
  const [open, setOpen] = useState(false)

  const handleMenuClick = useCallback(() => {
    setOpen(!open)
  }, [open])

  const dropDownMenu = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = dropDownMenu.current

    if (!el) return

    const hundleClickOutside = (e: MouseEvent): void => {
      if (!el?.contains(e.target as Node)) {
        if (open) {
          setOpen(false)
        }
      }
    }

    document.addEventListener("click", hundleClickOutside)

    return () => {
      document.removeEventListener("click", hundleClickOutside)
    }
  }, [dropDownMenu, open])

  return (
    <div ref={dropDownMenu}>
      <button
        className={"daisy-btn daisy-btn-square daisy-btn-ghost relative"}
        onClick={handleMenuClick}
      >
        {open ? (
          <XMarkIcon aria-label={"close-icon"} className={"h-8 w-8"} />
        ) : (
          <Bars3Icon aria-label={"open-icon"} className={"h-8 w-8"} />
        )}
      </button>
      {open && <MenuContent />}
    </div>
  )
}
