import { render, screen } from "@testing-library/react"
import Home from "./page"

describe("Home", () => {
  it("HomePageが表示されること", () => {
    render(<Home />)
    expect(screen.getByText("Hello World!")).toBeInTheDocument()
  })
})
