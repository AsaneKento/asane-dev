import type { ReactElement } from "react"
import { Button } from "~/libs/Button/Button"
import { css } from "~/styled-system/css"

export default function Home(): ReactElement {
  return (
    <>
      <div className={css({ fontSize: "2xl", fontWeight: "bold" })}>Hello</div>
      <Button variant={"contained"} size={"medium"} color={"secondary"}>
        Sample
      </Button>
    </>
  )
}
