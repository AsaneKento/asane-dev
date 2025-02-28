"use client"

import type { ReactElement } from "react"
import { Error } from "~/contents/Error"

export default function ServerError(): ReactElement {
  return (
    <Error
      errorCode={"500"}
      errorMsg={"Server Error"}
      description={"予期せぬエラーが発生しました"}
    />
  )
}
