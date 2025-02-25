import type { ReactElement } from "react"
import { ModeToggleButton } from "~/components/ModeToggleButton"

export default function Home(): ReactElement {
  return (
    <main>
      <p>Hello World</p>
      <ModeToggleButton />
    </main>
  )
}
