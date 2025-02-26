import { composeStories } from "@storybook/react"
import { render, screen } from "@testing-library/react"
import * as stories from "../Home.stories"

const { Default } = composeStories(stories)

describe("トップページの描画", () => {
  it("描画が正しくされていること", async () => {
    render(<Default />)

    expect(screen.getByLabelText("contents")).toBeInTheDocument()
    expect(screen.getByText("Contents")).toBeInTheDocument()

    expect(screen.getByLabelText("articles")).toBeInTheDocument()
    expect(screen.getByText("Featured Articles")).toBeInTheDocument()
  })

  it("Contentsの表示が正常にできていること", async () => {
    render(<Default />)

    expect(screen.getByText("About")).toBeInTheDocument()
    expect(screen.getByRole("link", { name: "About" })).toHaveAttribute(
      "href",
      "/about",
    )
  })
})
