import type { ReactElement, ReactNode } from "react"
import { Spacing } from "~/libs/Spacing"
import { Header } from "../Header"

interface LayoutProps {
  children: ReactNode
}

export function Layout(props: LayoutProps): ReactElement {
  const { children } = props
  return (
    <>
      <Spacing vertical={"h-4"} />
      <Header />
      <Spacing vertical={"h-8"} />
      <main>{children}</main>
    </>
  )
}
