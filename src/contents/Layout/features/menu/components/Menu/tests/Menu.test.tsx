import { composeStories } from "@storybook/react"
import { userEvent } from "@storybook/test"
import { render, screen } from "@testing-library/react"
import * as stories from "../Menu.stories"

const { Close } = composeStories(stories)

describe("メニューの描画", () => {
  it("正しく表示されていること", async () => {
    render(<Close />)

    expect(screen.getByLabelText("menu-button")).toBeInTheDocument()
    expect(screen.getByLabelText("open-icon")).toBeInTheDocument()
  })

  it("メニューが開くこと", async () => {
    render(<Close />)

    await userEvent.click(screen.getByLabelText("menu-button"))

    expect(await screen.findByLabelText("close-icon")).toBeInTheDocument()
    expect(await screen.findByText("Home")).toBeInTheDocument()
    expect(await screen.findByText("About")).toBeInTheDocument()
  })
})
