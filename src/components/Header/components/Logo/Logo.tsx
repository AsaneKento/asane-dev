import type { ReactElement } from "react"
import Image from "next/image"
import Link from "next/link"
import { css } from "~/styled-system/css"
import LogoImage from "@/image/site_icon/logo_full.svg"

export function Logo(): ReactElement {
  return (
    <Link href={"/"}>
      <Image
        src={LogoImage}
        alt={"logo"}
        width={100}
        height={40}
        className={css({ verticalAlign: "middle" })}
      />
    </Link>
  )
}
