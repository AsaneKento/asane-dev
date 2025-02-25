import type { ReactElement } from "react"
import { Menu } from "lucide-react"
import * as motion from "motion/react-client"
import Link from "next/link"
import { IconButton } from "~/lib/components/IconButton"
import { ModeToggleButton } from "../ModeToggleButton"

export function Header(): ReactElement {
  return (
    <motion.header
      aria-label={"header"}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={
        "sticky top-0 z-50 w-full border-b bg-background/90 backdrop-blur-md"
      }
    >
      <div
        className={
          "container mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-5 flex items-center justify-between"
        }
      >
        <div>
          <Link href={"/"}>
            <span className={"font-bold text-xl"}>Asane</span>
          </Link>
        </div>
        <div
          className={
            "flex flex-1 items-center justify-end space-x-4 md:space-x-10"
          }
        >
          <ModeToggleButton />
          <IconButton aria-label={"menu-button"}>
            <Menu className={"h-4 w-4"} />
          </IconButton>
        </div>
      </div>
    </motion.header>
  )
}
