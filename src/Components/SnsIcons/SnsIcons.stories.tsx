import { SnsIcons } from "./SnsIcons"
import type { Meta, StoryObj } from "@storybook/react"

const meta = {
  title: "Components/SnsIcons",
  component: SnsIcons,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SnsIcons>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
