import type { ReactElement } from "react"
import { User } from "lucide-react"
import * as motion from "motion/react-client"
import { ArticleCard } from "~/Components/ArticleCard"
import { LinkCard } from "~/contents/Home/components/LinkCard"
import { Articles } from "~/tests/data/articles"

export function Home(): ReactElement {
  return (
    <main className={"min-h-screen bg-background py-16 px-8 sm:px-6 lg:px-12"}>
      <motion.div
        initial={"initial"}
        animate={"animate"}
        variants={stagger}
        className={"max-w-7xl mx-auto space-y-16"}
      >
        <motion.div aria-label={"contents"} variants={fadeInUp}>
          <h2 className={"text-3xl font-bold mb-8"}>Contents</h2>
          <div
            className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"}
          >
            {/* TODO: 他ページのリンク追加 */}
            <LinkCard
              title={"About"}
              link={"/about"}
              icon={<User className={"h-8 w-8"} />}
            />
          </div>
        </motion.div>

        <motion.div aria-label={"articles"} variants={fadeInUp}>
          <h2 className={"text-3xl font-bold mb-8"}>Featured Articles</h2>
          <div
            className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"}
          >
            {Articles.map((article, index) => (
              <ArticleCard key={index} article={article} />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </main>
  )
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}
