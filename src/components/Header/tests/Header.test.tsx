import { composeStories } from "@storybook/testing-react"
import { render, screen } from "@testing-library/react"
import * as stories from "../Header.stories"

describe("Headerコンポーネンtのの描画", () => {
  const { Default } = composeStories(stories)
  it("Headerが表示されていること", async () => {
    render(<Default />)

    expect(await screen.getByText("Asane")).toBeInTheDocument
  })
})
