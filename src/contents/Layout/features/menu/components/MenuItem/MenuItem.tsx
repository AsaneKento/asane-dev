"use client"

import type { ReactElement, ReactNode } from "react"
import { Check } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { DropdownMenuItem } from "~/lib/ui/dropdown-menu"

interface MenuItemProps {
  title: string
  link: string
  icon: ReactNode
}

export function MenuItem({ link, title, icon }: MenuItemProps): ReactElement {
  const currentPath = usePathname()

  return (
    <DropdownMenuItem asChild className={"pl-4 py-3"}>
      <Link href={link}>
        {icon}
        {title}
        {currentPath === link && <Check className={"h-4 w-4 ml-2"} />}
      </Link>
    </DropdownMenuItem>
  )
}
