import { Bars3Icon } from "@heroicons/react/24/outline"
import { IconButton } from "./IconButton"
import type { Meta, StoryObj } from "@storybook/react"

const meta = {
  title: "Libs/IconButton",
  component: IconButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof IconButton>

export default meta
type Story = StoryObj<typeof IconButton>

export const Default: Story = {
  args: {
    children: <Bars3Icon aria-label={"svg"} />,
  },
}

export const Outlined: Story = {
  args: {
    children: <Bars3Icon />,
    variant: "outlined",
  },
}

export const Text: Story = {
  args: {
    children: <Bars3Icon />,
    variant: "text",
  },
}
