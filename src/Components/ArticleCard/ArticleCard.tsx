import type { ReactElement } from "react"
import Link from "next/link"
import { Chip } from "~/lib/components/Chip"
import { Button } from "~/lib/ui/button"
import { Card } from "~/lib/ui/card"
import type { ArticleType } from "~/tests/factories/article"

interface ArticleCardProps {
  article: ArticleType
}

export function ArticleCard({ article }: ArticleCardProps): ReactElement {
  return (
    <Link href={"/"}>
      <Card
        className={`p-8 h-full transition-all duration-300 neumorphic neumorphic-inset-animate`}
      >
        <div className={"flex flex-col h-full"}>
          <div className={"flex justify-between items-center mb-4"}>
            <Chip title={article.category} />
            <span className={"text-sm text-muted-foreground"}>
              {article.date}
            </span>
          </div>
          <h3 className={"text-xl font-semibold mb-3"}>{article.title}</h3>
          <p className={"text-muted-foreground flex-grow mb-4"}>
            {article.excerpt}
          </p>
          <Button variant={"default"} className={"w-full neumorphic"}>
            Read More
          </Button>
        </div>
      </Card>
    </Link>
  )
}
