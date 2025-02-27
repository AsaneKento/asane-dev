import type { ReactElement } from "react"

interface ChipProps {
  title: string
}

export function Chip({ title }: ChipProps): ReactElement {
  return (
    <span
      className={
        "px-3 py-1 rounded-full bg-primary/10 text-primary text-sm neumorphic"
      }
    >
      {title}
    </span>
  )
}
