import { composeStories } from "@storybook/testing-react"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import * as stories from "../HeaderMenu.stories"

describe("HeaderMenu", () => {
  it("HeaderMenuが表示されていること", async () => {
    const { Default } = composeStories(stories)
    render(<Default />)

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
