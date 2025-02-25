import { composeStories } from "@storybook/react"
import { render, screen } from "@testing-library/react"
import * as stories from "./page.stories"

const { Default } = composeStories(stories)

describe("トップページの描画", () => {
  it("描画が正しくされていること", async () => {
    render(<Default />)

    expect(screen.getByText("Hello World")).toBeInTheDocument()
    expect(screen.getByLabelText("mode-toggle-button")).toBeInTheDocument()
  })
})
