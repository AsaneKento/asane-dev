import Home from "./page"
import type { Meta, StoryObj } from "@storybook/react"

const meta = {
  title: "Pages/Home/Page",
  component: Home,
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof Home>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
