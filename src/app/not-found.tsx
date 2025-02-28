"use client"

import type { ReactElement } from "react"
import { Error } from "~/contents/Error"

export default function NotFound(): ReactElement {
  return (
    <Error
      errorCode={"404"}
      errorMsg={"Not Found"}
      description={"ページが見つかりませんでした。"}
    />
  )
}
