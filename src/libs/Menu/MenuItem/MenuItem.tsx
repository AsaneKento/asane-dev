import type { ReactElement, ReactNode } from "react"
import Link from "next/link"
import { css, cva } from "~/styled-system/css"
import type { SystemStyleObject } from "~/styled-system/types"

const menuItemRecipe = cva({
  base: {
    cursor: "pointer",
    "& a": {
      display: "flex",
      alignItems: "center",
      pl: "2",
      pr: "8",
      py: "2",
      "& svg": {
        mr: "2",
        w: "5",
        h: "5",
        verticalAlign: "middle",
      },
    },
  },
  variants: {},
  compoundVariants: [],
  defaultVariants: {},
})

interface MenuItemProps {
  path: string
  children: ReactNode
  css?: SystemStyleObject
}

export function MenuItem(props: MenuItemProps): ReactElement {
  const { path, children, css: cssProps } = props

  const className = css(menuItemRecipe.raw({}), cssProps)

  return (
    <li className={className}>
      <Link href={path}>{children}</Link>
    </li>
  )
}
