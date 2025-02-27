import type { ReactElement } from "react"
import * as motion from "motion/react-client"
import { SnsIcons } from "~/Components/SnsIcons"
import { Profile } from "~/contents/About/feature/profile"
import { Chip } from "~/lib/components/Chip"
import { MainContainer } from "~/lib/components/MainContainer"
import { fadeInUp, stagger } from "~/lib/motions"
import { Card } from "~/lib/ui/card"

export function About(): ReactElement {
  return (
    <MainContainer>
      <motion.div
        initial={"initial"}
        animate={"animate"}
        variants={stagger}
        className={"max-w-7xl mx-auto space-y-16"}
      >
        <Profile />
        <motion.div aria-label={"articles"} variants={fadeInUp}>
          <div className={"grid grid-cols-1 md:grid-cols-2 gap-8"}>
            <Card className={"p-6 neumorphic md:col-span-2"}>
              <h2 className={"text-xl font-semibold mb-4"}>Expertise</h2>
              <div className={"flex flex-wrap gap-3"}>
                {Expertise.map((skill) => (
                  <Chip key={skill} title={skill} />
                ))}
              </div>
            </Card>

            <Card className={"p-6 neumorphic"}>
              <h2 className={"text-xl font-semibold mb-4"}>Hobbies</h2>
              <div className={"flex flex-wrap gap-3"}>
                {Hobbies.map((hobby) => (
                  <Chip key={hobby} title={hobby} />
                ))}
              </div>
            </Card>

            <Card className={"p-6 neumorphic"}>
              <h2 className={"text-xl font-semibold mb-4"}>Connect</h2>
              <SnsIcons />
            </Card>
          </div>
        </motion.div>
      </motion.div>
    </MainContainer>
  )
}

const Hobbies = [
  "ダイビング",
  "ヨット",
  "スノーボード",
  "動画・写真",
  "ダーツ",
  "ゲーム",
]

const Expertise = [
  "React",
  "Next",
  "TypeScript",
  "JavaScript",
  "Ruby",
  "Ruby on Rails",
]
