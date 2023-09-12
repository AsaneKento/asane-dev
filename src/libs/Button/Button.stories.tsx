import { Button } from "./Button"
import type { Meta, StoryObj } from "@storybook/react"

const meta = {
  title: "Libs/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    children: "Button",
  },
}

export const Outlined: Story = {
  args: {
    children: "Button",
    variant: "outlined",
  },
}

export const Text: Story = {
  args: {
    children: "Button",
    variant: "text",
  },
}
