import type { ReactElement } from "react"
import {
  HomeIcon,
  EnvelopeIcon,
  ArchiveBoxIcon,
  FireIcon,
} from "@heroicons/react/24/solid"
import Link from "next/link"

export function MenuContent(): ReactElement {
  return (
    <nav
      className={
        "daisy-menu daisy-menu-md absolute right-0 top-20 w-56 rounded-md bg-base-200"
      }
    >
      <ul>
        <li>
          <Link href={"/"}>
            <HomeIcon className={"h-5 w-5"} />
            Home
          </Link>
        </li>
        <div className={"daisy-divider my-0"} />
        <li>
          <Link href={"/blog"}>
            <ArchiveBoxIcon className={"h-5 w-5"} />
            TechBlog
          </Link>
        </li>
        <div className={"daisy-divider my-0"} />
        <li>
          <Link href={"/blog"}>
            <FireIcon className={"h-5 w-5"} />
            TimeLine
          </Link>
        </li>
        <div className={"daisy-divider my-0"} />
        <li>
          <Link href={"/contact"}>
            <EnvelopeIcon className={"h-5 w-5"} />
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}
