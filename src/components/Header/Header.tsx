import { type ReactElement } from "react"

import Image from "next/image"
import Link from "next/link"
import { css } from "~/styled-system/css"
import { HeaderMenu } from "./components/Menu"

export function Header(): ReactElement {
  return (
    <header
      className={css({
        bgColor: "base100",
        borderRadius: "md",
        mx: "4",
        px: "4",
        py: "2",
        sm: {
          px: "8",
        },
        md: {
          px: "12",
        },
      })}
    >
      <div
        className={css({
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        })}
      >
        <Link href={"/"}>
          <Image
            src={"/site_icon/logo_full.svg"}
            alt={"logo"}
            width={100}
            height={40}
            className={css({ verticalAlign: "middle" })}
          />
        </Link>
        <HeaderMenu />
      </div>
    </header>
  )
}
