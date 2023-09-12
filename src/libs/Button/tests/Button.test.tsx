import { composeStories } from "@storybook/testing-react"
import { render, screen } from "@testing-library/react"
import * as stories from "../Button.stories"

describe("Button", () => {
  it("Buttonが表示されていること", async () => {
    const { Default } = composeStories(stories)
    render(<Default />)
    expect(await screen.getByText("Button")).toBeInTheDocument
  })
})
