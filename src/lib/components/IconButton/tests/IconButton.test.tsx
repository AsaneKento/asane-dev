import { composeStories } from "@storybook/react"
import { render, screen } from "@testing-library/react"
import * as stories from "../IconButton.stories"

const { Default } = composeStories(stories)

describe("ボタンの描画", () => {
  it("正しく表示されてること", async () => {
    render(<Default />)

    expect(screen.getByRole("button", { name: "btn" })).toBeInTheDocument()
  })
})
