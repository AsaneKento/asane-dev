import type { ReactElement } from "react"
import { css } from "~/styled-system/css"
import { Content } from "./components/Content"
import { Profile } from "./components/Profile"

export function Home(): ReactElement {
  return (
    <div
      className={css({
        py: "8",
      })}
    >
      <Profile />
      <Content />
    </div>
  )
}
