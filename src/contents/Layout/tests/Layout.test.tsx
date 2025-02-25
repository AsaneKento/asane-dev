import { composeStories } from "@storybook/react"
import { render, screen } from "@testing-library/react"
import * as stories from "../Layout.stories"

const { Default } = composeStories(stories)

describe("レイアウトの描画", () => {
  it("描画が正しくされていること", async () => {
    render(<Default />)

    expect(screen.getByLabelText("header")).toBeInTheDocument()
    expect(screen.getByText("Contents")).toBeInTheDocument()
  })
})
