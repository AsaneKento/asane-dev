"use client"

import type { ReactElement } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "~/components/ui/button"

export function ModeToggleButton(): ReactElement {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      aria-label={"mode-toggle-button"}
      variant={"ghost"}
      size={"icon"}
      className={"neumorphic w-9 h-9 p-0"}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
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
      <span className={"sr-only"}>Toggle theme</span>
    </Button>
  )
}
