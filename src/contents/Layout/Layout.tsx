import type { ReactElement, ReactNode } from "react"
import { ThemeProvider } from "~/utils/ThemeProvider"
import { Header } from "./components/Header"

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps): ReactElement {
  return (
    <ThemeProvider>
      <div className={"relative min-h-screen flex flex-col"}>
        <Header />
        <div className={"flex-1"}>{children}</div>
        {/* TODO: Footer */}
      </div>
    </ThemeProvider>
  )
}
