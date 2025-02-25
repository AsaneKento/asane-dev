import { action } from "@storybook/addon-actions"
import { IconButton } from "./IconButton"
import type { Meta, StoryObj } from "@storybook/react"

const meta = {
  title: "Lib/IconButton",
  component: IconButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof IconButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: <>{"btn"}</>,
    onClick: action("click-icon-button"),
  },
}
