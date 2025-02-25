import { composeStories } from "@storybook/react"
import { render, screen } from "@testing-library/react"
import * as stories from "../Header.stories"

const { Light } = composeStories(stories)

describe("ヘッダーの描画", () => {
  it("正しく表示されていること", async () => {
    render(<Light />)

    expect(screen.getByRole("link", { name: "Asane" })).toHaveAttribute(
      "href",
      "/",
    )
    expect(screen.getByLabelText("mode-toggle-button")).toBeInTheDocument()
    expect(screen.getByLabelText("menu-button")).toBeInTheDocument()
  })
})
