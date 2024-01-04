import type { ReactElement } from "react"
import Image from "next/image"
import Link from "next/link"
import { IconButton } from "~/libs/IconButton"
import { css } from "~/styled-system/css"
import GitHubImage from "@/image/sns/github.svg"
import InstagramImage from "@/image/sns/instagram.svg"
import XImage from "@/image/sns/x.svg"

export function Content(): ReactElement {
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
          display: "flex",
          justifyContent: "space-around",
          w: "full",
          p: "8",
          maxWidth: "md",
        })}
      >
        <IconButton size={"xlarge"} css={{ backgroundColor: "black" }}>
          <Link href={"https://twitter.com/Asane_Kento"} target={"_blank"}>
            <Image
              src={XImage}
              alt={"x-icon"}
              width={100}
              height={100}
              className={css({ p: "3.5" })}
            />
          </Link>
        </IconButton>

        <IconButton size={"xlarge"} css={{ backgroundColor: "black" }}>
          <Link href={"https://github.com/AsaneKento"} target={"_blank"}>
            <Image
              src={GitHubImage}
              alt={"github-icon"}
              width={100}
              height={100}
              className={css({ p: "2.5" })}
            />
          </Link>
        </IconButton>

        <IconButton size={"xlarge"} css={{ backgroundColor: "white" }}>
          <Link
            href={"https://www.instagram.com/asane_kento/"}
            target={"_blank"}
          >
            <Image
              src={InstagramImage}
              alt={"instagram-icon"}
              width={100}
              height={100}
              className={css({ p: "2.5" })}
            />
          </Link>
        </IconButton>
      </div>
    </div>
  )
}
