import { composeStories } from "@storybook/react"
import { render, screen } from "@testing-library/react"
import * as stories from "../Chip.stories"

const { Default } = composeStories(stories)

describe("チップの描画", () => {
  it("正しく表示されてること", async () => {
    render(<Default />)

    expect(screen.getByText("Chip")).toBeInTheDocument()
  })
})
