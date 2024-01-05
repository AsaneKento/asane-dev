import { composeStories } from "@storybook/react"
import { render, screen } from "@testing-library/react"
import * as stories from "../IconButton.stories"

describe("IconButton.test", () => {
  it("IconButton.testが表示されていること", async () => {
    const { Default } = composeStories(stories)
    render(<Default />)
    expect(await screen.getByLabelText("svg")).toBeInTheDocument
  })
})
