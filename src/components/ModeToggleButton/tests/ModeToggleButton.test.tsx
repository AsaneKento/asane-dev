import { composeStories } from "@storybook/react"
import { userEvent } from "@storybook/test"
import { render, screen } from "@testing-library/react"
import * as stories from "../ModeToggleButton.stories"

const { Default } = composeStories(stories)

describe("ModeToggleButtonの描画", () => {
  it("正しく表示されていること", async () => {
    render(<Default />)

    expect(screen.getByLabelText("mode-toggle-button")).toBeInTheDocument()
    expect(screen.getByLabelText("light-mode")).toBeInTheDocument()
  })

  it("ボタンでの切り替えが可能なこと", async () => {
    render(<Default />)

    expect(screen.getByLabelText("light-mode")).toBeInTheDocument()
    await userEvent.click(screen.getByLabelText("mode-toggle-button"))
    expect(screen.getByLabelText("dark-mode")).toBeInTheDocument()
  })
})
