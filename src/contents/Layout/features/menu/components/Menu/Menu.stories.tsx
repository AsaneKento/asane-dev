import { userEvent, within } from "@storybook/test"
import { Menu } from "./Menu"
import type { Meta, StoryObj } from "@storybook/react"

const meta = {
  title: "Contents/Layout/Feature/Menu/Menu",
  component: Menu,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Menu>

export default meta
type Story = StoryObj<typeof meta>

export const Close: Story = {
  args: {},
}

export const Open: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    await userEvent.click(within(canvasElement).getByLabelText("menu-button"))
  },
}
