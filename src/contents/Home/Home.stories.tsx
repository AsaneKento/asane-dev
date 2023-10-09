import { Home } from "./Home"
import type { Meta, StoryObj } from "@storybook/react"

const meta = {
  title: "Contents/Home",
  component: Home,
  tags: ["autodocs"],
} satisfies Meta<typeof Home>

export default meta
type Story = StoryObj<typeof Home>

export const Default: Story = {}
