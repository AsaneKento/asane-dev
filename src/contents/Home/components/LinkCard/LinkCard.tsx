import type { ReactElement, ReactNode } from "react"
import Link from "next/link"
import { Card } from "~/lib/ui/card"

interface LinkCardProps {
  title: string
  link: string
  icon?: ReactNode
}

export function LinkCard({ title, link, icon }: LinkCardProps): ReactElement {
  return (
    <Link href={link}>
      <Card
        className={"p-8 neumorphic hover:scale-105 transition-all duration-300"}
      >
        <div className={"flex flex-col items-center text-center"}>
          {icon}
          <h3 className={"text-lg font-semibold"}>{title}</h3>
        </div>
      </Card>
    </Link>
  )
}
