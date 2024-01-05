import type { ReactElement } from "react"
import { GoogleAnalytics } from "@next/third-parties/google"
import { Header } from "~/components/Header"
import { css } from "~/styled-system/css"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Asane",
  description: "Asane's Personal Web",
  icons: [{ rel: "icon", url: "/favicon/favicon.ico" }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): ReactElement {
  return (
    <html lang={"ja"}>
      <head>
        <GoogleAnalytics gaId={process.env.GA_ID || ""} />
      </head>
      <body
        className={css({
          maxWidth: "8xl",
          mx: "auto",
          py: "8",
          minWidth: "sm",
          overflow: "auto",
        })}
      >
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
