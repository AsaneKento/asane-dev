import { composeStories } from "@storybook/react"
import { render, screen } from "@testing-library/react"
import * as stories from "../Profile.stories"

describe("Profile", () => {
  it("Profileが表示されていること", async () => {
    const { Default } = composeStories(stories)
    render(<Default />)

    expect(screen.getByAltText("profile-img")).toBeInTheDocument()
    expect(screen.getByText("Asane Kento")).toBeInTheDocument()
    expect(screen.getByText("Software Engineer")).toBeInTheDocument()
  })
})
