import { composeStories } from "@storybook/react"
import { render, screen } from "@testing-library/react"
import * as stories from "./layout.stories"

const { Default } = composeStories(stories)

describe("トップページレイアウトの描画", () => {
  it("描画が正しくされていること", async () => {
    render(<Default />)

    expect(screen.getByText("トップページ")).toBeInTheDocument()
  })
})
