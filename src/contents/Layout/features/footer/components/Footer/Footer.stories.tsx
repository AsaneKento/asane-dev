import { Footer } from "./Footer"
import type { Meta, StoryObj } from "@storybook/react"

const meta = {
  title: "Contents/Layout/Feature/Footer/Footer",
  component: Footer,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Footer>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
