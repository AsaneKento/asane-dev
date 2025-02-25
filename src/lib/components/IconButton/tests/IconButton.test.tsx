import { composeStories } from "@storybook/react"
import { render, screen } from "@testing-library/react"
import * as stories from "../IconButton.stories"

const { Default } = composeStories(stories)

describe("トップページの描画", () => {
  it("描画が正しくされていること", async () => {
    render(<Default />)

    expect(screen.getByRole("button", { name: "btn" })).toBeInTheDocument()
  })
})
