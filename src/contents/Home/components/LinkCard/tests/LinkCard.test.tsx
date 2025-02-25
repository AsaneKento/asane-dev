import { composeStories } from "@storybook/react"
import { render, screen } from "@testing-library/react"
import * as stories from "../LinkCard.stories"

const { Default, Icon } = composeStories(stories)

describe("リンクカードの表示の描画", () => {
  it("描画が正しくされていること", async () => {
    render(<Default />)

    expect(screen.getByText("Sample Title")).toBeInTheDocument()
    expect(screen.getByRole("link")).toHaveAttribute("href", "/")
  })

  it("アイコンの表示", async () => {
    render(<Icon />)

    expect(screen.getByLabelText("icon")).toBeInTheDocument()
  })
})
