import { Home } from "./Home"
import type { Meta, StoryObj } from "@storybook/react"

const meta = {
  title: "Contents/Home",
  component: Home,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Home>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
