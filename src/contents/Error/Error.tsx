import type { ReactElement } from "react"
import { Home } from "lucide-react"
import Link from "next/link"
import { MainContainer } from "~/lib/components/MainContainer"
import { Button } from "~/lib/ui/button"

interface ErrorProps {
  errorCode: string
  errorMsg: string
  description?: string
}

export function Error({
  errorCode,
  errorMsg,
  description,
}: ErrorProps): ReactElement {
  return (
    <MainContainer className={"flex justify-center"}>
      <div className={"text-center"}>
        <h1 className={"text-9xl font-bold text-primary mb-4"}>{errorCode}</h1>
        <h2 className={"text-2xl font-semibold mb-6"}>{errorMsg}</h2>
        {description && (
          <p className={"text-muted-foreground mb-8"}>{description}</p>
        )}
        <Link href={"/"}>
          <Button className={"neumorphic"}>
            <Home className={"mr-2 h-4 w-4"} />
            Back to Home
          </Button>
        </Link>
      </div>
    </MainContainer>
  )
}
