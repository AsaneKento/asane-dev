import type { Dispatch, SetStateAction } from "react"
import { useEffect, type ReactElement, type ReactNode } from "react"
import { css, cva } from "~/styled-system/css"
import type { SystemStyleObject } from "~/styled-system/types"

const menuRecipe = cva({
  base: {
    position: "relative",
    "& ul": {
      position: "absolute",
      top: "calc(100% + 1rem)",
      right: "0",
    },
  },
  variants: {},
  compoundVariants: [],
  defaultVariants: {},
})

interface MenuProps {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  children: ReactNode
  css?: SystemStyleObject
}

export function Menu(props: MenuProps): ReactElement {
  const { open, setOpen, children, css: cssProps } = props

  useEffect(() => {
    const handleOutsideClick = (): void => {
      if (open) {
        setOpen(false)
      }
    }

    document.addEventListener("mousedown", handleOutsideClick)

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick)
    }
  }, [setOpen, open])

  const className = css(menuRecipe.raw({}), cssProps)

  return <div className={className}>{children}</div>
}
