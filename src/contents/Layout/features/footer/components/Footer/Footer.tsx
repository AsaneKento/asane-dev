import type { ReactElement } from "react"
import * as motion from "motion/react-client"
import { SnsIcons } from "~/Components/SnsIcons"
import { LinkButton } from "../LinkButton"
import { Section } from "../Section"

export function Footer(): ReactElement {
  return (
    <motion.footer
      aria-label={"footer"}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={"border-t bg-background"}
    >
      <div
        className={
          "container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8 py-12"
        }
      >
        <div className={"grid grid-cols-1 md:grid-cols-3 gap-8"}>
          <Section title={"Asane"}>
            <p className={"text-sm text-muted-foreground"}>Web Engineer.</p>
          </Section>
          <Section title={"Contents"}>
            <ul className={"space-y-2"}>
              <li>
                <LinkButton link={"/"}>Home</LinkButton>
              </li>
              <li>
                <LinkButton link={"/"}>Profile</LinkButton>
              </li>
            </ul>
          </Section>
          <Section title={"Follow Us"}>
            <SnsIcons />
          </Section>
        </div>
        <div
          className={"border-t pt-8 text-center text-sm text-muted-foreground"}
        >
          <p>© 2025 Asane. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  )
}
