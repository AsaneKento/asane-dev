import { About } from "./About"
import type { Meta, StoryObj } from "@storybook/react"

const meta = {
  title: "Contents/About",
  component: About,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof About>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
