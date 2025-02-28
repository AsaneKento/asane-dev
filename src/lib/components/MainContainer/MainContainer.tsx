import type { ReactElement, ReactNode } from "react"
import { cn } from "~/lib/utils"

interface MainContainerProps {
  className?: string
  children: ReactNode
}

export function MainContainer({
  className,
  children,
}: MainContainerProps): ReactElement {
  return <main className={cn(mainStyle, className)}>{children}</main>
}

const mainStyle = "min-h-screen bg-background py-16 px-8 sm:px-6 lg:px-12"
