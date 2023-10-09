import { composeStories } from "@storybook/testing-react"
import { render, screen } from "@testing-library/react"
import * as stories from "../Home.stories"

describe("Home", () => {
  it("Homeが表示されていること", async () => {
    const { Default } = composeStories(stories)
    render(<Default />)

    expect(screen.getByAltText("profile-img")).toBeInTheDocument()
    expect(screen.getByText("Asane Kento")).toBeInTheDocument()
    expect(screen.getByText("Software Engineer")).toBeInTheDocument()
    expect(screen.getByAltText("x-icon")).toBeInTheDocument()
    expect(screen.getByAltText("github-icon")).toBeInTheDocument()
    expect(screen.getByAltText("instagram-icon")).toBeInTheDocument()
  })
})
