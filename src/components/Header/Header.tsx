import { type ReactElement } from "react"
import Link from "next/link"
import { DropDownMenu } from "./components/DropDownMenu"

export function Header(): ReactElement {
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
      <DropDownMenu />
    </div>
  )
}
