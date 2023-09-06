import type { ReactElement } from "react"
import type { Metadata } from "next"
import "./global.css"

export const metadata: Metadata = {
  title: "Asane",
  description: "Asane's Personal Web",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): ReactElement {
  return (
    <html lang={"ja"}>
      <body>{children}</body>
    </html>
  )
}
