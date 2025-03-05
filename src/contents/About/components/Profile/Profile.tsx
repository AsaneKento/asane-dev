import type { ReactElement } from "react"
import { Mail, MapPin } from "lucide-react"
import * as motion from "motion/react-client"
import Image from "next/image"
import { fadeInUp } from "~/lib/motions"
import { Card } from "~/lib/ui/card"
import profileImage from "@/asane.jpg"

export function Profile(): ReactElement {
  return (
    <motion.div aria-label={"profile"} variants={fadeInUp}>
      <Card className={"p-8 neumorphic"}>
        <div className={"flex flex-col md:flex-row gap-8 items-start"}>
          <div
            className={
              "w-32 h-32 rounded-full overflow-hidden neumorphic-inset flex-shrink-0"
            }
          >
            <Image
              src={profileImage}
              alt={"Profile"}
              width={300}
              height={300}
              className={"w-full h-full object-cover"}
            />
          </div>
          <div className={"flex-1 space-y-4"}>
            <div>
              <h1 className={"text-3xl font-bold"}>Asane Kento</h1>
              <p className={"text-muted-foreground"}>Web Engineer.</p>
            </div>
            <div aria-label={"profile-description"} className={"space-y-2"}>
              <p>某広告会社で社内システムの開発を行なっています</p>
              <p>お酒を飲みつつコーディングをするのが趣味</p>
            </div>
            <div className={"flex flex-wrap gap-4"}>
              <div className={"flex items-center gap-2 text-muted-foreground"}>
                <MapPin className={"h-4 w-4"} />
                <span>Japan, Tokyo</span>
              </div>
              <div className={"flex items-center gap-2 text-muted-foreground"}>
                <Mail className={"h-4 w-4"} />
                <span>contact@asane.dev</span>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}
