import { type ReactElement } from "react"

import { css } from "~/styled-system/css"
import { HeaderMenu } from "./components/HeaderMenu"
import { Logo } from "./components/Logo"

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
        <Logo />
        <HeaderMenu />
      </div>
    </header>
  )
}
