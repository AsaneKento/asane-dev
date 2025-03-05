import { composeStories } from "@storybook/react"
import { render, screen } from "@testing-library/react"
import * as stories from "../Profile.stories"

const { Default } = composeStories(stories)

describe("プロフィールの描画", () => {
  it("内容が正しく表示されること", async () => {
    render(<Default />)

    expect(screen.getByText("Asane Kento")).toBeInTheDocument()
    expect(screen.getByLabelText("profile-description")).toBeInTheDocument()
    expect(screen.getByText("Japan, Tokyo")).toBeInTheDocument()
    expect(screen.getByText("contact@asane.dev")).toBeInTheDocument()
  })
})
