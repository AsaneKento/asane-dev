import type { ReactElement, ReactNode } from "react"
import { css, cva } from "~/styled-system/css"
import type { SystemStyleObject } from "~/styled-system/types"

const iconButtonRecipe = cva({
  base: {
    cursor: "pointer",
    rounded: "sm",
    verticalAlign: "middle",
  },
  variants: {
    variant: {
      text: {
        _disabled: {
          color: "base100",
        },
      },
      contained: {
        _disabled: {
          bgColor: "base100",
        },
      },
      outlined: {
        border: "solid 0.1rem",
        _disabled: {
          color: "base100",
        },
      },
    },
    color: {
      primary: {
        bgColor: "primary",
        color: "primary",
      },
      secondary: {
        bgColor: "secondary",
        color: "secondary",
      },
      info: {
        bgColor: "info",
        color: "info",
      },
      success: {
        bgColor: "success",
        color: "success",
      },
      warning: {
        bgColor: "warning",
        color: "warning",
      },
      error: {
        bgColor: "error",
        color: "error",
      },
    },
    size: {
      small: {
        w: 6,
        h: 6,
      },
      medium: {
        w: 8,
        h: 8,
      },
      large: {
        w: 10,
        h: 10,
      },
      xlarge: {
        w: 16,
        h: 16,
      },
    },
  },
  compoundVariants: [
    {
      variant: "contained",
      color: ["primary", "secondary", "info", "success", "warning", "error"],
      css: {
        color: "white",
      },
    },
    {
      variant: ["outlined", "text"],
      color: ["primary", "secondary", "info", "success", "warning", "error"],
      css: {
        bgColor: "transparent",
      },
    },
  ],
  defaultVariants: {
    variant: "contained",
    color: "primary",
    size: "medium",
  },
})

interface IconButtonProps {
  variant?: "text" | "contained" | "outlined"
  size?: "medium" | "small" | "large" | "xlarge"
  color?: "primary" | "secondary" | "info" | "success" | "warning" | "error"
  disabled?: boolean
  children: ReactNode
  css?: SystemStyleObject
  onClick?: () => void
}

export function IconButton(props: IconButtonProps): ReactElement {
  const {
    variant,
    size,
    color,
    children,
    disabled,
    onClick: handleClick,
    css: cssProps,
  } = props

  const className = css(
    iconButtonRecipe.raw({
      variant: variant,
      color: color,
      size: size,
    }),
    cssProps,
  )

  return (
    <button className={className} disabled={disabled} onClick={handleClick}>
      {children}
    </button>
  )
}
