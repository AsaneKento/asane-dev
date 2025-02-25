"use client"

import type { ReactElement, ReactNode } from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps as NextThemeProviderProps } from "next-themes"

interface ThemeProviderProps extends NextThemeProviderProps {
  children: ReactNode
}

export function ThemeProvider({
  children,
  ...props
}: ThemeProviderProps): ReactElement {
  return (
    <NextThemesProvider
      attribute={"class"}
      defaultTheme={"system"}
      enableSystem
      disableTransitionOnChange
      {...props}
    >
      {children}
    </NextThemesProvider>
  )
}
