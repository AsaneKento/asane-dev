import type { ReactElement } from "react"
import Image from "next/image"
import { css } from "~/styled-system/css"
import IconImage from "@/image/icon.jpg"

export function Profile(): ReactElement {
  return (
    <div
      className={css({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      })}
    >
      <div
        className={css({
          position: "relative",
          w: "28",
          h: "28",
        })}
      >
        <Image
          src={IconImage}
          alt={"profile-img"}
          layout={"fill"}
          objectFit={"cover"}
          className={css({ borderRadius: "full" })}
        />
      </div>
      <div className={css({ textAlign: "center" })}>
        <p
          className={css({
            fontWeight: "bold",
            fontSize: "4xl",
          })}
        >
          Asane Kento
        </p>
        <p className={css({ fontWeight: "bold" })}>Software Engineer</p>
      </div>
    </div>
  )
}
