import type { ReactElement, ReactNode } from "react"

interface SectionProps {
  title: string
  children: ReactNode
}

export function Section({ title, children }: SectionProps): ReactElement {
  return (
    <div className={"space-y-4"}>
      <h3 className={"text-lg font-semibold"}>{title}</h3>
      {children}
    </div>
  )
}
