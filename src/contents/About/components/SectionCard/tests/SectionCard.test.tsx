import { composeStories } from "@storybook/react"
import { render, screen } from "@testing-library/react"
import * as stories from "../SectionCard.stories"

const { Default } = composeStories(stories)

describe("セクションカードの描画", () => {
  it("内容が正しく表示されること", async () => {
    render(<Default />)

    expect(screen.getByText("Expertise")).toBeInTheDocument()
    expect(screen.getByText("React")).toBeInTheDocument()
    expect(screen.getByText("Next")).toBeInTheDocument()
  })
})
