import type { ReactElement, ReactNode } from "react"
import { GoogleAnalytics } from "@next/third-parties/google"
import { Inter } from "next/font/google"
import { Layout } from "~/contents/Layout"
import type { Metadata } from "next"
import "~/stylesheet/global.css"

export const metadata: Metadata = {
  title: "Asane",
  description: "Personal Website & Tech Blog",
}

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({
  children,
}: RootLayoutProps): ReactElement {
  return (
    <html lang={"ja"} suppressHydrationWarning>
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
      <GoogleAnalytics gaId={process.env.GA_ID ?? ""} />
    </html>
  )
}

const inter = Inter({ subsets: ["latin"] })
