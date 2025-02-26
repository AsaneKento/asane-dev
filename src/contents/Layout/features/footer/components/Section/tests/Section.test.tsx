import { composeStories } from "@storybook/react"
import { render, screen } from "@testing-library/react"
import * as stories from "../Section.stories"

const { Default } = composeStories(stories)

describe("セクションの描画", () => {
  it("正しく表示されていること", async () => {
    render(<Default />)

    expect(screen.getByText("セクションタイトル")).toBeInTheDocument()
    expect(screen.getByText("セクション内容")).toBeInTheDocument()
  })
})
