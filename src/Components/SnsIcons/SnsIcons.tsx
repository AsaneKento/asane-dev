import type { ReactElement } from "react"
import { SiGithub, SiInstagram, SiX } from "@icons-pack/react-simple-icons"
import Link from "next/link"
import { IconButton } from "~/lib/components/IconButton"

export function SnsIcons(): ReactElement {
  return (
    <div className={"flex space-x-4"}>
      <Link href={"https://github.com/AsaneKento"} target={"_blank"}>
        <IconButton>
          <SiGithub aria-label={"github-icon"} className={"h-4 w-4"} />
        </IconButton>
      </Link>
      <Link href={"https://x.com/Asane_Kento"} target={"_blank"}>
        <IconButton>
          <SiX aria-label={"x-icon"} className={"h-4 w-4"} />
        </IconButton>
      </Link>
      <Link href={"https://www.instagram.com/asane_kento/"} target={"_blank"}>
        <IconButton>
          <SiInstagram aria-label={"instagram-icon"} className={"h-4 w-4"} />
        </IconButton>
      </Link>
    </div>
  )
}
