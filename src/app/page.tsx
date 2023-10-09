import type { ReactElement } from "react"
import { Home } from "~/contents/Home"

export const runtime = "edge"

export default function HomePage(): ReactElement {
  return <Home />
}
