import { Logo } from "./Logo"
import type { Meta, StoryObj } from "@storybook/react"

const meta = {
  title: "Components/Header/Components/Logo",
  component: Logo,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Logo>

export default meta
type Story = StoryObj<typeof Logo>

export const Default: Story = {}
