import { composeStories } from "@storybook/react"
import { render, screen } from "@testing-library/react"
import * as stories from "../Error.stories"

const { NotFound, ServerError } = composeStories(stories)

describe("エラーページの描画", () => {
  it("404ページが表示できること", async () => {
    render(<NotFound />)

    expect(screen.getByText("404")).toBeInTheDocument()
    expect(screen.getByText("Not Found")).toBeInTheDocument()
    expect(
      screen.getByText("ページが見つかりませんでした。"),
    ).toBeInTheDocument()
    expect(screen.getByRole("link")).toHaveAttribute("href", "/")
  })

  it("500ページが表示できること", async () => {
    render(<ServerError />)

    expect(screen.getByText("500")).toBeInTheDocument()
    expect(screen.getByText("Server Error")).toBeInTheDocument()
    expect(screen.getByText("予期せぬエラーが発生しました")).toBeInTheDocument()
    expect(screen.getByRole("link")).toHaveAttribute("href", "/")
  })
})
