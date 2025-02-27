import { Chip } from "./Chip"
import type { Meta, StoryObj } from "@storybook/react"

const meta = {
  title: "Lib/Chip",
  component: Chip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Chip>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: "Chip",
  },
}
