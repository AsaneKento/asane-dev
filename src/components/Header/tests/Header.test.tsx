import { composeStories } from "@storybook/react"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import * as stories from "../Header.stories"

describe("Header", () => {
  it("Headerが表示されていること", async () => {
    const { Default } = composeStories(stories)
    render(<Default />)

    const Logo = screen.getByAltText("logo")
    expect(Logo).toBeInTheDocument()
    expect(Logo.closest("a")).toHaveAttribute("href", "/")

    expect(screen.getByLabelText("open-icon")).toBeInTheDocument()

    await userEvent.click(screen.getByRole("button"))
    await waitFor(() => {
      expect(screen.getByLabelText("close-icon")).toBeInTheDocument()
      expect(screen.getByText("Home")).toBeInTheDocument()
      expect(screen.getByText("TimeLine")).toBeInTheDocument()
      expect(screen.getByText("Contact")).toBeInTheDocument()
    })
  })
})
