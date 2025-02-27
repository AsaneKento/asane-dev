import type { ReactElement, ReactNode } from "react"

interface MainContainerProps {
  children: ReactNode
}

export function MainContainer({ children }: MainContainerProps): ReactElement {
  return (
    <main className={"min-h-screen bg-background py-16 px-8 sm:px-6 lg:px-12"}>
      {children}
    </main>
  )
}
