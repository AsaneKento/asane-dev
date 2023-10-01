import type { ReactElement, ReactNode } from "react"
import { css, cva } from "~/styled-system/css"
import type { SystemStyleObject } from "~/styled-system/types"

const menuListRecipe = cva({
  base: {
    zIndex: "drawer",
    bgColor: "base200",
    borderRadius: "sm",
    px: "2",
    py: "1",
    textDecoration: "none",
    "& li": {
      borderBottom: "solid 0.1rem",
      "&:last-child": {
        border: "none",
      },
    },
  },
  variants: {},
  compoundVariants: [],
  defaultVariants: {},
})

interface MenuListProps {
  open: boolean
  children: ReactNode
  css?: SystemStyleObject
}

export function MenuList(props: MenuListProps): ReactElement {
  const { children, open, css: cssProps } = props

  const className = css(menuListRecipe.raw({}), cssProps)

  if (!open) {
    return <></>
  }

  return (
    <nav>
      <ul className={className}>{children}</ul>
    </nav>
  )
}
