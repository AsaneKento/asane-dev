import { composeStories } from "@storybook/testing-react"
import { render, screen } from "@testing-library/react"
import * as stories from "../Logo.stories"

describe("Logo", () => {
  it("Logoが表示されていること", async () => {
    const { Default } = composeStories(stories)
    render(<Default />)

    const Logo = screen.getByAltText("logo")
    expect(Logo).toBeInTheDocument()
    expect(Logo.closest("a")).toHaveAttribute("href", "/")
  })
})
