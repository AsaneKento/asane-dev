import type { ReactElement } from "react"
import { ThemeProvider } from "~/utils/ThemeProvider"
import type { Metadata } from "next"
import "~/stylesheet/global.css"

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>): ReactElement {
  return (
    <html lang={"ja"} suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
