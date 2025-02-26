import { composeStories } from "@storybook/react"
import { render, screen } from "@testing-library/react"
import { Article } from "~/tests/data/articles"
import * as stories from "../ArticleCard.stories"

const { Default } = composeStories(stories)

describe("カードの描画", () => {
  it("描画が正しくされていること", async () => {
    render(<Default />)

    expect(screen.getByRole("link")).toHaveAttribute("href", "/")
    expect(screen.getByText(Article.title)).toBeInTheDocument()
    expect(screen.getByText(Article.category)).toBeInTheDocument()
    expect(screen.getByText(Article.excerpt)).toBeInTheDocument()
    expect(screen.getByText(Article.date)).toBeInTheDocument()
    expect(
      screen.getByRole("button", { name: "Read More" }),
    ).toBeInTheDocument()
  })
})
