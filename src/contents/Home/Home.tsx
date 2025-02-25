import type { ReactElement } from "react"
import { BookOpen, Code2, Lightbulb, Newspaper } from "lucide-react"
import * as motion from "motion/react-client"
import { LinkCard } from "~/contents/Home/components/LinkCard"

export function Home(): ReactElement {
  return (
    <main
      aria-label={"contents"}
      className={"min-h-screen bg-background py-16 px-8 sm:px-6 lg:px-12"}
    >
      <motion.div
        initial={"initial"}
        animate={"animate"}
        variants={stagger}
        className={"max-w-7xl mx-auto space-y-16"}
      >
        <motion.div
          variants={fadeInUp}
          className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"}
        >
          <LinkCard
            title={"Technical Deep Dives"}
            link={"/"}
            icon={<Code2 className={"h-8 w-8"} />}
          />
          <LinkCard
            title={"Best Practices"}
            link={"/"}
            icon={<Lightbulb className={"h-8 w-8"} />}
          />
          <LinkCard
            title={"Tutorials"}
            link={"/"}
            icon={<BookOpen className={"h-8 w-8"} />}
          />
          <LinkCard
            title={"Tech News"}
            link={"/"}
            icon={<Newspaper className={"h-8 w-8"} />}
          />
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
