"use client"

import { type ReactElement, useState, useCallback } from "react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import Link from "next/link"

export function Header(): ReactElement {
  const [open, setOpen] = useState(false)

  const handleClose = useCallback(() => {
    setOpen(!open)
  }, [open])

  return (
    <div
      className={
        "daisy-navbar mx-auto w-11/12 rounded-xl bg-neutral px-4 drop-shadow-base md:px-6"
      }
    >
      <div className={"flex-1"}>
        <Link className={"text-xl font-bold md:text-2xl"} href={"/"}>
          Asane
        </Link>
      </div>
      <div>
        <button
          className={"daisy-btn daisy-btn-square daisy-btn-ghost"}
          onClick={handleClose}
        >
          {open ? (
            <XMarkIcon aria-label={"close-icon"} className={"h-8 w-8"} />
          ) : (
            <Bars3Icon aria-label={"open-icon"} className={"h-8 w-8"} />
          )}
        </button>
      </div>
    </div>
  )
}
