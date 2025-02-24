import type { ReactElement } from "react"
import type { Metadata } from "next"

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
    <html lang={"ja"}>
      <body>{children}</body>
    </html>
  )
}
