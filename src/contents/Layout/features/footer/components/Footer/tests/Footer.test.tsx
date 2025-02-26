import { composeStories } from "@storybook/react"
import { render, screen } from "@testing-library/react"
import * as stories from "../Footer.stories"

const { Default } = composeStories(stories)

describe("フッターの描画", () => {
  it("描画が正しくされていること", async () => {
    render(<Default />)

    expect(screen.getByText("Asane")).toBeInTheDocument()
    expect(screen.getByText("Web Engineer.")).toBeInTheDocument()

    expect(
      screen.getByText("© 2025 Asane. All rights reserved."),
    ).toBeInTheDocument()

    expect(screen.getByLabelText("github-icon")).toBeInTheDocument()
    expect(screen.getByLabelText("x-icon")).toBeInTheDocument()
    expect(screen.getByLabelText("instagram-icon")).toBeInTheDocument()
  })

  it("メニューのリンクが正しく設定されてること", async () => {
    render(<Default />)

    expect(screen.getByRole("link", { name: "Home" })).toHaveAttribute(
      "href",
      "/",
    )
    expect(screen.getByRole("link", { name: "Profile" })).toHaveAttribute(
      "href",
      "/",
    )
  })
})
