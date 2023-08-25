import type { ReactElement } from "react"

interface SpacingProps {
  horizontal?: "w-4" | "w-8" | "w-12" | "w-16" | "w-20" | "w-24" | "w-full"
  vertical?: "h-4" | "h-8" | "h-12" | "h-16" | "h-20" | "h-24" | "h-full"
}
export function Spacing({
  horizontal = "w-full",
  vertical = "h-full",
}: SpacingProps): ReactElement {
  return <div className={`${horizontal} ${vertical}`} />
}
