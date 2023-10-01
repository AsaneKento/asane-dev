import type { ReactElement } from "react"
import { Header } from "~/components/Header"
import { css } from "~/styled-system/css"
import type { Metadata } from "next"
import "./globals.css"

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
      <body className={css({ maxWidth: "8xl", mx: "auto", py: "8" })}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
