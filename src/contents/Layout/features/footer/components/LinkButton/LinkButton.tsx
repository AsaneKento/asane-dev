import type { ReactElement, ReactNode } from "react"
import Link from "next/link"
import { Button } from "~/lib/ui/button"

interface LinkButtonProps {
  link: string
  children: ReactNode
}

export function LinkButton({ link, children }: LinkButtonProps): ReactElement {
  return (
    <Link href={link}>
      <Button
        variant={"link"}
        className={"p-0 h-auto text-muted-foreground hover:text-primary"}
      >
        {children}
      </Button>
    </Link>
  )
}
