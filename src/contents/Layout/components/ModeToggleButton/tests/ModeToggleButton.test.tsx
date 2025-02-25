import { composeStories } from "@storybook/react"
import { userEvent } from "@storybook/test"
import { render, screen } from "@testing-library/react"
import * as stories from "../ModeToggleButton.stories"

const { Light, Dark } = composeStories(stories)

describe("ライトモード時の描画", () => {
  it("正しく表示されていること", async () => {
    render(<Light />)

    expect(screen.getByLabelText("mode-toggle-button")).toBeInTheDocument()
    expect(screen.getByLabelText("light-mode")).toBeInTheDocument()
  })

  it("ボタンでの切り替えが可能なこと", async () => {
    render(<Light />)

    expect(screen.getByLabelText("light-mode")).toBeInTheDocument()
    await userEvent.click(screen.getByLabelText("mode-toggle-button"))
    expect(screen.getByLabelText("dark-mode")).toBeInTheDocument()
  })
})

describe("ダーク時の描画", () => {
  it("正しく表示されていること", async () => {
    render(<Dark />)

    expect(screen.getByLabelText("mode-toggle-button")).toBeInTheDocument()
    expect(screen.getByLabelText("dark-mode")).toBeInTheDocument()
  })

  it("ボタンでの切り替えが可能なこと", async () => {
    render(<Dark />)

    expect(screen.getByLabelText("dark-mode")).toBeInTheDocument()
    await userEvent.click(screen.getByLabelText("mode-toggle-button"))
    expect(screen.getByLabelText("light-mode")).toBeInTheDocument()
  })
})
