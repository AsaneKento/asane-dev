import { composeStories } from "@storybook/react"
import { render, screen } from "@testing-library/react"
import * as stories from "../SnsIcons.stories"

const { Default } = composeStories(stories)

describe("SNSの描画", () => {
  it("正しく表示されていること", async () => {
    render(<Default />)

    expect(screen.getByRole("link", { name: "github-icon" })).toHaveAttribute(
      "href",
      "https://github.com/AsaneKento",
    )
    expect(screen.getByRole("link", { name: "x-icon" })).toHaveAttribute(
      "href",
      "https://x.com/Asane_Kento",
    )
    expect(
      screen.getByRole("link", { name: "instagram-icon" }),
    ).toHaveAttribute("href", "https://www.instagram.com/asane_kento/")
  })
})
