import type { ComponentProps, ReactElement } from "react"
import { Button } from "~/lib/ui/button"

interface IconButtonProps extends ComponentProps<typeof Button> {
  children: ReactElement
}

export function IconButton({
  children,
  ...props
}: IconButtonProps): ReactElement {
  return (
    <Button
      variant={"ghost"}
      size={"icon"}
      className={"neumorphic w-10 h-10 p-0"}
      {...props}
    >
      {children}
    </Button>
  )
}
