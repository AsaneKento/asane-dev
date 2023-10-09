import { HeaderMenu } from "./HeaderMenu"
import type { Meta, StoryObj } from "@storybook/react"

const meta = {
  title: "Components/Header/Components/HeaderMenu",
  component: HeaderMenu,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof HeaderMenu>

export default meta
type Story = StoryObj<typeof HeaderMenu>

export const Default: Story = {}
