import { composeStories } from "@storybook/react"
import { render, screen } from "@testing-library/react"
import * as stories from "../Content.stories"

describe("Content", () => {
  it("Contentが表示されていること", async () => {
    const { Default } = composeStories(stories)
    render(<Default />)

    // Xのコンテンツテスト
    const XIcon = screen.getByAltText("x-icon")
    expect(XIcon).toBeInTheDocument()
    expect(XIcon.closest("a")).toHaveAttribute(
      "href",
      "https://twitter.com/Asane_Kento",
    )
    expect(XIcon.closest("a")).toHaveAttribute("target", "_blank")
    expect(XIcon.closest("button")).toBeInTheDocument()

    // GitHubのコンテンツテスト
    const GithubIcon = screen.getByAltText("github-icon")
    expect(GithubIcon).toBeInTheDocument()
    expect(GithubIcon.closest("a")).toHaveAttribute(
      "href",
      "https://github.com/AsaneKento",
    )
    expect(GithubIcon.closest("a")).toHaveAttribute("target", "_blank")
    expect(GithubIcon.closest("button")).toBeInTheDocument()

    // Instagramのコンテンツテスト
    const InstagramIcon = screen.getByAltText("instagram-icon")
    expect(InstagramIcon).toBeInTheDocument()
    expect(InstagramIcon.closest("a")).toHaveAttribute(
      "href",
      "https://www.instagram.com/asane_kento/",
    )
    expect(InstagramIcon.closest("a")).toHaveAttribute("target", "_blank")
    expect(InstagramIcon.closest("button")).toBeInTheDocument()
  })
})
