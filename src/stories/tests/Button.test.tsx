import { composeStories } from "@storybook/react"
import { render, screen } from "@testing-library/react"
import * as stories from "../Button.stories"

const { Primary } = composeStories(stories)

describe("Buttonの描画", () => {
  it("Buttonが表示されていること", async () => {
    render(<Primary />)
    expect(screen.getByText("Button")).toBeInTheDocument()
  })
})
