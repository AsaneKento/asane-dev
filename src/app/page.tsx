import type { ReactElement } from "react"
import { css } from "~/styled-system/css"

export default function Home(): ReactElement {
  return (
    <div className={css({ fontSize: "2xl", fontWeight: "bold" })}>Hello</div>
  )
}
