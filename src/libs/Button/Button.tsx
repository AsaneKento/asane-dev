import type { ReactElement, ReactNode } from "react"
import { cva } from "~/styled-system/css"
import { styled } from "~/styled-system/jsx"

const buttonRecipe = cva({
  base: {
    cursor: "pointer",
    rounded: "sm",
  },
  variants: {
    variant: {
      text: {},
      contained: {
        _disabled: {
          bgColor: "base100",
        },
      },
      outlined: {
        border: "solid 0.1rem",
        _disabled: {
          border: "base100",
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
        fontSize: "sm",
        px: "2",
        py: "1",
      },
      medium: {
        fontSize: "md",
        px: "4",
        py: "1.5",
      },
      large: {
        fontSize: "xl",
        px: "5",
        py: "1.5",
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

const ButtonComponent = styled("button", buttonRecipe)

interface ButtonProps {
  children: ReactNode
  variant?: "text" | "contained" | "outlined"
  size?: "medium" | "small" | "large"
  color?: "primary" | "secondary" | "info" | "success" | "warning" | "error"
}

export function Button(props: ButtonProps): ReactElement {
  const { children, variant, size, color } = props
  return (
    <ButtonComponent variant={variant} size={size} color={color}>
      {children}
    </ButtonComponent>
  )
}
