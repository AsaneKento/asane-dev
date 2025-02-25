import { Layout } from "./Layout"
import type { Meta, StoryObj } from "@storybook/react"

const meta = {
  title: "Contents/Layout",
  component: Layout,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Layout>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: "Contents",
  },
}
