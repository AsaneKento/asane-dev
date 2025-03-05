import type { ReactElement } from "react"
import { Chip } from "~/lib/components/Chip"
import { Card } from "~/lib/ui/card"
import { cn } from "~/lib/utils"

interface SectionCardProps {
  title: string
  items: string[]
  className?: string
}

export function SectionCard({
  title,
  items,
  className,
}: SectionCardProps): ReactElement {
  return (
    <Card className={cn(baseStyle, className)}>
      <h2 className={"text-xl font-semibold mb-4"}>{title}</h2>
      <div className={"flex flex-wrap gap-3"}>
        {items.map((item) => (
          <Chip key={item} title={item} />
        ))}
      </div>
    </Card>
  )
}

const baseStyle = "p-6 neumorphic"
