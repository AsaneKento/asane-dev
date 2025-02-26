import { composeStories } from "@storybook/react"
import { render, screen } from "@testing-library/react"
import * as stories from "../LinkButton.stories"

const { Default } = composeStories(stories)

describe("リンクボタンの描画", () => {
  it("正しく表示されていること", async () => {
    render(<Default />)

    expect(screen.getByRole("link")).toHaveAttribute("href", "/")
    expect(
      screen.getByRole("button", { name: "リンクボタン" }),
    ).toBeInTheDocument()
  })
})
