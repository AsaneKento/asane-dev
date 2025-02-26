"use client"

import type { ReactElement } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { IconButton } from "~/lib/components/IconButton"

export function ModeToggleButton(): ReactElement {
  const { theme, setTheme } = useTheme()

  return (
    <IconButton
      aria-label={"mode-toggle-button"}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <>
        <Sun
          aria-label={"light-mode"}
          className={
            "h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
          }
        />
        <Moon
          aria-label={"dark-mode"}
          className={
            "absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
          }
        />
      </>
    </IconButton>
  )
}
